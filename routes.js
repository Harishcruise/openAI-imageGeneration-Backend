require('log-timestamp');
const express = require('express');
const router = express.Router();
const  openai  = require('./config')
const fs = require('file-system')


router.get('/',(req,res)=>{
   res.json({data:"application working successfully"})
})

router.post('/createImage',async(req,res)=>{
   
   var prompt = req.body.prompt;
   var number = req.body.n;
   var size = req.body.size;

   try{
      var response = await openai.createImage({
         prompt: prompt,
         n: number,
         size:size,
       });
   }catch(error) {
      if (error.response) {
        console.error(error.response.status, error.response.data);
        res.status(error.response.status).json(error.response.data);
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`);
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.',
          }
        });
      }
    }
   res.json(response.data)
})

router.post('/createImageVariation',async(req,res)=>{
  var buffer = new Buffer (req.body.buffer);
  var number = req.body.n;
  var size = req.body.size;
  var name = req.body.name;


// let fileStream = fs.createReadStream('./YTwallpaper.png');

  buffer.name = name;

  try{
    var response = await openai.createImageVariation( fileBuffer,
    number,
    size)
  }catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }

  res.json(response.data)
})



module.exports = router;