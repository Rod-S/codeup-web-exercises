// const wait = (num) =>  new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (num) {
//             resolve(num);
//         } else {
//             reject('Network Connection Error!');
//         }
//     }, num);
// })
//
// // function wait(num) {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(resolve, num);
// //     })
// // }
//
// wait(1000).then((num) => console.log(`You'll see this after ${num /1000} second`));
// wait(3000).then((num) => console.log(`You'll see this after ${num /1000} second`));


const getLastCommit = (username) =>
    fetch('https://api.github.com/users/'+username + '/events/public', {headers: {'Authorization': 'token ' + githubToken}})
        .then(res => res.json())
        .then((res) => {
            for (const event of res) {
                if (event.type === "PushEvent") {
                    return event
                }
            }
        }).then((res) => {
            console.log(`LAST COMMIT DATE: ${res.created_at.split('T')[0]}`)
    })


getLastCommit('Rod-S')