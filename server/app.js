
import createTransactionRoute from './routers/create_transaction';
import express from 'express';
const { check, validationResult } = require('express-validator/check');

const app = express();
var port = 3000;

app.use('/create_transaction',[
    check('customer_name').exists(),
    check('cc-number').isLength({ min: 16 })
  ], createTransactionRoute);

app.get('/',function(req,res){

  res.sendFile(path.join(__dirname+'/html/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(port, () => console.log(`Listening ${port}`));

export default app;