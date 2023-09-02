const CustomerService = require('../services/customer-service');

module.exports = (app) => {

    const service = new CustomerService();

    /***
     * This is a Webhook service exposed to other services to perform customer related actions
     */
    app.use('/app-events', (req, res, next)=>{
        const {payload} = req.body;

        console.log("Payload", payload);        
        service.SubscribeEvents(payload);

        console.log("================================ Customer Service Received Event ================================");
        return res.status(200).json(payload)
    })
}