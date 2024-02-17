const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;
app.use(express.urlencoded({ extended: false }))
app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const User = users.find((user) => user.id === id);
        const html = `<table>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Job Title</th>
        </tr>
    <tr>
            <td>${User.id}</td>
            <td>${User.first_name}</td>
            <td>${User.last_name}</td>
            <td>${User.email}</td>
            <td>${User.gender}</td>
            <td>${User.job_title}</td>
            </tr>
     </table>`
        return res.send(html);
    })
    .patch((req, res) => {
        const id = Number(req.params.id);
        const User = users.find((user) => user.id === id);
        const body = req.body;
        if (User) {
            User.first_name = body.first_name;
            User.last_name = body.last_name;
            User.email = body.email;
            User.gender = body.gender;
            User.job_title = body.job_title;
            fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
                return res.json({ state: "patch", id: users.length })
            })
        }
    })
    .delete((req, res) => {
        const id = Number(req.params.id);

        const User = users.filter((user) => user.id !== id)
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(User), (err) => {
            return res.json({ state: "delete", id: users.length })
        })
    });

app.post("/api/users", (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 })
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ state: "post", id: users.length })
    })
})
// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const User = users.find((user) => user.id === id);
//     const html = `<table>
//     <tr>
//         <th>Id</th>
//         <th>First Name</th>
//         <th>Last Name</th>
//         <th>Email</th>
//         <th>Gender</th>
//         <th>Job Title</th>
//     </tr>
// <tr>
//         <td>${User.id}</td>
//         <td>${User.first_name}</td>
//         <td>${User.last_name}</td>
//         <td>${User.email}</td>
//         <td>${User.gender}</td>
//         <td>${User.job_title}</td>
//         </tr>
//  </table>`
//     return res.send(html);
// })
// app.patch("/api/users/:id", (req, res) => {
//     return res.send("Patch Panding");
// })
// app.delete("/api/users/:id", (req, res) => {
//     return res.send("Delete Panding");
// })
app.get("/api/users", (req, res) => {
    res.setHeader("X-deep","solanki")
    return res.json(users)
})
app.get("/users", (req, res) => {
    const html = ` <table>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Job Title</th>
    </tr>
    ${users.map((user) => (
        `<tr>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.job_title}</td>
    </tr>`
    )).join("")}
    </table>`;
    return res.send(html);

});


app.listen(PORT, () => { console.log(`PORT SERVER IS ${PORT}`); })