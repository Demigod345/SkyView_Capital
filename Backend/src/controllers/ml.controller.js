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
  console.log(req.body);
  const data=req.body;

  const options = {
    url: 'http://localhost:6969/model',
    json: true,
    body: {
        company: data.company,
        endDate: data.startDate,
        startDate: data.endDate
    },
    headers: {
        'Authorization': 'Bearer YourAccessToken', // Add your desired headers here
        'Token': `${process.env.SERVER_SECRET}` // You can add more headers as needed
    }
};

  request.post(options, (err, res, body) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Status: ${res.statusCode}`);
    console.log(body);
});

})

module.exports = {
  getPrediction,
  getUserInput
};
