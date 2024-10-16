const array = [true, 'hello', 5, 12, -200, false, false, 'word'];
const hash1 =  { number: 0, string: 0, boolean: 0 };
for (item of array){
    type = typeof item;
    ++hash1[type];
}

console.log(hash1);

//////////////////////

const hash2 = {};
for(item of array){
    type = typeof item;
    if(hash2[type]){
        ++hash2[type]
    }
    else{
        hash2[type] = 1
    }
}

console.log(hash2)