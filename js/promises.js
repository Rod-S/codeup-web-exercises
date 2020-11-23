const wait = (num) =>  new Promise((resolve, reject) => {
    setTimeout(() => {
        if (num) {
            resolve(num);
        } else {
            reject('Network Connection Error!');
        }
    }, num);
})

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, num);
    })
}

wait(1000).then((num) => console.log(`You'll see this after ${num /1000} second`));
wait(3000).then((num) => console.log(`You'll see this after ${num /1000} second`));