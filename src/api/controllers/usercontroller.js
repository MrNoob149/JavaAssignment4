import { ListAllUserItems, findUserBy, addUser} from `..\api\models\userItems-model.js`

const getUser = (req, res) => { 
    res.json(listAllUserItems());
};

const getUserById = (req, res) => { 
    const user = findUserBy(req.params.id);
    if (user) { 
        res.json(user);
    } else {
        res.sendStatus(404);
    }
};

const putUser = (req, res) => { 
    res.json({ message: 'User item updated.'})
    res.sendStatus(200);
}

const deleteUser = (req, res) => { 
    res.json({ message: 'User item deleted.'})
    res.sendStatus(200);
}
export { getUser, getUserById, postUser, putUser, deleteUser };