const { app, BrowserWindow, Tray, Menu } = require('electron')
const path = require('path')

let tray = null
const icon = path.join(__dirname,'/build/icons/256x256.png')
const preload = path.join(__dirname, 'preload.js')


function createWindow () {   
    // 创建浏览器窗口
    const win = new BrowserWindow({
      width: 1100,
      height: 720,
      icon: icon,
      autoHideMenuBar: true,
      webPreferences: {
        nodeIntegration: true,
        preload
      },
    })
    win.loadURL("https://wx.qq.com/")
    // 并且为你的应用加载index.html
    tray = new Tray(icon)
    const contextMenu = Menu.buildFromTemplate([
      { label: '显示主窗口', click() {
        win.show()
      } },
      { label: '退出', role: 'quit' }
    ])
    tray.setToolTip('wechat-electron')
    tray.setContextMenu(contextMenu)
    
  }
  
  app.whenReady().then(() => {
    
    createWindow()
    
  })
  app.on('active', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
        
    }
  })