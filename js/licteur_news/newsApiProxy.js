// newsApiProxy.js
const axios = require('axios');

exports.handler = async (event, context) => {
  try {
    if (event.httpMethod !== 'GET') {
      return {
        statusCode: 405,
        body: 'Method Not Allowed',
      };
    }

    // Récupérez les paramètres de la requête (par exemple, pays et catégorie)
    const { country, category } = event.queryStringParameters;
    const apiKey = 'VOTRE_CLE_API_NEWSAPI';
    const apiUrl = `https://newsapi.org/v2/top-headlines`;

    // Faites la requête vers l'API NewsAPI en utilisant Axios
    const response = await axios.get(apiUrl, {
      params: { country, category, apiKey },
    });

    // Renvoyez les données récupérées depuis l'API NewsAPI à l'application front-end
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    // Gérez les erreurs
    return {
      statusCode: error.response ? error.response.status : 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
