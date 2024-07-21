import { Amplify } from 'aws-amplify';
import { record } from 'aws-amplify/analytics';
import SpeedTest from '@cloudflare/speedtest';

export const watch = (): void => {
  Amplify.configure({
    Auth: {
      Cognito: {
        identityPoolId: process.env.IDP_ID ?? '',
        allowGuestAccess: true
      }
    },
    Analytics: {
      Pinpoint: {
        appId: process.env.APP_ID ?? '',
        region: 'ap-northeast-1',
      },
    }
  });

  chrome.alarms.create('speedTest', { periodInMinutes: 3 }); // 3mごとに実行

  // アラームリスナー
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'speedTest') {
      doSpeedTest();
    }
  });

  const doSpeedTest = async () => {
    const settings = await fetch(process.env.SETTING_ENDPOINT ?? 'https://tan-t.github.io/universal-speed-insight/setting.json').then(x=>x.json());
    new SpeedTest(settings.CloudflareSpeed ?? undefined).onFinish = result => {
      chrome.storage.local.get('userId', (storage) => {
        const connection = (navigator as any).connection;
        record({
          name: "speedTestV2",
          attributes: {
            userId: storage.userId,
            networkType: connection?.type ?? 'unknown',
          },
          metrics: {
            packetLoss: result.getSummary().packetLoss ?? 0,
            downloadBps: result.getSummary().download ?? 0,
            downloadLatency: result.getSummary().downLoadedLatency ?? 0,
            downloadJitter: result.getSummary().downLoadedJitter ?? 0,
            uploadBps: result.getSummary().upload ?? 0,
            uploadLatency: result.getSummary().upLoadedLatency ?? 0,
            uploadJitter: result.getSummary().upLoadedJitter ?? 0,
          },
        })
      })
    }
  }
  doSpeedTest();
}

