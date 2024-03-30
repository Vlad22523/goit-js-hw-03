let formatMessage = (message, maxLength) => {
  if (message.length > maxLength) {
    message = message.slice(0, maxLength);
    message += '...';
  }
  return message;
};

console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15));
