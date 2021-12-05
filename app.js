import { createServer } from 'http';
import { parse } from 'url';
import { renderHomePage, renderProductPage } from './modules/renderPages.js';
import { pageNotFound } from './modules/clientError.js';


createServer((request, response) => {
  const { pathname } = parse(request.url, true);

  if (pathname === '/' || pathname === '/home' && request.method === 'GET')
    renderHomePage(request, response);
  else if (pathname === '/product' && request.method === 'GET')
    renderProductPage(request, response);
  else 
    pageNotFound(response);

}).listen(8000, '127.0.0.1', () => console.log('Listening on :8000 ...'));