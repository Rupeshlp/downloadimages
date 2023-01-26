

let menuBtn = document.getElementById('photoImage');
menuBtn.addEventListener('click', ()=> {
  let menu = document.getElementById('menu');
  if (menu.style.height == 165 + 'px') {
    
    menu.style.height = 0 + 'px';
    
  } 
  else {
    search.style.width = 0 + '%' ;
    menu.style.height = 165 + 'px';
  }
});





const searchIcon = document.getElementById('SearchIcon');

searchIcon.addEventListener('click', ()=>{

  
  let menu = document.getElementById('menu');
  
  if (search.style.width == 100 + '%') {
    search.style.width = 0 + '%' ;
    
    
  } else {
    search.style.width = 100 + '%';
    menu.style.height = 0 + 'px';
  }
  
});
