import express from 'express';

const route = express.Router();

async function handleRequest(req) {
    let customer_name = req.body.customer_name;
    let phone_number = req.body.phone_number;
    let currency = req.body.currency;
    let cc_number = req.body.cc-number;
    
    return true;
}

//route.use(auth);

// Endpoint to post handy requests
route.post('/', (req, res, next) => {
  handleRequest(req).then(() => {
    res.end('Message Received');
  }).catch(err => next(err));
});

export default route;
