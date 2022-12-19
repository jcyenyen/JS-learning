
const checkScore = new Promise((resolve, reject) => {
    console.log("批改中...");
    setTimeout(() => {
        const score = Math.round(Math.random() * 100)
        if (score >= 60) {
            resolve(score);         //把resolve參數的物件送到then的參數裡
        } else {
            reject("fail");         //把reject參數的物件送到catch的參數裡
        }
    }, 1000)
})


checkScore
    .then(data => console.log(data))
    .catch(error => console.log(error))