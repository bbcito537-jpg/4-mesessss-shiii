
window.Inventory=(()=>{
 const icon={star:'item-star.png',note:'item-note.png',flower:'item-flower.png',key:'item-key.png'};
 function render(){document.querySelectorAll('.slot').forEach((s,i)=>{let k=GameState.items[i];s.style.backgroundImage=k?`url("${icon[k]}")`:'';});}
 function add(k){GameState.add(k);render();}
 return{render,add};
})();