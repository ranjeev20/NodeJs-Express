const _ = require('lodash');
const items =[2,3,[9,0],4];
const newItems = _.flattenDeep(items);
console.log(newItems);