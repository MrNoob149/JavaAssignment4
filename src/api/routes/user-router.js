import express from `express`

import { 
    GetUser,
    GetUserID,
    postUser,
    putUser,
    deleteUser,
} from '../controllers/user-controller.js';

const UserRouter = express.Router();

UserRouter.get('/', getUser);
UserRouter.get('/:id', getUserById);
UserRouter.post('/', postUser);
UserRouter.put('/:id', putUser);
UserRouter.delete('/:id', deleteUser);

export default UserRouter;
