import { DataTypes} from 'sequelize'
import db from '../db/config.js'

const Usuario = db.define('usuario', { //una tabla base :tbb
    nombre: {
        type: DataTypes.STRING,
         allowNull: false
    },
    email:{
        type: DataTypes.STRING,
         allowNull: false,
         unique:true
         
    },
    password: {
        type: DataTypes.STRING,
         allowNull: false
    },
    token: DataTypes.STRING, 
    confirmado: DataTypes.BOOLEAN
})

export default Usuario