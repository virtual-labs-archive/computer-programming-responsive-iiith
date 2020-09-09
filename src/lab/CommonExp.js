// Code to highlight the each selected tab. 
let list = document.querySelectorAll('.tabOption')
console.log(list);
list.forEach(li=>li.addEventListener('click',e=>{
  list.forEach(item => item.style.backgroundColor="#eee");
  e.target.style.backgroundColor="#ddd";
}));