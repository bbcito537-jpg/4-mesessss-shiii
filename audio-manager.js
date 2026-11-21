
window.AudioManager=(()=>{
 let audio=null,muted=false;
 function play(src){ if(muted)return; if(audio){audio.pause();audio=null} audio=new Audio(src);audio.loop=true;audio.volume=.58;audio.play().catch(()=>{});}
 function stop(){if(audio){audio.pause();audio=null}}
 function toggle(){muted=!muted;if(audio)audio.muted=muted;return !muted}
 return{play,stop,toggle};
})();