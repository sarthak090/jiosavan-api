import songsMethods from './songs';
import searchMethods from './search';

const methods = {
  ...songsMethods,
  ...searchMethods,
};
export default methods;
