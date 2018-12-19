export default class PaymentGateway {

    async send_payment_request() {
        // send payment request
        return await this.request( process.env.GATEWAY_A, {
                "cc_number": cc_number,
                "currency": currency,
                "price": price,
                "cvv": cvv,
                "expiration_date": expiration_date,
                "holder_name": holder_name
        }); 
    }
}
