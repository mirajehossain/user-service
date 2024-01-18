const { v4: uuid } = require('uuid');
const UserModel = require('../models/user.model');

module.exports = {
    createUser: async (req, res) => {
        try {
            const { name, email } = req.body;
            const userId = uuid();

            const payload = {
                name, email, userId
            }
            const isExistUser = await UserModel.findOne({ email });
            if (isExistUser) {
                return res.status(409).send({
                    success: false,
                    message: 'User already exists',
                });
            }

            const user = await UserModel.create(payload);
            return res.status(201).send({
                success: true,
                message: 'User created successfully',
                data: user
            });
        } catch (e) {
            return res.status(500).send({
                success: false,
                message: 'An error occur',
                error: e.message
            });
        }
    },

    getUsers: async (req, res) => {
        try {
            const { page = 1, limit = 12 } = req.query;
            const skip = Number(limit) * (Number(page) - 1);

            const user = await UserModel.find().skip(skip).limit(limit);
            return res.status(200).send({
                success: true,
                message: 'Users fetched successfully',
                data: user
            });
        } catch (e) {
            return res.status(500).send({
                success: false,
                message: 'An error occur',
                error: e.message
            });
        }
    },

    updateUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const payload = req.body;

            const user = await UserModel.findOne({ userId });
            if (!user) {
                return res.status(400).send({
                    success: false,
                    message: 'User not found',
                })
            }
            const updatedUser = await UserModel.findOneAndUpdate({ userId }, payload, { new: true });
            return res.status(200).send({
                success: true,
                message: 'User updated successfully',
                data: updatedUser
            });
        } catch (e) {
            return res.status(500).send({
                success: false,
                message: 'An error occur',
                error: e.message
            });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { userId } = req.params;
            const user = await UserModel.findOne({ userId });

            if (!user) {
                return res.status(400).send({
                    success: false,
                    message: 'User not found',
                })
            }
            await UserModel.deleteOne({ userId });
            return res.status(200).send({
                success: true,
                message: 'User deleted successfully',
            });
        } catch (e) {
            return res.status(500).send({
                success: false,
                message: 'An error occur',
                error: e.message
            });
        }
    }
}