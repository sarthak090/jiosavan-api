const fetchData = require("node-fetch");
/**
 *
 * @param {string} url url to request
 * @returns {Promise} returns promise containing the required data
 */
const request = async (url) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetchData(url);
      const data = await response.json();

      // if (data && data.title == null) {
      //   return reject({
      //     status: 404,
      //     msg: `No data found please check`,
      //   });
      // }
      if (data.length > 0 || typeof data == "object") {
        resolve(data);
      } else {
        reject({
          status: 404,
          msg: `No data found please check`,
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = request;
