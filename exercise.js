// getCustomer(1, (customer) => {
//     console.log('Customer: ', customer);
//     if(customer.isGold) {
//         getTopMovies((movies) => {
//             console.log('Top Movies: ' ,movies);
//             sendEmail(customer.email, movies, () => {
//                 console.log('Email sent...');
//             });
//         });
//     } 
// });

// getCustomer(1)
//    .then(customer => {
//        console.log('Customer', customer);
//        if(customer.isGold) {
//            getTopMovies()
//              .then(movies => {
//                  console.log(movies);
//                  sendEmail(customer.email, movies)
//                      .then(() => {
//                          console.log('Email Sent...');
//                      });
//              });
//        }
//    });


async function notifyCustomer() {
    const user = await getCustomer(1);
    console.log('Customer', user);
    if(user.isGold) {
        const topMovies = await getTopMovies();
        console.log(topMovies);
        const mail = await sendEmail(user.email, topMovies);
        console.log('Email Sent...');
    }
}

notifyCustomer();

function getCustomer(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                id: id,
                name: 'Abir',
                isGold: true,
                email: 'abir@gmail.com'
            });
        }, 4000);
    });
}

function getTopMovies() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 2000);
    });
}
 
function sendEmail(email, movielist, callback) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Email sent to ', email);
            console.log('Movies for you: ', movielist)
            // resolve();
        }, 2000);
    });
}




// function getCustomer(id, callback) {
//     setTimeout(() => {
//         callback({
//             id: id,
//             name: 'Abir',
//             isGold: true,
//             email: 'abir@gmail.com'
//         });
//     }, 4000);
// }

// function getTopMovies(callback) {
//     setTimeout(() => {
//         callback(['movie1', 'movie2']);
//     }, 2000);
// }
 
// function sendEmail(email, movielist, callback) {
//     setTimeout(() => {
//         console.log('Email sent to ', email);
//         console.log('Movies for you: ', movielist)
//         callback();
//     }, 2000);
// }