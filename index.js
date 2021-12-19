const sequelize = require("./util/database")
const Customer = require("./models/customer")
const Order = require("./models/order")

Customer.hasMany(Order); // one to many relation

let customerId = null;

sequelize.sync({force:true}).then(result=>{
    return Customer.create({name:"Sajjad", email:"sajjadmazharjr@gmail.com", })
    // console.log(result);
}).then(customer =>{
    console.log("Customer created ", customer)
    customerId = customer.id
    return customer.createOrder({total:30})
    // return Order.create({total:45})
}).then(order=>{
    console.log("order is ", order)
    return Order.findAll({where: customerId})
}).then(orders=>{
    console.log("All the orders are ",orders);
})
.catch(err=>{
    console.log(err);
});