module.exports = {
  // Render 會自動提供這個埠號（PORT）
  uiPort: process.env.PORT || 1880,

  // 讓 http 節點（Webhook）可從外部連進來
  httpNodeRoot: "/",

  // 在 function 節點可取用全域變數
  functionGlobalContext: {
    gas_url: process.env.GAS_URL,
    line_token: process.env.LINE_TOKEN
  },

  // 不先設帳密，先讓它順利啟動
};
