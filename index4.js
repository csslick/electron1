const {app, BrowserWindow} = require('electron');
const url = require('url');

let win = null;

function boot(){
  // 새창 만들기
  console.log(process.type);
  win = new BrowserWindow({
    width: 360,
    height: 590,
    resizable: false,  // 윈도우 사이즈
    frame: false  // 창 외곽 frame 제거
  });

  // 불러올 문서 파일 경로(file, url)
  win.loadURL(`file://${__dirname}/index.html`);

  // 윈도우 종료시 메모리 초기화
  win.on('closed', ()=>{
    win = null;
  });
}

// Main and renderer
app.on('ready', boot);
