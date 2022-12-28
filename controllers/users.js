import { v4 as uuidv4 } from 'uuid';
let users = []

export const addNewUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User ${user.firstName} added successfully`)
}

export const getAllUsers = (req, res) => {
    res.send(users)
}

export const findUserByID = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
}

export const deleteUserByID = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`User Of ID: ${id} Deleted From Data`)
}

export const patchUsersByID = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User Of ID: ${id} Up-Dated`)
}