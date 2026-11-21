
window.App=(()=>{
 function show(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');if(id==='game')AudioManager.play('music-05-escape.wav');if(id==='finale')AudioManager.play('music-06-finale.wav')}
 function init(){
  document.getElementById('startBtn').onclick=()=>{show('movie');MovieEngine.start()};
  document.getElementById('skipMovie').onclick=()=>MovieEngine.finish();
  document.getElementById('letterNext').onclick=()=>show('transition');
  document.getElementById('playBtn').onclick=()=>show('game');
  document.getElementById('useBtn').onclick=()=>Interaction.use();
  document.getElementById('soundBtn').onclick=()=>AudioManager.toggle();
  document.getElementById('giftBtn').onclick=()=>show('gift');
  Joystick.init();Inventory.render();RoomController.init();MemoryPuzzle.init();
 }
 document.addEventListener('DOMContentLoaded',init);
 return{show};
})();