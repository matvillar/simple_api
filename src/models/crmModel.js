import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: ' Enter First Name',
  },
  lastName: {
    type: String,
    require: ' Enter Last Name',
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
});

export default ContactSchema;
