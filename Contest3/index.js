//Q1

// const fs = require("fs");
// fs.readFile("users.json", "utf-8", (err, contents) => {
//     if (err) {
//         console.error("Error:", err);
//         return;
//     }
//     const users = JSON.parse(contents);
//     console.log(users);
//     for (let i = 0; i < users.length; i++) {
//         let email = users[i].email;
//         fs.appendFile("emails.txt", email + "\n", (err) => {
//             if (err) {
//                 console.error("Error ", err);
//             }
//         });
//     }
// });

//or


// const fs = require("fs");
// fs.readFile("users.json", "utf8", (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return;
//     }
// console.log(data);
//     const users = JSON.parse(data);
//     const emails = users.map(user => user.email).join("\n");

//     fs.writeFile("emails.txt", emails, (err) => {
//         if (err) {
//             console.error("Error writing file:", err);
//             return;
//         }

//         console.log("Emails saved to emails.txt");
//     });
// });



//Q2


// const fs = require("fs");
// fs.readFile("marks.json", "utf8", (err, data) => {
//     if (err) {
//         console.log("Error reading file:", err);
//         return;
//     }

//     const students = JSON.parse(data);
//      console.log(students);
//         let highest = -Infinity;
//         let lowest = Infinity;
//         let sum = 0;
//         for (let i = 0; i < students.length; i++) {
//             let marks = students[i].marks;
//             if (marks > highest) {
//                 highest = marks;
//             }
//             if (marks < lowest) {
//                 lowest = marks;
//             }
//             sum += marks;
//         }
//         let average = sum / students.length;
//     const report = `Highest: ${highest}
// Lowest: ${lowest}
// Average: ${average}`;     //helps to create multilevel string

//     fs.writeFile("report.txt", report, (err) => {
//         if (err) {
//             console.log("Error writing file:", err);
//             return;
//         }

//         console.log("Report generated successfully!");
//     });
// });


//or 

// let students = JSON.parse(data)
// let hm = students[0].marks
// let lm = students[0].marks
// let total = 0

// for(let student of students){
//     if(student.marks > hm){
//         hm = student.marks
//      } else if (student.marks < lm){
//         lm = student.marks
//      }
//      total+=student.marks
// }
// let avg =total / students.length
// let res = `
// Highest : ${hm}
// Lowest : ${lm}
// Average marks : ${avg}`



//Q3



// const fs = require("fs");

// fs.readFile("events.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log("Error reading file:", err);
//         return;
//     }

//     const events = data.trim().split("\n");
//     const counts = {};
//     events.forEach(event => {
//         counts[event] = (counts[event] || 0) + 1;
//     });

//     let summary = "";
//     for (let event in counts) {
//         summary += `${event}: ${counts[event]}\n`;
//     }

//     fs.writeFile("analytics.txt", summary, (err) => {
//         if (err) {
//             console.log("Error writing file:", err);
//             return;
//         }

//         console.log("File created successfully!");
//     });
// });


//or 

// let events = data.trim().split("\n")
// let res ={}
// for(let event of events){
//     res[event] = (res[event] || 0) + 1
// }

// let ans = ""
// for (let key in res){
//     ans += `${key} : ${res[key]}\n`
// }
// console.log(ans)


//Q4

// const fs = require("fs")
// fs.readFile("message.txt","utf8", (err,data) => {
//     if(err){
//         console.log("Error reading the file:",err);
//         return;
//     }

// const upperText = data.toUpperCase();
// fs.writeFile("uppercase.txt",upperText, (err) =>{
//     if (err){
//         console.log("Error in writing the file:",err);
//         return
//     }
// fs.readFile("uppercase.txt","utf8", (err,updata) => {
//     if(err){
//         console.log("Error reading the file:",err);
//         return;
//     }

// const wordCount = updata.trim().split(/\s+/).length;
// const summary = `Total words: ${wordCount}`;
// fs.writeFile("summary.txt",summary, (err) =>{
//     if (err){
//         console.log("Error in writing the file:",err);
//         return;
//     }
//     console.log("Files are created successfully");

// });
// });
// });
// });

 //or

//  upperData =  data.trim(),toUpperCase()
//  fs.writeFile("uppercase.txt",upperData, (err) => {
//     console.log("Written successfully")
    
//     fs.raedFile("uppercase.txt","utf-8", (err,data) => {
//         let totalWords = data.trim().split(" ")
//         let ans = `Total words : ${totalWords.length}`

//         fs.writeFile("summary.txt",ans, (err) => {
//             console.log("Summary eritten successfully");
//         })
//     }) 
//     })
 
//Q5


// const fs = require("fs");

// // Read students.json
// fs.readFile("students.json", "utf8", (err, studentData) => {
//     if (err) {
//         console.log("Error reading students.json:", err);
//         return;
//     }

//     const students = JSON.parse(studentData);

//     // Read marks.json after students.json is read
//     fs.readFile("marks1.json", "utf8", (err, marksData) => {
//         if (err) {
//             console.log("Error reading marks.json:", err);
//             return;
//         }

//         const marks = JSON.parse(marksData);

//         // Combine data using id
//         const report = students.map(student => {
//             const markRecord = marks.find(m => m.id === student.id);
//             return `${student.name} - ${markRecord.marks}`;
//         }).join("\n");

//         // Write report.txt
//         fs.writeFile("report1.txt", report, (err) => {
//             if (err) {
//                 console.log("Error writing report.txt:", err);
//                 return;
//             }

//             console.log("Report generated successfully!");
//         });
//     });
// });
  

//or

// let students = JSON.parse(data)
// let result = ""
// fs.readFile("marks1.json", "utf-8", (err,data) =>{
//     let marks = JSON.parse(data)

//     for(let student of students){  //{id : 1 , name : "Rahul"}
//         let marksData = marks.find(m => m.id === student.id)  //{ id : 1 , marks : 86}
//         result += `${student.name} - ${marksData.marks}\n`
//     }
//     console.log(result)
//     FileSystem.writeFile("report1.txt", result, (err) => {
//         console.log("Written successfully")
//     })
// })










