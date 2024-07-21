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

  const doSpeedTest = () => {
    new SpeedTest().onFinish = result => {
      chrome.storage.local.get('userId', (storage) => {
        record({
          name: "speedTestV2",
          attributes: {
            userId: storage.userId
          },
          metrics: {
            downloadInMbps: result.getSummary().download ?? 0 / 0.000001,
          },
        })
      })
    }
  }
  doSpeedTest();
}
