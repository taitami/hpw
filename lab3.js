function random(min, max) {
    if (max === undefined) {
        max = min
        min = 0
    }
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/////////////////////////////////////

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
function generateKey(length, characters) {
let key = ''
for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * characters.length)
    key += characters[index]
}
return key
}

const key = generateKey(16, characters)
console.log(key)

////////////////////////////////////

function ipToNum(ip = '127.0.0.1') {
    return ip.split('.')
      .map(Number)
      .reduce((acc, byte, index) => {
        return acc + (byte << (8 * (3 - index)))
      }, 0);
  }

 console.log(ipToNum('192.168.1.10'))

 ///////////////////////////////////////

const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
}

function introspectObject(iface) {
    return Object.keys(iface)
      .filter(key => typeof iface[key] === 'function')
      .map(key => [key, iface[key].length])
  }

console.log(introspectObject(iface))

  