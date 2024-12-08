let name = "Vlad"
const birthYear = 2007
function greeting(name) {
    console.log(`hello, ${name}`)
}

//////////////////////////////////////////

function range(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i)
    }
    return result
  }

function rangeOdd(start, end) {
  const result = [];
  let i = start
  if(i % 2 === 0) i++ //if we want to use numbers other than 15 30
  for (; i <= end; i += 2) {
      result.push(i)
  }
  return result
}

///////////////////////////////////////////


function average(a, b) {
  return (a + b) / 2
}

function square(x) {
  return x * x
}

function cube(x) {
  return x * x * x
}

function calculate() {
  const results = []

  for (let i = 0; i < 10; i++) {
      const sq = square(i)
      const cu = cube(i)
      const avg = average(sq, cu)
      results.push(avg)
  }

  return results
}

const result = calculate()

/////////////////////////////////////////////

function fn() {
  const obj1 = { name: 'whoever1' }
  
  let obj2 = { name: 'whoever2' }

  obj1.name = 'whoever3'
  obj2.name = 'whoever4'

  console.log('obj1:', obj1)
  console.log('obj2:', obj2)

  const obj3 = { name: 'whoever5' }
  // obj1 = obj3  - непрацюючий: не можемо змінити посилання у const
  obj2 = obj3

  // console.log('obj1:', obj1)
  console.log('obj2:', obj2)

}
fn()

function createUser(name, city) {
  return {
    name: name,
    city: city
  };
}

console.log(createUser('me', 'kyiv'))

////////////////////////////////////////////////////////

const phoneBook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Caesar', phone: '+3803756783' },
  { name: 'Aggfts', phone: '+3804625364' },
  { name: 'Nhjh', phone: '+38044589347' }
];

function findPhoneByName1(name) {
  for (let i = 0; i < phoneBook.length; i++) {
    if (phoneBook[i].name === name) {
      return phoneBook[i].phone
    }
  }
  return 'not found'
}

console.log(findPhoneByName1('Caesar'))
console.log(findPhoneByName1('y'))

///////

const phoneBookHash = {
  'Marcus Aurelius': '+380445554433',
  'Caesar': '+3803756783',
  'Aggfts': '+3804625364',
  'Nhjh': '+38044589347'
};

function findPhoneByName(name) {
  if (phoneBookHash[name]) {
    return phoneBookHash[name];
  }
  return 'Телефон не знайдено';
}

console.log(findPhoneByName('Caesar'))
console.log(findPhoneByName('y'))

