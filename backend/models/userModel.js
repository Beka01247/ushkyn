const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
  phone: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  school: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  activeSession: {
    type: String,
    default: null
  },
  multipleLoginAttempts: {
    type: Number,
    default: 0
  },
  banned: {
    type: Boolean,
    default: false
  }
});

userSchema.statics.signup = async function(phone, password, school, city, grade, name) {

  // validaton
  if (!phone || !password || !school || !city || !grade || !name ) {
    throw Error('Барлық бағананы толтыру қажет');
  }

  if (!validator.isMobilePhone(phone)) {
    throw new Error('Жарамсыз телефон нөмірі');
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error('Құпия сөз жеткілікті қауіпсіз емес');
  }

  const exists = await this.findOne({ phone });
  if (exists) {
    throw new Error('Бұндай пайдаланушы бар');
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ phone, password: hash, school, city, grade, name });

  return user;
}

userSchema.statics.login = async function(phone, password) {
  if (!phone || !password) {
    throw Error('Барлық бағананы толтыру қажет');
  }

  const user = await this.findOne({phone});

  if (!user) {
    throw new Error('Телефон нөмірі қате терілді');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error('Пароль қате терілді');
  }

  return user;
}

module.exports = mongoose.model('User', userSchema);
