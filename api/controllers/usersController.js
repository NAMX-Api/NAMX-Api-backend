const usersDB = {
    users: require('../model/users.json'),
    setUsers: function (data) { this.users = data }
}

const getAllUsers = (req, res) => {
    res.json(usersDB.users);
}

const getUser = (req, res) => {
    const user = usersDB.users.find(emp => emp.id === parseInt(req.params.id));
    if (!user) {
        return res.status(400).json({ "message": `user ID ${req.params.id} not found` });
    }
    res.json(user);
}


module.exports = {
    getAllUsers,
    getUser
}