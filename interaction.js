
window.Interaction=(()=>{
 let near=null;
 function distance(a,b){return Math.hypot(a.x-b.x,a.y-b.y)}
 function msg(t){let m=document.getElementById('message');m.textContent=t;m.style.display='block';clearTimeout(m._t);m._t=setTimeout(()=>m.style.display='none',2600)}
 const spots=[
  {sel:'.hs-globe',x:25,y:29,item:'star'},
  {sel:'.hs-guitar',x:10,y:51,item:'note'},
  {sel:'.hs-flowers',x:55,y:70,item:'flower'},
  {sel:'.hs-box',x:86,y:47,item:'key',box:true},
  {sel:'.hs-tzuyu',x:64,y:54,npc:true},
 ];
 function scan(){near=null;let best=99;for(const s of spots){let d=distance({x:GameState.x,y:GameState.y},s);if(d<best&&d<16){best=d;near=s}}}
 function use(){
  scan(); if(!near){msg('Acércate un poco más.');return}
  if(near.npc){msg(GameState.opened?'Tzuyu parece orgulloso de su caos.':'Tzuyu parpadea. Claramente sabe algo.');return}
  if(near.box){
    if(!['star','note','flower'].every(x=>GameState.has(x))){msg('La caja tiene tres ranuras. Te faltan recuerdos.');return}
    if(!GameState.has('key')){Inventory.add('key');GameState.opened=true;msg('La caja se abre. Dentro hay una llave dorada.');document.getElementById('objective').querySelector('span').textContent='Ve hacia la salida.'}
    return;
  }
  if(near.item&&!GameState.has(near.item)){Inventory.add(near.item);msg(document.querySelector(near.sel).dataset.msg||'Encontraste algo.')}
  else msg('Aquí ya no queda nada.');
 }
 return{scan,use,msg};
})();