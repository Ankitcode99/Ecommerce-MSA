const ShoppingService = require('../services/shopping-service');

module.exports = (app) => {

    const service = new ShoppingService();
    /***
     * This is a Webhook service exposed to other services to perform shopping related actions
     */

    app.use('/app-events', (req, res, next)=>{
        const {payload} = req.body;;


        service.SubscribeEvents(payload);

        console.log("================================ Shopping Service Received Event ================================");
        return res.status(200).json(payload)
    })
}