const { Configuration } = require('openai')
const { OpenAIApi } = require('openai')

const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

  
module.exports = openai ;