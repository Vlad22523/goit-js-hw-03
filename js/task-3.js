let checkForSpam = message => {
  message = message.toLowerCase();
  return message.includes('sale') || message.includes('spam') ? true : false;
};

console.log(checkForSpam('[SPAM] How to earn fast money?'));
