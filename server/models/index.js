var Sequelize = require('sequelize');

var db = new Sequelize('postgres://localhost:5432/tripplanner', {
    logging: false
});

var Hotel= db.define('hotel',{
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    num_stars:{
        type: Sequelize.FLOAT
    },
    amenities:{
        type:Sequelize.STRING,
        get: function()
        {
            return this.getDataValue('amenities').concat(', ');
        }
    }
   

})


var Activity=db.define('activity',{
    name: {
        type: Sequelize.STRING,
        allowNull:false
    },
    age_range:{
        type: Sequelize.STRING
    }
})

var Restaurant=db.define('restaurant',{
    
    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    cuisine:{
        type:Sequelize.STRING,
        get: function()
        {
            return this.getDataValue('cuisine').concat(', ');
        }
    },
    price:{
        type: Sequelize.INTEGER
    }
})

var Place=db.define('place',{
    address:{
        type: Sequelize.STRING,
        allowNull:false
    },
    city:{
        type:Sequelize.STRING
    },
    state:{
        type:Sequelize.STRING
    },
    phone:{
        type:Sequelize.STRING
    },
    location:{
        type: Sequelize.ARRAY(Sequelize.FLOAT)
    }
})

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports={Place,Activity,Hotel,Restaurant,db};

