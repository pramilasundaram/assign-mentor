  
        const Student = require("../models/studentmodel");


        /**
        * method:GET
        * path:/student/allusers 
        */
        const getstudents=async (req, res) => { 
          try {
            const students = await Student.find();    
            return res.status(200).json({message:"all users!!",data:students});
          }
          catch (error) {
            return res.status(400).json(error);
          }
        }


          /**
         * method:POST
         * path:/student/register
         */
        const createstudent= async (req, res) => {
       
          try {
            const { name, email, password,  studentId ,department,gender,dob,phonenumber,location,mentor,mentorID} = req.body;

            const oldstudent = await Student.findOne({ studentId });
            if (oldstudent) {
              return res.status(409).json({error:"studentId Already Exist."});
            }
            const oldstudents = await Student.findOne({ email });
            if (oldstudents) {
              return res.status(409).json({error:"email already exists"});
            }
            const student = await Student.create({
              name, email, password,  studentId ,department,gender,dob,phonenumber,location,mentor,mentorID
            }); 
            await student.save();   
            return res.status(200).json({message:"registered successfully",data:student});
          } 
          catch (error) {
            console.log(error)
          }
        }

          
          /**
        * method:PUT
        * path:/student/updatestudent/:id
        */
          const updatestudent=async(req,res)=>{
            try {
              const student=await Student.findById(req.params.id);
            if(!student){
                res.status(404)
                throw new Error("Student not found")
            }
            const updatedstudent=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.status(200).json({message:"updated successfully",data:updatedstudent})
            } catch (error) {
              res.status(400).json(error)
            }
          }
        /**
        * method:GET
        * path:/student/getstudent/:id
        */
        const getstudent=async(req,res)=>{
          try {
            const student=await Student.findById(req.params.id);
            if(!student){
                res.status(404)
                throw new Error("student not found")
              
            }
            res.status(200).json({message:"fetched student",data:student}) 
          } catch (error) {
            res.status(400).json(error) 
          }  
          }

        /* method:GET
          * path:/student/deletestudent/:id
          * access:public
          */
         const deletestudent=async(req,res)=>{
          try {
            const deletestudent=await Student.findByIdAndRemove(req.params.id);
            if(!deletestudent){
                res.status(404)
                throw new Error("contact not found")
            }   
            res.status(200).json({message:"deleted",data:deletestudent})
          } catch (error) {
            res.status(400).json(error) 
          }
            
         }


        module.exports = {createstudent,getstudents,updatestudent,getstudent,deletestudent};