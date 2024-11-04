import {Schema, model, type Document} from 'mongoose';

import reactionSchema from './Reaction.js';
import dayjs from 'dayjs';

interface IThought extends Document {
    thoughtText: string,
    createdAt: Schema.Types.Date,
    username: string,
    reactions: [typeof reactionSchema],
}

const thoughtSchema = new Schema<IThought>({
    thoughtText: {
        type: String,
        required: true,
        min: 1,
        max: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp: Date): string => dayjs(timestamp).format("MM-DD-YYYY"),
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
},
{
    toJSON: {
        getters: true,
    },
    timestamps: false,
    id: false,
}
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model<IThought>('Thought', thoughtSchema);

export default Thought;