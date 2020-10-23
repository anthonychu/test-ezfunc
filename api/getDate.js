module.exports = async function(context, req) {
  context.res.body = new Date().toISOString();
};