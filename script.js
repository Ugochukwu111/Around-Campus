let el = document.querySelector('.mobile-nav')
let  btn2 = document.querySelector('.btn-2')
let  btn3 = document.querySelector('.btn-3')
let  btn4 = document.querySelector('.btn-4')



let toggleSideBar = 0;


el.addEventListener('click', () => {
  if (toggleSideBar === 0) {
      btn2.style.top = '5.7rem';
      btn3.style.top = '9rem';
      btn4.style.top = '12.3rem';
      toggleSideBar++;// increase toggle funtion
  }else if(toggleSideBar === 1) {
    btn2.style.top = '2.4rem';
    btn3.style.top = '2.4rem';
    btn4.style.top = '2.4rem';
    toggleSideBar--;//decrease toggle function
  }
 
})