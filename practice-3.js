// 加減顯示器

let btn=document.querySelectorAll('.btn');
let txt=document.querySelector('h1');
let count=0

btn[0].addEventListener('click',function(e){
    count+=1
    txt.textContent=count;
});

btn[1].addEventListener('click',function(e){
    count-=1
    txt.textContent=count;
});


// event物件

btn[2].addEventListener('click',function(e){
    console.log(e);
});

// target 顯示點到哪個DOM物件

let range=document.querySelector('.range');

range.addEventListener('click',function(e){
    console.log(e.target.nodeName);
});

// target+nodename
range.addEventListener('click',function(e){
    if (e.target.nodeName==='INPUT'){
        console.log('點到按鈕了');
    }
});

// preventDefault() 取消預設觸發行為

let myLink = document.querySelector('a');

myLink.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector('h2').textContent='有按到喔';
});