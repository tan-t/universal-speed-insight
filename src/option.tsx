import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

const App = () => {
  const { save, userId, setUserId, saved } = useUserId();
  return <div>
    <p>メールアドレスを入れてください</p>
    <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
    <button onClick={save}>保存</button>
    {saved && <p>保存しました</p>}
  </div>
}


// hooks
const loadLocalOnce = async (key:string) => {
  return new Promise<any>((resolve)=>{
    chrome.storage.local.get(key, (res) => {
      resolve(res);
    })
  })
}

export const useUserId = () => {
  const [userId, setUserId] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    loadLocalOnce('userId').then(res=>setUserId(res?.userId ?? ''))
  }, []);

  const save = async () => {
    await chrome.storage.local.set({ userId });
    setSaved(true);
  }

  return { save, userId, setUserId, saved };
}

render(<App />, document.getElementById('app'));
