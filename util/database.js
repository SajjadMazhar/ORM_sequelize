const Sequelize = require("sequelize")

const sequelize = new Sequelize("db_sequelize", "root", "Sajj@d007", {
    dialect:"mysql",
    host:"localhost"
})

module.exports = sequelize;