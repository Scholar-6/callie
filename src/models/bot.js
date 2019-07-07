const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BotSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  botAccessToken: {
    type: String,
    required: true
  },
  teamId: {
    type: String,
    required: true
 },
 teamName: {
    type: String,
    default: 'a default name'
 }
},
  {
    timestamps: true
  });

const Bot = mongoose.model('Bot', BotSchema);
export default Bot;
