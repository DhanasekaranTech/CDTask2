const {sequelize} = require('../dbConfig')
const {DataTypes} = require('sequelize')

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

Task.sync({alter:true});

module.exports = Task;