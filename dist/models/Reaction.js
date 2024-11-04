import { Schema, Types } from 'mongoose';
import dayjs from "dayjs";
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dayjs(timestamp).format("MM-DD-YYYY")
    }
}, {
    toJSON: {
        getters: true
    },
    timestamps: false,
    id: false,
    _id: false
});
export default reactionSchema;
