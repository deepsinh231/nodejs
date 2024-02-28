const User = require("../Models/User");

async function handleGetAlluser(req, res) {
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
}
async function getuser(req, res) {
    const user = await User.findById(req.params.id)
    if (!user) {
        return res.status(404).json({ error: "User not found" })
    }
    return res.json(user);

}
async function updateUser(req, res) {
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

}
async function deleteuser(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ msg: "Delete success" })
}
async function cretenewuser(req, res) {
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
    return res.status(201).json({ msg: "success", id: result._id })
}

module.exports = {
    updateUser,
    handleGetAlluser,
    getuser,
    deleteuser,
    cretenewuser
}