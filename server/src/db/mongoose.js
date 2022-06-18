const mongoose = require('mongoose');

// const MONGODB_URI = "mongodb+srv://phmclong:qPE8Hf22LxNrjcA1@cluster0.01xbm.mongodb.net/ticket?retryWrites=true&w=majority"
const MONGODB_URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.01xbm.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;


mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

