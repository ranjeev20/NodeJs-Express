const os = require("os");

// info about current user
const user = os.userInfo()
console.log(user);

// method returns system uptime availabilty or working time
console.log(`the system uptime is ${os.uptime()}`);

const currentOs= {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);