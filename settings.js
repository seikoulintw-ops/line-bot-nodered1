module.exports = {
  // Render 會自動分配 PORT，不能寫死
  uiPort: process.env.PORT,

  // Webhook 可從外部進入
  httpNodeRoot: "/",


  // 全域變數可在 Function 節點讀取
  functionGlobalContext: {
    gas_url: process.env.GAS_URL,
    line_token: process.env.LINE_TOKEN,
  },

};
