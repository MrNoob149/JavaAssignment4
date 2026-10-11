const userItems = [
  {
     user_id: 3609,
     name: 'John Doe',
     username: 'johndoe',
     email: 'john@metropolia.fi',
     role: 'user',
     password: 'password',
  },
  {
     user_id: 100,
     name: 'Joe',
     username: 'diver Joe',
     email: 'joe@metropolia.fi',
     role: 'user',
     password: 'fuckyou',
  },
];

const ListAllUserItems = () => { 
    return userItems;
};

const findUserBy = (id) => { 
    return userItems.find((item) => item.user_id == id);
};

const addUser = (user) => { 
    const {user_id, name, username, email, role, password} = user;
    const newUser = userItems[0].user_id + 1;
    userItems.unshift({
        user_id: newUser,
        name,
        username, 
        email,
        role, 
        password
    });
    return { user_id: newUser}
};

export { ListAllUserItems, findUserBy, addUser}