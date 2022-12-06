let btn=document.querySelector('.btn');
let txt=document.querySelector('h1');

//監聽事件

btn.addEventListener('click',function(e){
    txt.textContent='我被點擊了';
});



