// let x = (n, h, w) => {
//     console.log(n)
//     return h, w
// };
// console.log(x("Ibtihal", 160, 56));


////////////////////////////////////////



// stu = [{
//         name: 'Ahmed',
//         age: 15,
//         math: 15,
//         eng: 30,
//         arabic: 20,
//         degrees: [15, 30, 20]
//     },
//     console.log(stu.name),
//     {
//         name: 'Omar',
//         age: 17,
//         math: 18,
//         eng: 20,
//         arabic: 10,
//         degrees: [17, 18, 10]

//     },

//     {
//         name: 'Zain',
//         age: 18,
//         math: 15,
//         eng: 20,
//         arabic: 20,
//         degrees: [15, 20, 20]
//     },
// ];
// stu.forEach((s) => {
//     console.log(stu.name)
//     sum = 0;
//     s.degrees.forEach((d)
//         (stu += d));
//     console.log(sum)


// });

/////////////////////////////////////////////
// let person = prompt("enter your name")
// let mark = parseInt(prompt("enter your mark"))
// if (mark <= 100 && mark >= 90) {
//     document.getElementById("badge").textContent = person + 'your A'
// } else if (mark <= 90 && mark >= 85) {
//     document.getElementById("badge").textContent = person + 'your b'
// } else if (mark <= 85 && mark >= 70) {
//     document.getElementById("badge").textContent = person + 'your c'
// } else if (mark <= 70 && mark >= 65) {
//     document.getElementById("badge").textContent = person + 'your d'
// } else if (mark <= 65 && mark >= 60) {
//     document.getElementById("badge").textContent = person + 'your e'
// } else { document.getElementById("badge").textContent = person + 'your f' }
// let i = 0;
// while (i <= 10) {

//     if (i % 2 == 1) {
//         console.log(i + 'your a')
//     }
//     i++
//
// }
// for (let i = 0; i <= 10; i++) { if (i % 2 == 1) console.log(i + ' a ') }




// let x = ((uName, h, w) => {

//     console.log(uName)
//     return h, w
// });
// console.log(x('Ibtihal', 160, 56));
/////////////////////////// let x = (n, h, w) => {
//     console.log(n)
//     return h, w
// };
// console.log(x("Ibtihal", 160, 56));
/////////////////////////////
// setTimeout(() => { console.log('lug; uif') }, 3000);
// console.log("yuyyu")
// let s = new Promise((resolve, reject) => {
//     if (7 > 5) resolve('jhjkf')
//     reject("yyyyy")
// })
// s.then((resolve) => {
//     console.log('resolve')
// }).catch((reject) => { console.log('reject') })



/////////////
// setTimeout((resolve, reject) => {
//     console.log('ALansary')

// }, 5000)

// console.log('Ibtihal')
/////////////////////
let x = async() => {
    try {
        const z = await fetch('https://jsonplaceholder.typicode.com/users');
        const s = await res.json();
        console.log()
    }
}