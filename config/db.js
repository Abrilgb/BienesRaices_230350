import Sequelize from 'sequelize'
import dotenv from 'dotenv'
dotenv.config({path:'.env'})

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS , {
    host: process.env.BD_HOST,
    port: 3306,
    dialect: 'mysql',
    defione: {
        timestamps: true
    },
    pool:{ //si requiero nectar a la bd se crea, configura como va ser la conexion 
        max: 5,//conexiones
        min: 0,
        acuire: 30000,//tiempo antes de marcar un error 
        idle: 10000
    }
,
operatorAliases: false});

export default db ;