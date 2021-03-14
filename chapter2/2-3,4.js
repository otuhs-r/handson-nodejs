async function asyncSum(promiseArray) {
  let sum = 0
  // allSettled ver.
  //
  // const array = await Promise.allSettled(promiseArray)
  // for (const elem of array) {
  //   if (elem.status === 'fulfilled') {
  //     sum += elem.value
  //   }
  // }

  const array = await Promise.all(promiseArray.map(e => e.catch(()=>0)))
  for (const elem of array) {
    sum += elem
  }

  return sum
}

asyncSum(
  [1, 2, 3, 4].map(e => e % 2 === 0
    ? Promise.resolve(e)
    : Promise.reject(new Error('error'))
  )
).then(console.log)
