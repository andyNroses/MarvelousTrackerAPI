var userSchema = new mongoose.Schema({
  active: Boolean,
  email: { type: String, trim: true, lowercase: true },
  firstname: { type: String, trim: true },
  lastname: { type: String, trim: true },
  username: { type: String, tr},
  sp_api_key_id: { type: String, trim: true },
  sp_api_key_secret: { type: String, trim: true },
  created: { type: Date, default: Date.now },
  lastLogin: { type: Date, default: Date.now }
}, { collection: 'user'})

userSchema.index({email : 1}, {unique:true});
userSchema.index({sp_api_key_id : 1}, {unique:true});

var UserModel = mongoose.model('User', userSchema)
