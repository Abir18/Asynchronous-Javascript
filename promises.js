// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error('404'));
//         resolve('hello');
//     }, 2000);
// });



// p.then(data => console.log(data))
//  .catch(err => console.log('Error', err.message));


function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(id);
            resolve({id:id, gitHubUserName:'Abir'});
        }, 3000);
    });   
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(username);
            resolve(['repo1', 'repo2', 'repo3']);
        }, 3000);
    });
}
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(repo);
            resolve({commit: 'Initial Commit'});
        }, 3000);
    });
}

const p1 = new Promise(resolve => {
    setTimeout(() => {
        // console.log('p1');
        resolve({id:1, gitHubUserName:'Abir'});
    }, 7500);
});
const p2 = new Promise(resolve => {
    setTimeout(() => {
        // console.log('p2');
        resolve(['repo1', 'repo2', 'repo3']);
    }, 500);
});
const p3 = new Promise(resolve => {
    setTimeout(() => {
        // console.log('p3');
        resolve({commit: 'Initial Commit'});
    }, 4500);
});

Promise.race([p1, p2, p3])
    .then(result => {
        console.log(result);
    });

// getUser(2)
//   .then(user => getRepositories(user.gitHubUserName))
//   .then(rep => getCommits(rep[1]))
//   .then(commit => console.log(commit))
//   .catch(err => console.log('Error', err.message));

// getUser(1)
//     .then(user => {
//         console.log(user);
//         getRepositories(user.gitHubUserName)
//         .then(rep => {
//             console.log(rep);
//             getCommits(rep[2])
//             .then(commit => console.log(commit))
//         })
//     }).catch(err => console.log(err.message)); 
    
 
// getUser(1, (user) => {
//     console.log('User details ', user);
//     getRepositories(user.gitHubUserName, (repos) => {
//         console.log(repos);
//         getCommits(repos[0], (commit) => {
//             console.log(commit);
//         });
//     });
// });



// function getUser(id, callback) {
//     setTimeout(() => {
//         callback({id:id, gitHubUserName:'Abir'});
//     }, 500);
// }
// function getRepositories(username, callback) {
//     setTimeout(() => {
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 500);
// }
// function getCommits(repo, callback) {
//     setTimeout(() => {
//         callback({commit: 'Initial Commit'});
//     }, 500);
// }

// getUser(1, (user) => {
//     console.log('User details ', user);
//     getRepositories(user.gitHubUserName, (repos) => {
//         console.log(repos);
//         getCommits(repos[0], (commit) => {
//             console.log(commit);
//         });
//     });
// });