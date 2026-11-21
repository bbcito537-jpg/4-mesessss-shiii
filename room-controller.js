
window.RoomController=(()=>{
 let last=performance.now();
 function loop(now){
  if(!document.getElementById('game').classList.contains('active')){requestAnimationFrame(loop);return}
  let dt=Math.min(.04,(now-last)/1000);last=now;let v=Joystick.get();let speed=24;
  if(Math.abs(v.x)+Math.abs(v.y)>.08){
    let p=Collision.clamp(GameState.x+v.x*speed*dt,GameState.y+v.y*speed*dt);GameState.x=p.x;GameState.y=p.y;
    GameState.frame=(GameState.frame+dt*9)%4;
    if(Math.abs(v.x)>Math.abs(v.y))GameState.dir=v.x>0?1:3;else GameState.dir=v.y>0?0:2;
  }
  let el=document.getElementById('player');el.style.left=GameState.x+'%';el.style.top=GameState.y+'%';el.style.backgroundImage=`url("bella-sprite-d${GameState.dir}-f${Math.floor(GameState.frame)}.png")`;
  Interaction.scan();
  if(GameState.opened&&GameState.x>86){App.show('memoryRoom');MemoryPuzzle.reset()}
  requestAnimationFrame(loop)
 }
 function init(){requestAnimationFrame(loop)}
 return{init};
})();