module.exports = {
  // Render 會自動分配 PORT，不能寫死
  uiPort: process.env.PORT,

  // Webhook 可從外部進入
  httpNodeRoot: "/",

  // 健康檢查 (Render、UptimeRobot 可 ping)
  httpStatic: "public",

  // 全域變數可在 Function 節點讀取
  functionGlobalContext: {
    gas_url: process.env.GAS_URL,
    line_token: process.env.LINE_TOKEN,
  },

  // 啟動時輸出健康訊息
  onStart: function () {
    console.log("✅ Node-RED 已啟動，伺服器健康正常！");
  },

  // 保留預設設定
  adminAuth: null,
  httpAdminRoot: "/admin",
  flowFile: "flows.json",

  // 關閉專案功能 (可加快啟動速度)
  editorTheme: {
    projects: {
      enabled: false
    }
  }
};
