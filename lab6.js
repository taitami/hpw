function pipe(...fns) {
    if (!fns.every(fn => typeof fn === 'function')) {
      throw new Error('arguments must be funcs')
    }

    return (x) => fns.reduce((acc, fn) => fn(acc), x)
}

const inc = x => ++x
const twice = x => x * 2
const cube = x => x ** 3

const f = pipe(inc, twice, cube)
const result = f(5)

console.log(result)

//////////////////////////////////////////////////

function compose(...fns) {
  let errorHandler

  function getValue(x) {
      if (fns.length === 0) {
          return x
      }
      try {
          for (let i = fns.length - 1; i >= 0; i--) {
              if (typeof fns[i] === "function") {
                  x = fns[i](x)
              }
              else {
                  throw Error(`${fns[i]} - is not a function`);
              }
          } 
          return x
      }
      catch (error) {
          if (errorHandler) {
              errorHandler(error)
          }
          return undefined
      }
  }

  getValue.on = (name, handler) => {
      if (name === 'error') {
          errorHandler = handler
      }
  }

  return getValue
}

const ff = compose(inc, twice, cube);
ff.on('error', e => console.log(e));
const x = ff(5);
console.log(x)
