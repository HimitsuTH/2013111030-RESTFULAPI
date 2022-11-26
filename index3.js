const fs = require("fs");
const path = require("path");

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


fs.readFile(path.join(__dirname, 'user.json'), (err, data)=> {
    if(err) {
        console.log(err);
        return;
    }
    const users = JSON.parse(data);

    console.log(users)
    for (const user of users) {
        console.log(user.id)
    }
})
