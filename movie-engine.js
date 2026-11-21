
window.MovieEngine=(()=>{
 let idx=0,timer=null,total=0,start=0;
 const img=()=>document.getElementById('movieImg'), title=()=>document.getElementById('sceneTitle'), text=()=>document.getElementById('sceneText'),bar=()=>document.getElementById('movieBar');
 function show(i){
   const s=STORY[i]; idx=i; img().style.opacity=0;
   setTimeout(()=>{img().style.backgroundImage=`url("${s.img}")`;img().style.opacity=1},280);
   title().textContent=s.title;text().textContent=s.text;AudioManager.play(s.music);
   clearTimeout(timer);timer=setTimeout(()=>i<STORY.length-1?show(i+1):finish(),s.dur*1000);
 }
 function tick(){ if(!document.getElementById('movie').classList.contains('active'))return; const elapsed=(Date.now()-start)/1000;bar().style.width=Math.min(100,elapsed/total*100)+'%';requestAnimationFrame(tick)}
 function startMovie(){total=STORY.reduce((a,b)=>a+b.dur,0);start=Date.now();show(0);tick()}
 function finish(){AudioManager.stop();App.show('letter')}
 return{start:startMovie,finish};
})();