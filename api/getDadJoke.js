const dadJokes = require('@mikemcbride/dad-jokes');

module.exports = async function(context, req) {
  context.res.body = dadJokes.random();
};