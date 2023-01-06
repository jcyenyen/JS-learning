//批改作業分數
const scoreTest = (name) => {
    return new Promise((resolve, reject) => {
        console.log("批改中...")
        setTimeout(() => {
            const score = Math.round(Math.random() * 100); //round四捨五入
            if (score >= 20) {
                resolve(
                    { name, score }
                )
            } else {
                reject(`${name}已達退學門檻`)
            }
        }, 1000)
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
            } else if (data.score < 60) {
                console.log(data.score);
                reject(`${data.name}沒用,跑操場10圈`)
            }
        }, 1000)

    })
}

// scoreTest("min")
//     .then(data => checkReward(data))        //scoreTest的name, score傳至check的參數
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

//async await 

const init = async function(){
    try{
        const studentA= await scoreTest("min")
        //先暫停,等到資料回傳(1秒)後再往下跑
        const rewardA= await checkReward(studentA)
        console.log(rewardA)
    }catch(error){
        return console.log(error)
    }
}

init()
