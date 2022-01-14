//you can spilit your code in files you minimize the complexity
//node uses CommonJS 
//Every file in node is a module
//Encapsulated code(only share minimum);

const names= require('./names');
const Welcome=require('./utils');
console.log(names);

const data=require('../6alternateexprots')
console.log(data);
require('../7mindgame');
Welcome('Proxmair');
Welcome(names.name1);
Welcome(names.name2);

