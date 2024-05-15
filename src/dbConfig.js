const {Sequelize} = require('sequelize')

//add database name, user and password
const sequelize = new Sequelize('nodeTask','root','',{
    dialect:'mysql',
    host:'localhost'
});


//check whether database is connected successfully or not

const checkDbConnect = async()=>{
    try{
        await sequelize.authenticate();
        console.log('db connected successfully')
    }
    catch(error){
        console.error(error);
    }
}

//exports 
module.exports = {sequelize,checkDbConnect}