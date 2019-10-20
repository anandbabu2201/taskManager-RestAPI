//CRUD create read update delete

const { MongoClient ,ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName= 'task-manager'

// const id = new ObjectID()
// console.log(id);
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology: true},(err,client)=>{
  if(err) return console.log('unable to connect to database');
  const db=client.db(databaseName);
  //  db.collection('users').findOne({ name:'kasturi'},(error,user)=>{
  //    if(error) return console.log('Unable to fetch')
  //    console.log(user)
  //  })
  //  db.collection('users').find({age:29}).toArray((error,result)=>{
  //    if(error) return console.log('unable to find the data')
  //    console.log(result)
  //  })
  //  db.collection('users').find({age:29}).count((error,count)=>{
  //   if(error) return console.log('unable to find the data')
  //   console.log(count)
  // })
  // db.collection('tasks').findOne({_id:new ObjectID("5dac3ca1d633bc523a280cab")},(error,data)=>{
  //   console.log(data);
  // })
  // db.collection('tasks').find({completed:false}).toArray((erro,data)=>{
  //   console.log(data) })
  // db.collection('users').updateOne({_id:new ObjectID("5dac385fb71cbb522aac9cc7")},{
  //   $inc:{
  //     age:1
  //   }
  // }).then((result)=>{
  //   console.log(result)
  // }).catch((error)=>{
  //   console.log(error)
  // })

  // db.collection('tasks').updateMany({completed:false},{
  //   $set:{
  //     completed:true
  //   }
  // }).then(res=>console.log(res))
  // .catch(err=>console.log(err))
  db.collection('users').deleteMany({ age:46})
  .then(res=>console.log(res))
  .catch(err=>console.log(err));
  });
