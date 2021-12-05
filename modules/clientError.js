const internalServerError = response => {
  response.writeHead(500, { 'Content-Type': 'text/html'});
  response.write('<h1 style="color: red">500: Internal server Error!</h1>');
  response.end();
};

const pageNotFound = response => {
  response.writeHead(404, { 'Content-Type': 'text/html'});
  response.write('<h1 style="color: red">404: Page not Found!</h1>');
  response.end();
};

export { internalServerError, pageNotFound };