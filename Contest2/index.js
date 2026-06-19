//Q1

// const students = [
//   { name: "Aman", marks: 78 },
//   { name: "Riya", marks: 91 },
//   { name: "Kabir", marks: 65 }
// ];

// const result = students.map(student => {
//   let grade;

//   if (student.marks >= 90) {
//     grade = "A";
//   } else if (student.marks >= 70) {
//     grade = "B";
//   } else {
//     grade = "C";
//   }

//     return {
//         name: student.name.toUpperCase(),
//         grade: grade
//      };
// });

// console.log(result);


//Q2

// const products= [
//   { name:"Laptop", price:80000 },
//   { name:"Mouse", price:500 },
//   { name:"Monitor", price:15000 },
//   { name:"Keyboard", price:1200 }
// ];

// const exppdts = products.filter(product =>  product.price > 5000)
// console.log(exppdts);

//Q3


//  const users = [
//    { id: 1, email: "a@test.com" },
//    { id: 2, email: "b@test.com" },
//    { id: 3, email: "a@test.com" },
//    { id: 4, email: "c@test.com" }
//  ];

// let result = [];

// for (let i = 0; i < users.length; i++) {
//   let count = 0;

//   for (let j = 0; j < users.length; j++) {
//     if (users[i].email === users[j].email) {
//       count++;
//     }
//   }

//   if (count > 1) {
//     result.push(users[i]);
//   }
// }
// console.log(result);
  
 // Or
  
// let counter ={}
// users.forEach((users)=>{
//     if(counter[users.email]){
//         counter[users.email]++
//     } else{
//         counter[users.email]=1
//     }
// })
// //console.log(counter)
// let result = users.filter(user =>  {
//     return counter[user.email] > 1
// })
// console.log(result)
  

  
  
//Q4

// const students = [
//   { name: "A", branch: "CSE" },
//   { name: "B", branch: "ECE" },
//   { name: "C", branch: "CSE" },
//   { name: "D", branch: "ME" }
// ];

// let result = {};

// students.forEach(student => {
//   if (!result[student.branch]) {
//     result[student.branch] = [];
//   }
//   result[student.branch].push(student.name)
// })
// console.log(result)



//Q5

// const users= [
//   {
//     name:"Aman",
//     orders: ["Laptop","Mouse"]
//   },
//   {
//     name:"Riya",
//     orders: ["Keyboard"]
//   }
// ];

// const result = []
// users.forEach(user => {
//     user.orders.forEach(order =>{
//         result.push(order)
//     });
// });
// console.log(result);

//or

// let ans = users.flatMap(user =>  user.orders)
// console.log(ans);


//Q6

// const orders = [
//   "Laptop",
//   "Mouse",
//   "Laptop",
//   "Keyboard",
//   "Laptop",
//   "Mouse"
// ];

// let count = {};
// orders.forEach((order) => {
//     if (count[order]){
//         count[order]++
// } else{
//     count[order]=1
// }
// })

// let maxpdt ="" ;
// let maxcnt = 0 ;

// for(let product in count){
//     if (count[product] > maxcnt){
//     maxcnt = count[product];
//     maxpdt = product;
//     }
// }
// const res ={
//     product: maxpdt,
//     count: maxcnt
// };
// console.log(res);


//Q7

// const users = [
//   {
//     name: "Aman",
//     posts: [
//       { title: "JS", likes: 50 },
//       { title: "React", likes: 10 }
//     ]
//   },
//   {
//     name: "Riya",
//     posts: [
//       { title: "Node", likes: 80 }
//     ]
//   }
// ];

// const result = [];

// users.forEach(user => {
//   let hasPopularPost = false;

//   user.posts.forEach(post => {
//     if (post.likes > 40) {
//       hasPopularPost = true;
//     }
//   });

//   if (hasPopularPost) {
//     result.push(user.name);
//   }
// });

// console.log(result);




// Q8

// const fs = require("fs");

// fs.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   const lines = data.trim().split("\n").length;
//   const words = data.trim().split(/\s+/).length;
//   const characters = data.length;

//   const result = {
//     lines,
//     words,
//     characters
//   };

//   console.log(result);
// });


//Q9




































  
  
  
  
  




