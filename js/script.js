const {remote} = require('electron');

var btn_close = document.querySelector('.btn_close');
var btn_min = document.querySelector('.btn_min');

// 창 닫기
btn_close.addEventListener('click', function(){
  var win = remote.getCurrentWindow();
  win.close();
});

// 창 최소화
btn_min.addEventListener('click', function(){
  var win = remote.getCurrentWindow();

  // 창 상태 확인
  if(!win.isMaximized()){
    win.minimize();
  }
});
