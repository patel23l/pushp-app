import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.get("/createadmin", async(req, res) => {
    try {
        const user = new User ({
            name: 'Nandini',
            email: 'patel23l@uwindsor.ca',
            password: '1234',
            isAdmin: true
        });

        const newUser = await user.save();
        res.send(newUser);
    } catch (error) {
        res.send({msg: error.messsage});
    }
});

export default router;