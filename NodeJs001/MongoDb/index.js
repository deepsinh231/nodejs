const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8000;

//conenct
mongoose.connect('mongodb://127.0.0.1:27017/Youtub-1')
    .then(() => console.log("Mongodb is Connect"))
    .catch((err) => console.log("Mongodb Connect Erro is:-", err))

//schema
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
    },
    job_title: {
        type: String,
        required: true,
    }
},
    { timestamps: true }
);
const User = mongoose.model('user', userSchema);

// Middlewar -plugin
app.use(express.urlencoded({ extended: false }))

app.route("/api/users/:id")

    .get(async (req, res) => {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        return res.json(user);

    })
    .patch(async (req, res) => {
        const body = req.body;
        if (!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title) {
            return res.status(400).json({ msg: "All File is Req" })
        }
        await User.findByIdAndUpdate(req.params.id, {
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title
        });
        return res.json({ msg: "patch Done" })
    })
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id)
        return res.json({msg:"Delete success"})
    });

app.post("/api/users", async (req, res) => {
    const body = req.body;
    if (!body || !body.first_name || !body.last_name || !body.gender || !body.email || !body.job_title) {
        return res.status(400).json({ msg: "All File is Req" })
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        job_title: body.job_title,
        gender: body.gender,
    })
    console.log(result, "result")
    return res.status(201).json({ msg: "success" })
})


app.get("/users", async (req, res) => {
    const Allusers = await User.find({})
    res.setHeader("X-deep", "solanki")
    const html = ` <table>
    <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Gender</th>
        <th>Job Title</th>
    </tr>
    ${Allusers.map((user) => (
        `<tr>
        <td>${user.id}</td>
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