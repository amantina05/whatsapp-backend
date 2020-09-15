import mongoose from 'mongoose';

//data schema
const whatsappschema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

//collection
export default mongoose.model('messagecontents', whatsappschema);
