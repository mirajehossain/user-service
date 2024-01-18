const { model, Schema } = require('mongoose');
const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: [true, 'user name is required'],
        trim: true,
    },
    email: {
        type: Schema.Types.String,
        required: [true, 'user name is required'],
        trim: true,
        unique: true,
    },
    userId: {
        type: Schema.Types.String,
        required: [true, 'user name is required'],
        trim: true,
    },
}, {
    timestamps: true,
    versionKey: false,
},);

const UserModel = model('users', userSchema);
module.exports = UserModel;
