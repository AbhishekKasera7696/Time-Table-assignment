const express = require('express');
const { sendStatus } = require('express/lib/response');
const app = express();
const mongoose = require('mongoose'); 
const Timetable = require("./models/TimeTable");
require("dotenv").config();

// mongoose.connect('mongodb://localhost/TimeTable',{
//     useNewUrlParser:true, useUnifiedTopology:true
// })


mongoose.connect( process.env.MONGODB_URI || `mongodb+srv://Abhi:${process.env.PASS}@cluster0.fozpftk.mongodb.net/?retryWrites=true&w=majority`, {useNewUrlParser:true, useUnifiedTopology:true}, () => {
    console.log("connected to database")
}
)


app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))

app.get('/', async (req,res) => {
    const table = await Timetable.find()
    console.log(table)
   res.render('index', {table:table})
});

let classNum = 0;

app.post('/timetable', async(req,res)=> {

    if(classNum <= 6){
        await Timetable.create({Class:classNum,Department:req.body.dept,Course:req.body.course,Room:req.body.room, Instructor:req.body.instructor, Meeting_Time:req.body.meetingTiming})
        classNum++
    }
 
 
   res.redirect('/')
});



app.listen(process.env.PORT || 5000)