// We​ ​export​ ​a​ ​function​ ​that​ ​takes​ ​in​ ​2​ ​variables. sequelize,​ ​and​ ​DataTypes.​ ​These​ ​are​ ​provided​ ​to​ ​us​ ​automatically​ ​by index.js.
// “sequelize”​ ​in​ ​this​ ​case​ ​is​ ​actually​ ​our​ ​connection​ ​to​ ​our​ ​database.
// DataTypes​ ​will​ ​be​ ​used​ ​to​ ​defining​ ​what​ ​type​ ​of​ ​data​ ​each​ ​property​ ​on​ ​our model​ ​should​ ​be.


module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", { 
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len:[1,140]
      },
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }

  });
  return Burger;
};