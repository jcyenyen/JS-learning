//score從外面送

const checkScore = (score) => {
    return new Promise((resolve, reject) => {
        console.log("批改中...");
        setTimeout(() => {
            if (score >= 60) {              //吃外層的score
                resolve(score);
            } else {
                reject("fail");
            }
        }, 1000)

    })
}

checkScore(77)
    .then(data => console.log(data))
    .catch(error => console.log(error))