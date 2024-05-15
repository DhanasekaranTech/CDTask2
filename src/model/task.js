const {sequelize} = require('../dbConfig')
const {DataTypes} = require('sequelize')

//create a table named Task

const Task = sequelize.define('Task',{
    userId:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    content:{
         type:DataTypes.STRING,
         validate:{
            max:150
         }
    },
    description:{
        type:DataTypes.STRING,
        validate:{
           max:50
        }
   
    },
    isComplete:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }

})

//create a table if it is does'nt exist
Task.sync();

module.exports = Task;