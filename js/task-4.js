// Додано оптимальне рішення для користувача, для того щоб можна було вводити країну в будь-якому регістрі

let getShippingCost = country => {
  country = country.toLowerCase();
  switch (country) {
    case 'australia':
      return `Shipping to ${
        country[0].toUpperCase() + country.slice(1)
      } will cost 170 credits`;
    case 'china':
      return `Shipping to ${
        country[0].toUpperCase() + country.slice(1)
      } will cost 100 credits`;
    case 'chile':
      return `Shipping to ${
        country[0].toUpperCase() + country.slice(1)
      } will cost 250 credits`;
    case 'jamaica':
      return `Shipping to ${
        country[0].toUpperCase() + country.slice(1)
      } will cost 120 credits`;
    default:
      return 'Sorry, there is no delivery to your country';
  }
};

console.log(getShippingCost('Chile'));
