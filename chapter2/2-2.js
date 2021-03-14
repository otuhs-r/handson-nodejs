function parseJsonAsync(json) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      try {
        resolve(JSON.parse(json))
      } catch(err) {
        reject(err)
      }
    }, 1000)
  )
}

const cache = {}
function parseJsonAsyncWithCache(json) {
  cached = cache[json]
  if (cached) return cached

  const result = parseJsonAsync(json)
  cache[json] = result

  return result
}

parseJsonAsyncWithCache('{"foo": 1}')
  .then(result => console.log('1回目: ', result))
  .then(() => {
    const promise = parseJsonAsyncWithCache('{"foo": 1}')
    console.log('2回目の呼び出し')
    return promise
  })
  .then(result => console.log('2回目: ', result))
console.log('1回目の呼び出し')

// parseJsonAsync('{"foo": 1}')
//   .then(result => console.log('1: ', result))
//   .then(() => {
//     const promise = parseJsonAsync('{"foo": 1}')
//     console.log('2 call')
//     return promise
//   })
//   .then(result => console.log('2: ', result))
// console.log('1 call')
