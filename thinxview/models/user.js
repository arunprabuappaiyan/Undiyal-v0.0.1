import mongoose from 'mongoose';
import { generatePasswordHash } from '@thinxview/utils/index';

const UserSchema = new mongoose.Schema({
  name: { type: String },
  auth_type: { type: Number, default: 2 },
  username: { type: String },
  password: { type: String },
  email: { type: String },
  role: { type: String },
  email_verified: { type: Date },
  image: { type: String },
  status: { type: Number, enum: [0, 1, 2, 10], default: 10 },
  isSuperUser: { type: Boolean, default: false },
  created_at: { type: Date, default: new Date() },
  updated_at: { type: Date, default: new Date() },
  created_by: { type: Object },
});

UserSchema.methods.checkUsername = (data, cb) => {
  UserSchema.findOne({ username: data.username })
    .lean()
    .exec((_error, count) => {
      if (!_error && count) {
        return cb({ code: 2, key: 'Username' });
      } else {
        return cb({ code: 0, key: '' });
      }
    });
};

UserSchema.pre('save', function (next) {
  let _this = this;

  generatePasswordHash(_this.password, (hash) => {
    if (hash.error) {
      next(hash.error);
    } else {
      _this.password = hash.hash;

      next();
    }
  });
});

//export default mongoose.model("users", UsersSchema);
export default mongoose.models.user || mongoose.model('user', UserSchema);
