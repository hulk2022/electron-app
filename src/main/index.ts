import { app, shell, BrowserWindow, ipcMain } from 'electron';
import { join } from 'path';
import { electronApp, optimizer, is } from '@electron-toolkit/utils';

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    frame: false, //无边框窗口
    resizable: false, //无法调整窗口大小
    // titleBarStyle: 'hidden',//隐藏标题
    autoHideMenuBar: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
    },
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('close', () => {
    console.log('关闭窗口了');
  });

  //窗口拖拽
  ipcMain.handle('custom-adsorption', (event, res) => {
    const x = res.appX;
    const y = res.appY;
    mainWindow.setPosition(x, y);
  });

  //关闭窗口
  ipcMain.handle('close-login', () => {
    mainWindow.close();
  });

  //进入后台管理系统首页
  ipcMain.handle('resize-window', () => {
    //窗口大小
    mainWindow.setSize(1200, 720);
    //窗口最小值
    mainWindow.setMinimumSize(1000, 500);
    //窗口居中
    mainWindow.center();
    //窗口大小可以修改
    mainWindow.setResizable(true);
  });

  //退出登录
  ipcMain.handle('out-login', () => {
    //窗口大小
    mainWindow.setSize(900, 670);
    //窗口居中
    mainWindow.center();
    //窗口大小可以修改
    mainWindow.setResizable(false);
  });

  //关闭软件
  ipcMain.handle('win-close', () => {
    app.exit();
  });

  //最小化
  ipcMain.handle('min-win', () => {
    mainWindow.minimize();
  });

  //最大化
  ipcMain.handle('max-win', () => {
    if (mainWindow.isFullScreen()) {
      mainWindow.setFullScreen(false);
    } else {
      mainWindow.setFullScreen(true);
    }
  });

  //mainWindow.webContents.openDevTools();

  mainWindow.webContents.setWindowOpenHandler(details => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL']);
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'));
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron');

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  // IPC test
  ipcMain.on('ping', () => console.log('pong'));

  createWindow();

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
