const Task = require('../model/task')


//add task to the table
exports.createTask = async(req,res)=>{

    const {content, description, isComplete} = req.body;
    if(content && description && isComplete !==""){

        try{
        const newTask = await Task.create({content, description, isComplete})
         res.status(201).json(newTask);
        
        }catch(err){
         console.log('error in creating task :',error);
         res.status(500)
        }
    }else{
        console.log("dont keep input null");
res.status(201).json({message:"dont keep input null"})
    }



}

//get all the tasks form table
exports.getAllTask = async(req,res)=>{

    try{
    const task = await Task.findAll();
     res.status(201).json(task);
    
    }catch(err){
     console.log('error in creating task :',error);
     res.status(500)
    }
    
    }
    

    //get a task from table using userId 
exports.getTaskById = async(req,res)=>{

        try{
            const {userId} = req.params;
            const task = await Task.findByPk(userId)
                if(task){
                    res.json(task);
                }else{
                    res.status(404).json({error:"task is not found  "})
                }
        
        }catch(err){
         console.log('error in creating task :',error);
         res.status(500)
        }
        
        }

        //delete task by userId
exports.deleteTaskById = async(req,res)=>{

        try{
                const {userId} = req.params;
               const deleteTask = await Task.destroy({where:{userId}})
               if(deleteTask){
                res.json({message:'task deleted succesfully'})
               }
               else{
                res.status(500).json({message:'cannot delete the task'})
               }
            }catch(err){
             console.log('error in creating task :',error);
             res.status(500)
            }
            
      }
      //update task
        
      exports.updateTaskById = async(req,res)=>{

        try{
                const {userId} = req.params;
                const {content, description, isComplete} = req.body;

                const task = await Task.findByPk(userId)
                if(task){
                    task.content = content;
                    task.description = description;
                    task.isComplete = isComplete
                    await task.save()
                    res.json(task)
                }else{
                    res.status(500).json({message:'task not found'})
                }

        
            }catch(err){
             console.log('error in creating task :',error);
             res.status(500)
            }
            
      } 
      //update field in table
      exports.updateFieldInTask = async(req,res)=>{

        try{
                const {userId} = req.params;
                const updates = req.body;

                const task = await Task.findByPk(userId)
                if(task){
                   Object.assign(task,updates)
                    await task.save()
                    res.json(task)
                }else{
                    res.status(500).json({message:'task not found'})
                }

        
            }catch(err){
             console.log('error in creating task :',error);
             res.status(500)
            }
            
      }         