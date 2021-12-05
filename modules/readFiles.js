import { readFile } from 'fs/promises';
import { dirname, join } from 'path';


// __dirname, __filename ESModules
const __filename = new URL(import.meta.url).pathname;
const __dirname = dirname(__filename);

const productsData = await readFile(
  join(__dirname, '../public/jsons/products.json'),
  'utf-8'
).catch(err => console.log(`Error (read-product-json): ${err.message}`));

const productTemplate = await readFile(
  join(__dirname, '../views/product-page.html'),
  'utf-8'
).catch(err => console.log(`Error (read-product-page): ${err.message}`));

const homeTemplate = await readFile(
  join(__dirname, '../views/home-page.html'),
  'utf-8',
).catch(err => console.log(`Error (read-home-page): ${err.message}`));

const cardTemplate = await readFile(
  join(__dirname, '../views/card.html'),
  'utf-8'
).catch(err => console.log(`Error (read-card-page): ${err.message}`));


export { productsData, productTemplate, homeTemplate, cardTemplate };