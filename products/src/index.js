const express = require('express');
const { PORT } = require('./config');
const { MakeDatabaseConnection } = require('./database');
const expressApp = require('./express-app');
const { CreateChannel } = require('./utils')

const StartServer = async() => {

  const app = express();
  
  await MakeDatabaseConnection();

  const channel = await CreateChannel()
  console.log(`Rabbit MQ channel established`)


  await expressApp(app, channel);
  

  app.listen(PORT, () => {
        console.log(`Server is running on Port ${PORT}`);
  })
  .on('error', (err) => {
      console.log(err);
      process.exit();
  })
  .on('close', () => {
      channel.close();
  })
  

}

StartServer();