function getUser(id, callback) {
    setTimeout(() => {
        console.log('async', id);
        callback({id: id, githubUserName:'Abir'});
    }, 2000);
}

function getRepositories(username, cb) {
    setTimeout(() => {
        console.log('Repo from ', username);
        cb(['repo1', 'repo2', 'repo3']);
    }, 2000);
}

function getCommit(repoName, cb) {
    setTimeout(() => {
        cb({commit:'initial commit'});
        console.log('The Commit from', repoName);
    }, 2000);
}

// getUser(1, (user) => {
//     console.log(user);
//     getRepositories(user.githubUserName, (githubRepo) => {
//         console.log(githubRepo);
//         getCommit(githubRepo[0], (commit) => {
//             console.log('Commit from', githubRepo[0], 'and commit is', commit);
//             getCommit(githubRepo[0], (commit) => {
//                 console.log('Commit from', githubRepo[0], 'and commit is', commit);
//                 getCommit(githubRepo[0], (commit) => {
//                     console.log('Commit from', githubRepo[0], 'and commit is', commit);
//                     getCommit(githubRepo[0], (commit) => {
//                         console.log('Commit from', githubRepo[0], 'and commit is', commit);
//                         getCommit(githubRepo[0], (commit) => {
//                             console.log('Commit from', githubRepo[0], 'and commit is', commit);
//                             getCommit(githubRepo[0], (commit) => {
//                                 console.log('Commit from', githubRepo[0], 'and commit is', commit);
//                                 getCommit(githubRepo[0], (commit) => {
//                                     console.log('Commit from', githubRepo[0], 'and commit is', commit);
//                                     getCommit(githubRepo[0], (commit) => {
//                                         console.log(user);
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// }); 


// Callback Hell
// getUser(1, (user) => {
//     console.log(user);
//     getRepositories(user.githubUserName, (githubRepo) => {
//         console.log(githubRepo);
//         getCommit(githubRepo[0], (commit) => {
//             console.log('Commit from', githubRepo[0]);
//             console.log('Commit is', commit);
//         });
//     });
// }); 

getUser(1, getAllUser); 

// Named Function to Rescue From Callback Hell 

function getAllUser(user) {
    console.log(user.githubUserName);
    getRepositories(user.githubUserName, RepoDetails);
}

function RepoDetails(githubRepo) {
    console.log('Repos:' , githubRepo);
    getCommit(githubRepo[0], viewCommit);
}

function viewCommit(commit) {
    console.log(commit);
    // console.log('Commit from', githubRepo[0], 'and commit is', commit);
    // console.log(`Commit from ${githubRepo[0]} and commit is ${commit}`);
}




// function getUser(id, callback) {
//     setTimeout(() => {
//         // console.log('async', id);
//         callback({id: id, githubUserName:'Abir'});
//     }, 2000);
// }

// function getRepositories(username, callback) {
//     setTimeout(() => {
//         console.log('Repo from ', username);
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 2000);
// }

// function getCommits(repoName, callback) {
//     setTimeout(() => {
//         callback({commit:'initial commit'});
//         console.log('The Commit from', repoName);
//     }, 2000);
// }

// getUser(1, getRepositories);

// function getRepositories(user) {
//     getRepositories(user.githubUserName, getCommits);
// }

// function getCommits(repos) {
//     getCommits(repos, displayCommits);
// }

// function displayCommits(commits) {
//     console.log(commits);
// }

// getUser(1, (user) => {
//     getRepositories(user.githubUserName, (repos) => {
//         getCommits(repos[1], (commits) => {
//             console.log(commits);
//         });
//     });
// });


