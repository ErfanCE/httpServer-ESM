const templateConversion = (template, converter) => {
  template = template.replace(/{% cards %}/g, converter)
    .replace(/{% productName %}/g, converter.productName)
    .replace(/{% image %}/g, converter.image)
    .replace(/{% from %}/g, converter.from)
    .replace(/{% quantity %}/g, converter.quantity)
    .replace(/{% nutrients %}/g, converter.nutrients)
    .replace(/{% description %}/g, converter.description)
    .replace(/{% price %}/g, converter.price)
    .replace(/{% id %}/g, converter.id);

  // converter.id check converter is product
  if (converter.id && !converter.organic) template = template.replace(/{% organic %}/g, 'not-organic');

  return template;
};


export { templateConversion };