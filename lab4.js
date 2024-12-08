function sum1(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
}

function sum2(...args) {
    let sum = 0;
    for (const num of args) {
      sum += num;
    }
}

function sum3(...args) {
    let sum = 0;
    let i = 0;
    while (i < args.length) {
      sum += args[i];
      i++;
    }
}

function sum4(...args) {
    let sum = 0;
    let i = 0;
    do {
      sum += args[i];
      i++;
    } while (i < args.length);
}

function sum5(...args) {
    return args.reduce((acc, num) => acc + num, 0);
}

//////////////////////////////////////////////////

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function max(matrix) {
    let max = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j] > max) {
          max = matrix[i][j]
        }
      }
    }
    return max;
}
const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
console.log(max(matrix))
console.log(m)

///////////////////////////////////////////////

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
  };

function ages(persons) {
    let result = {}
    for (const person in persons) {
        const age = persons[person].died - persons[person].born
        result[person] = age
    }
    return result
}
console.log(ages(persons));

