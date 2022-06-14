const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Type",
    {

      id: {
    
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
   
       },

      name: {
        type: DataTypes.STRING,
        unique: true
      }
}, 

{
    timestamps: false
})
};


