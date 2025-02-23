declare const global: {
    // biome-ignore lint/suspicious/noExplicitAny: Google Apps Scriptのglobalオブジェクトの型定義
    [key: string]: any;
  };
  
  global.run = () => {
    console.log('run');
  };