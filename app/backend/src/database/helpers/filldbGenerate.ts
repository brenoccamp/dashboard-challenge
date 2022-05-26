const statesBrazil = ['MT', 'MG', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT',
  'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

const fakeCustomers = [{ name: 'Customer 1', state: 'MT' }];
const fakeSales = [{
  sellerId: 1,
  productServiceId: 1,
  customerId: 1,
  storeId: 1,
  soldAmount: 2,
}];

const generateCustomers = (numberOfCustomers: number): void => {
  while (fakeCustomers.length < numberOfCustomers) {
    const randomNumber = Math.floor(Math.random() * (28 - 0 + 1)) + 0;
    const newCustomer = {
      name: `Customer ${fakeCustomers.length}`,
      state: statesBrazil[randomNumber],
    };

    fakeCustomers.push(newCustomer);
  }
  // console.log(JSON.stringify(fakeCustomers, null, '\t'));
};

const generateSales = (numberOfSales: number): void => {
  while (fakeSales.length < numberOfSales) {
    const randomSeller = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    const randomProductService = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    const randomCustomer = Math.floor(Math.random() * (2000 - 1 + 1)) + 1;
    const randomStore = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    const randomSoldAmount = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    const newSale = {
      sellerId: randomSeller,
      productServiceId: randomProductService,
      customerId: randomCustomer,
      storeId: randomStore,
      soldAmount: randomSoldAmount,
    };

    fakeSales.push(newSale);
  }
  // console.log(JSON.stringify(fakeSales, null, '\t'));
};

export {
  generateCustomers,
  generateSales,
};
