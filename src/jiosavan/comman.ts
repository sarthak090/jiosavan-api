import endpoints from '../utils/endpoints';
import request from '../utils/request';
const getHomePage = async () => {
  try {
    const res = await request(endpoints.homePage);
    return res;
  } catch (err) {
    return err;
  }
};

export default { getHomePage };
