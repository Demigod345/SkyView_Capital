const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const request = require('request');



const getPrediction = catchAsync(async (req, res) => {
    console.log(req.body);
    console.log(req.headers.authorization)
    // const data=req.body;

})




const getUserInput = catchAsync(async (req, res) => {
  const data=req.body;
  console.log(data)
  const options = {
    url: 'http://localhost:6969/model',
    json: true,
    body: {
        company: data.company,
        endDate: data.endDate,
        startDate: data.startDate
    },
    headers: {
        'Token': `${process.env.SERVER_SECRET}` // You can add more headers as needed
    }
};

  request.post(options, async(err, response, body) => {
    // console.log(res)
    if (err) {
      return console.log(err);
    }
    console.log(`Status: ${response.statusCode}`);
    if(response.statusCode == 200){
      console.log("bla-bla")
    }
});


})

module.exports = {
  getPrediction,
  getUserInput
};
