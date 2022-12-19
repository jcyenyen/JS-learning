//批改作業分數
const scoreTest = (name) => {
    return new Promise((resolve, reject) => {
        console.log("批改中...")
        setTimeout(() => {
            const score = Math.round(Math.random() * 100);
            if (score >= 60) {
                resolve(
                    { name, score }
                )
            } else {
                reject(`${name}已達退學門檻`)
            }
        }, 2000)
    })
}

//檢查是否獎勵
const checkReward = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.score >= 90) {
                resolve(`${data.name}拿1000元`)
            } else if (data.score >= 60 && data.score < 90) {
                resolve(`${data.name}繼續加油`)
            }
        }, 1000)

    })
}

scoreTest("min")
    .then(data => checkReward(data))        //scoreTest的name, score傳至check的參數
    .then(data => console.log(data))
    .catch(error => console.log(error))
//