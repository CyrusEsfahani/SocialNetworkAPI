import { Schema, Types, type Document } from 'mongoose';

import dayjs from "dayjs";

interface IReaction extends Document {
 reactionId: Schema.Types.ObjectId,
 reactionBody: string,
 username: string,
 createdAt: Schema.Types.Date
}

const reactionSchema = new Schema<IReaction>(
 {
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
     get: (timestamp:any) => dayjs(timestamp).format("MM-DD-YYYY")
   }
 },
 {
   toJSON: {
     getters: true
   },
   timestamps: false,
   id: false,
   _id: false
 }
);



export default reactionSchema;
