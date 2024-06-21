
import express from 'express'
import getData from '../fetchData.js'
import { insertDataIntoNeon } from '../index.js';

const routes = express.Router();

routes.get('/', async (req, res) => {
    try {
      const data = await getData();
      await insertDataIntoNeon(data);
      res.send('Data migration completed successfully.');
    } catch (error) {
      res.status(500).send('Error during data migration.');
    }
  });

  export default routes