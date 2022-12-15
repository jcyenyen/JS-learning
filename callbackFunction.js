function test(callback){
    callback()
};

function hi(){
    console.log('hi');
};

test(hi)

function test1(a,callback){         //a的參數帶到callback裡 也就是hello的name
    callback(a)
};

function hello(name){
    console.log(`${name}吃飯了`);
}

test1('apple',hello)