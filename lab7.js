const array = [1, 2, 3, 4, 5, 6, 7]
const arr = [1, 5, 5, 5, 2, 4, 7, 7]

function removeElement(array, item) {
    const index = array.indexOf(item)
    
    if (index !== -1) {
        array.splice(index, 1)
    }
}

function removeElements(array, ...items) {
    for(const item of items) {
        const index = array.indexOf(item)
        if (index !== -1) {
            array.splice(index, 1)
        }
    }
}

function removeDuplicates(array) {
    let newArray = []
    for (const item of array) {
        if (!newArray.includes(item)) {
            newArray.push(item)
        }
    }
    return newArray
}
console.log(removeDuplicates(arr))

function difference(array1, array2) {
    let newArray = []
    for(const item of array1){
        if(!array2.includes(item)){
            newArray.push(item)
        }
    }
    return newArray
}
console.log(difference(array, arr))
