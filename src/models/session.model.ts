import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import config from 'config';
import {UserDocument} from './user.model'

export interface SchemaDocument extends mongoose.Document {
  user: UserDocument['_id'],
  vdlid: boolean,
  userAgent: string,
  createdAt: Date,
  updatedAt: Date,
}

const sessionShema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    valid: { type: Boolean, default: true },
    userAgent: {type: String}
  },
  {
    timestamps: true,
  }
)

const SessionModel = mongoose.model("Session", sessionShema);

export default SessionModel;