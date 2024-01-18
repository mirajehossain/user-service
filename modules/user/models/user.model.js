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
    },
    userId: {
        type: Schema.Types.String,
        required: [true, 'user name is required'],
        trim: true,
    },
});

const UserModel = model('users', userSchema);