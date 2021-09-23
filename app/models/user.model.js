module.exports = (sequelize, Sequelize) => {
  return  sequelize.define("users", {
    id:{

      // Sequelize module has INTEGER Data_Type.
      type:Sequelize.INTEGER,

      // To increment user_id automatically.
      autoIncrement:true,

      // user_id can not be null.
      allowNull:false,

      // For uniquely identify user.
      primaryKey:true
    },
    name: { type: Sequelize.STRING, allowNull:false }
  });
};
