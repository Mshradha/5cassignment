const mongoose = require('mongoose');


const userScheme = new mongoose.Schema({
    capsule_serial : {type:String  },
    capsule_id : {type:String  },
    status: {type:String  },
    original_launch:  {type:String  },
    original_launch_unix : Number,
    missions: {type:Array},
    landings: Number,
    type: {type:String  },
    details: {type:String  },
    reuse_count: Number
})

const UserModel = mongoose.model("userData", userScheme);





module.exports = UserModel;