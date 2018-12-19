import express from 'express';
import request from 'request-promise';
import {Transactions} from '../../database/bookshelf';
import {PaymentGateway} from '../services/payment';

const route = express.Router();

async function handleRequest(req) {
    let customer_name = req.body.customer_name;
    let phone_number = req.body.phone_number;
    let currency = req.body.currency;
    let cc_number = req.body.cc-number;
    let price = req.body.price;
    let cvv = req.body.cvv;
    let expiration_date = req.body.expiration_date;
    let holder_name = req.body.holder_name;
    
    //create transaction pending record

    // send payment request
    try {
        let pa = new PaymentGateway();
        let {GatewayTransactionID, Status} = pa.send_payment_request({
                "cc_number": cc_number,
                "currency": currency,
                "price": price,
                "cvv": cvv,
                "expiration_date": expiration_date,
                "holder_name": holder_name
        });
    } catch (error) {
        console.log('error', error);
    }

    //update transaction record

    //update redis

    return Status;
}

//route.use(auth);

// Endpoint to post handy requests
route.post('/', (req, res, next) => {
  handleRequest(req).then(() => {
    res.end('Message Received');
  }).catch(err => next(err));
});

export default route;
