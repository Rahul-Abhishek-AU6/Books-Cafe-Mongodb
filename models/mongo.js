var mongoose = require('mongoose');
// mongodb connection

async function init() {
    try {
       await mongoose.connect('mongodb+srv://HMS_Rahul:AttainU123@cluster0-sjhiu.mongodb.net/AttainU?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
     
      // mongodb+srv://HMS_Rahul:AttainU123@cluster0-sjhiu.mongodb.net/AttainU
     
       //   console.log('connected to mongodb');
    } catch (error) {
        console.log("error in mongodb connection");
        console.log(error);
    }
}

init();