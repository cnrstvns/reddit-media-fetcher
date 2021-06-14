const axios = require('axios').default;

module.exports.get = async function get(type, resource, limit) {
  return axios.get(`https://reddit.com/${type}/${resource}.json?limit=${limit}`)
    .then((response) => response.data)
    .catch(() => null);
};
