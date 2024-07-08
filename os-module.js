const os = require('os')

// info about current user
const user = os.userInfo()

// method that returns sys uptime in seconds
console.log(os.uptime() / 3600);

// system info

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);