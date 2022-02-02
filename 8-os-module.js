const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);
//method returns the system uptime in seconds
console.log(`The system up time ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  realse: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
