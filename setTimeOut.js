setTimeout(call,1000)  //(callback,秒)
function call(){
    console.log('QQQ');
}
setTimeout(()=>{console.log('AA')},2000)