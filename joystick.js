
window.Joystick=(()=>{
 let active=false,center={x:0,y:0},vec={x:0,y:0};
 const root=()=>document.getElementById('joystick'),stick=()=>document.getElementById('stick');
 function set(clientX,clientY){let dx=clientX-center.x,dy=clientY-center.y;let m=Math.hypot(dx,dy)||1;let r=Math.min(38,m);vec.x=dx/m*(r/38);vec.y=dy/m*(r/38);stick().style.transform=`translate(${vec.x*38}px,${vec.y*38}px)`;}
 function init(){root().addEventListener('pointerdown',e=>{active=true;let b=root().getBoundingClientRect();center={x:b.left+b.width/2,y:b.top+b.height/2};root().setPointerCapture(e.pointerId);set(e.clientX,e.clientY)});root().addEventListener('pointermove',e=>active&&set(e.clientX,e.clientY));['pointerup','pointercancel'].forEach(ev=>root().addEventListener(ev,()=>{active=false;vec={x:0,y:0};stick().style.transform=''}));}
 return{init,get:()=>vec};
})();