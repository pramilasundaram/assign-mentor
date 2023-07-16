  
        const Teacher = require("../models/teachermodel");
        const Student=require("../models/studentmodel");

        /**
        * method:GET
        * path:/teacher/allusers 
        */
        const getteachers=async (req, res) => { 
          try {
            const teachers = await Teacher.find();    
            return res.status(200).json({message:"all users!!",data:teachers});
          }
          catch (error) {
            return res.status(400).json(error);
          }
        }


          /**
         * method:POST
         * path:/teacher/register
         */
        const createteacher= async (req, res) => {
       
          try {
            const {
              mentorId,                
              mentor,
              department,
              experience,
              designation,
              education,
              gender,
              dob,
              phonenumber,
              email ,
              location} = req.body;

            const oldteacher = await Teacher.findOne({mentorId});
            if (oldteacher) {
              return res.status(409).json({error:"teacherId Already Exist."});
            }
            const oldteachers = await Teacher.findOne({ email });
            if (oldteachers) {
              return res.status(409).json({error:"email already exists"});
            }
            const teacher = await Teacher.create({
                mentorId,
                mentor,
                department,
                experience,
                designation,
                education,
                gender,
                dob,
                phonenumber,
                email ,
                location}); 
            await teacher.save();   
            return res.status(200).json({message:"registered successfully",data:teacher});
          } 
          catch (error) {
            console.log(error)
          }
        }

          
          /**
        * method:PUT
        * path:/teacher/updateteacher/:id
        */
          const updateteacher=async(req,res)=>{
            try {
              const teacher=await Teacher.findById(req.params.id);
            if(!teacher){
                res.status(404)
                throw new Error("teacher not found")
            }
            const updatedteacher=await Teacher.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json({message:"updated successfully",data:updatedteacher})
            } catch (error) {
              res.status(400).json(error)
            }
          }
        /**
        * method:GET
        * path:/teacher/getteacher/:id
        */
        const getteacher=async(req,res)=>{
          try {
            const teacher=await Teacher.findById(req.params.id);
            if(!teacher){
                res.status(404)
                throw new Error("teacher not found")
              
            }
            res.status(200).json({message:"fetched teacher",data:teacher}) 
          } catch (error) {
            res.status(400).json(error) 
          }  
          }

        /* method:GET
          * path:/teacher/deleteteacher/:id
          * access:public
          */
         const deleteteacher=async(req,res)=>{
          try {
            const deleteteacher=await Teacher.findByIdAndRemove(req.params.id);
            if(!deleteteacher){
                res.status(404)
                throw new Error("contact not found")
            }   
            res.status(200).json({message:"deleted",data:deleteteacher})
          } catch (error) {
            res.status(400).json(error) 
          }
          }

          /* method:GET
          * path:/teacher/deleteteacher/:id
          * access:public
          */
          const studentlist=async (req, res) => { 
            try {
              const teacher = await Teacher.findById(req.params.id);              
              const students = await Student.find({mentorID:teacher.mentorId});   
              return res.status(200).json({message:"list of students!!",data:students});
            }
            catch (error) {
              return res.status(400).json(error);
            }
          }
  
        module.exports = {createteacher,getteachers,updateteacher,getteacher,deleteteacher,studentlist};