import { Schema, model } from 'mongoose';
import reactionSchema from './Reaction.js';
import dayjs from 'dayjs';
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dayjs(timestamp).format("MM-DD-YYYY"),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
}, {
    toJSON: {
        getters: true,
    },
    timestamps: false,
    id: false,
});
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
export default Thought;
