import { parse } from 'url';
import { productsData, homeTemplate, cardTemplate, productTemplate } from './readFiles.js';
import { templateConversion } from './templateConversion.js';
import { pageNotFound, internalServerError } from './clientError.js';


const products = productsData ? JSON.parse(productsData) : [];

const renderHomePage = (request, response) => {
  if (!! homeTemplate) {
    let cards = '';

    for (const product of products) {
      cards += templateConversion(cardTemplate, product);
    }

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(templateConversion(homeTemplate, cards));
    response.end();
  } else internalServerError(response);
};

const renderProductPage = (request, response) => {
  const { query } = parse(request.url, true);

  if (!products.find(product => product.id === Number(query.id)))
    pageNotFound(response);
  else if (!!productTemplate) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(templateConversion(productTemplate, products[query.id]));
    response.end();
  } else internalServerError(response);
};


export { renderHomePage, renderProductPage };