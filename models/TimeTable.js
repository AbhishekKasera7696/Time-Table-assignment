const mongoose = require('mongoose');




const Timetable = new mongoose.Schema({
    Class:{
        type:String,
        required:true
    },
    Department:{
        type:String,
        required:true,
       
    },
    Course:{
        type:String,
        required:true,
      
    },
    Room:{
        type:String,
        required:true,
      
    },
    Instructor:{
        type:String,
        required:true,
      
    },
    Meeting_Time:{
        type:String,
        required:true,
        
    }

});

module.exports = mongoose.model('Timetable',Timetable)