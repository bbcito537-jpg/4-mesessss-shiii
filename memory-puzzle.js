
window.MemoryPuzzle=(()=>{
 let seq=[];
 function reset(){seq=[];document.getElementById('memoryResult').textContent=''}
 function init(){document.querySelectorAll('.memory-grid button').forEach(b=>b.onclick=()=>{seq.push(+b.dataset.order);b.style.opacity=.55;if(seq.length===3){if(seq.join(',')==='1,2,3'){document.getElementById('memoryResult').innerHTML='<b>Correcto.</b> Primero la nota. Luego Hinkley. Después, 12:26.';setTimeout(()=>App.show('finale'),1700)}else{document.getElementById('memoryResult').textContent='Casi. La historia tiene otro orden.';setTimeout(()=>{document.querySelectorAll('.memory-grid button').forEach(x=>x.style.opacity=1);reset()},1300)}}})}
 return{init,reset};
})();