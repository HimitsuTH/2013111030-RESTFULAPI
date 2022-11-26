const fs = require("fs");
const path = require("path");
const os = require('os')
const http = require("http")

const student = [
    {
        id: "1",
    },
    {
        id: "2",
    },
    {
        id: "3",
    },
    {
        id: "4",
    },
    {
        id: "5",
    },
]

//WRITE FILE
// fs.writeFileSync(
//   path.join(__dirname, "user.json"),
//   JSON.stringify(student),
//   (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//   }
// );

// READ FILE
// fs.readFile(path.join(__dirname, 'user.json'), (err, data)=> {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     const users = JSON.parse(data);

//     console.log(users)
//     for (const user of users) {
//         console.log(user.id)
//     }
// })

//Operation System (OS)

// console.log(`Hostname: ${os.hostname()}`)
// console.log(`CPU architecture: ${os.arch()}`)
// console.log("Total memory: " + (os.totalmem()/1e6.toFixed(1)));
// console.log("Free memory: " + (os.freemem()/1e6.toFixed(1)));

// CREATE SERVER

// const server = http.createServer(function(res, res) {
//     console.log(`${req.method} ${req.url}`)
//     res.end('Hello world!')
// })

// const port = 8080;

// server.listen(port, ()=> {
//     console.log(`server started on port ${port}`)
// })



// REQUIRE MODULE 
// const test_calculate = require('./calculate.js')

// console.log(test_calculate(1,2,3))