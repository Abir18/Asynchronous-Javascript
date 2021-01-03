console.log("Start");

const data = getUser("dataBase");
console.log(data);
// console.log(getUser('data'));

console.log("End");


function getUser(d) {
    setTimeout(() => {
        console.log("Async");
    }, 2000);
    return {name:"K", db:d};
}