
module.exports = {
   // Read: async function (req, res) {
     //   return res.view('read',{layout: ''});
    //},

    ReadRecord: async function (req, res) {
        console.log(req.body)
        let getAllUser = await User.find();
            console.log(getAllUser)
          return res.json({
            statuscode: 200,
            message: "All good ",
            data: getAllUser
        });
    },


CreateRecord: async function(req,res){
    console.log("=========================>",req.body)
    const {FirstName,LastName,phone,email,password}=req.body
    
    var createRecord = await User.create({FirstName,LastName,phone,email,password}).fetch();
   console.log(createRecord)
    return res.json({
    statuscode:200,
    message:"successsfully",
    data:createRecord
})
},
DeleteRecord: async function(req,res){
    const {id}=req.body
var deleteRecord = await User.destroyOne({id})
console.log(deleteRecord)
return res.json({
    statuscode:200,
    message:"deleted successsfully",
    data:deleteRecord
})
},
updateRecord: async function(req,res){
    const {id,FirstName}=req.body
    var updatedRecords = await User.updateOne({id},{FirstName})
    console.log(updatedRecords)
return res.json({
    statuscode:200,
    message:"updated successsfully",
    data:updatedRecords
})
},







}
/*module.exports = {

    friendlyName: 'Welcome user',
  
    description: 'Look up the specified user and welcome them, or redirect to a signup page if no user was found.',
  
    inputs: {
      userId: {
        description: 'The ID of the user to look up.',
        // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
        // if the `userId` parameter is not a number.
        type: 'number',
        // By making the `userId` parameter required, Sails will automatically respond with
        // `res.badRequest` if it's left out.
        required: true
      }
    },
  
    exits: {
      success: {
        responseType: 'view',
        viewTemplatePath: 'pages/welcome'
      },
      notFound: {
        description: 'No user with the specified ID was found in the database.',
        responseType: 'notFound'
      }
    },
  
    fn: async function ({userId}) {
  
      // Look up the user whose ID was specified in the request.
      // Note that we don't have to validate that `userId` is a number;
      // the machine runner does this for us and returns `badRequest`
      // if validation fails.
      var user = await User.findOne({ id: userId });
  
      // If no user was found, respond "notFound" (like calling `res.notFound()`)
      if (!user) { throw 'notFound'; }
  
      // Display a personalized welcome view.
      return {
        name: user.name
      };
    }
  };*/