const express=require('express');
const axios=require('axios')
var cors = require('cors')
const FormData=require('form-data')
require('dotenv').config()
const app=express()
app.use(cors())
app.use(express.json({}));

const PORT=process.env.PORT||4000;

const token=async (req,res) => await axios({
    method: 'post',
    url: 'https://seauth.shuffleexchange.com/connect/token',
    data: {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        grant_type:process.env.GRANT_TYPE
    },headers:{
        'content-type':'application/x-www-form-urlencoded'
    }
  }).then((response)=>{ return response.data.access_token})
  .catch((error)=>{
    return res.send(error.message)

  })
  app.get("/", (rea,res)=>{
    return res.status(200).send("server is running fine")
  })


  app.post('/getUserProfile',async(req,res)=>{
   try{
    const formData=new FormData();
    formData.append('Username',req.body.Username)
    formData.append('Password',req.body.Password)
    const authorization=await token();
    
  const response= await axios({
    method: 'post',
    url: 'https://seconnect.shuffleexchange.com/api2/a216d01f-e8b5-4259-9988-df669751a981/COA/GetProfile',
    data: formData,
    headers:{
        'Authorization':'Bearer '+authorization,
        "Content-Type":"multipart/form-data"
    }
       });
       if(response.data.Result==='false'){
        return res.send({
          message:"Incorrect Password"
        })
       }
      
       
       if(!response.data.Members){
        return res.send({
          message:`You don't have any membership.`
        })

       }
       if(response.data.Members.Member){
       return res.send(response.data.Members)
       }
     
        
       }

   catch(error){
  return res.send(error.message)
   }
  })

  app.get('/allmembers', (req,res)=> axios({
    method: 'get',
    url: 'https://seconnect.shuffleexchange.com/api2/anonymous/a216d01f-e8b5-4259-9988-df669751a981/MobileAppIntergrationTEST/USR_spGetMobileAppConstituentsCOA',
    data: {
        // client_id: process.env.CLIENT_ID,
        // client_secret: process.env.CLIENT_SECRET,
        // grant_type:process.env.GRANT_TYPE
    },headers:{
        'content-type':'application/json'
    }
    
  }).then((response)=>{ 
  return res.send(response.data)})
  .catch((error)=>{
    return res.send(error.message)

  }))

  app.get('/memberById/:MCID',(req,res)=>axios(
    {
    method: 'get',
    url: `https://seconnect.shuffleexchange.com/api2/anonymous/a216d01f-e8b5-4259-9988-df669751a981/MobileAppIntergrationTEST/USR_spGetMobileAppConstituentsCOA?MCID=${req.params.MCID}`,
    data: {
        // client_id: process.env.CLIENT_ID,
        // client_secret: process.env.CLIENT_SECRET,
        // grant_type:process.env.GRANT_TYPE
    }
    ,headers:{
        'content-type':'application/json'
    }
    
  }).then((response)=>{ 
    if(response.data.members!==null){
    return res.send(response.data)
  }else{
    return res.send({
      message:'Member not found.'})
  }})
  .catch((error)=>{
    return res.send(error.message)

  }))

  app.listen(PORT,()=>console.log(`SERVER IS RUNNING on PORT , ${PORT}`))

