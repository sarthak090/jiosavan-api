// const songsMethods: object = require('./songs');
// let methods = {
//   ...searchMethods,
//   ...songsMethods,
// };
import songsMethods from './songs';
import searchMethods from './search';

const methods = {
  ...songsMethods,
  ...searchMethods,
};
export default methods;
