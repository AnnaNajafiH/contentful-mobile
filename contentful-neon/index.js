import express from 'express';
import dotenv from 'dotenv';
import pg from 'pg';
import routes from './routes/dataRoutes.js';


dotenv.config();


const port = 9000;

const app = express();
const {Pool} = pg;
const pool = new Pool({
    connectionString : process.env.NEON_DATABASE_URL
});

/* Inserting data into Neon */
export const insertDataIntoNeon = async (data) => {
    try {
      const client = await pool.connect();
  
      for (const item of data) {
        const query = `
          INSERT INTO jang (
            mobile_id, mobile_name, image_url, rating, price, more_information,
            status, delivery, quickview, brand, model, color, screen, processor, ram
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        `;
        const values = [
          item.mobileId, item.mobileName, item.image, item.rating, item.price,
          item.moreInformation, item.status, item.delivery, item.quickview,
          item.brand, item.model, item.color, item.screen, item.processor, item.ram
        ];
  
        await client.query(query, values);
      }
  
      client.release();
    } catch (error) {
      console.error('Error inserting data into Neon:', error);
      throw error;
    }
  };

app.get('/', (req, res)=> res.send(`Welcome to backend (to transfer data form #Contentful to #Neon)`))
app.use('/transfer', routes);

app.listen(port, ()=> console.log(`Server is up and running at http://localhost:${port}
    `));
