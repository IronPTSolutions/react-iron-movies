
function getNumber(fastFail = false) {
  return new Promise((resolve, reject) => {
    const number = Math.random() * 10_000;
    setTimeout(() => {
      if (number > 9_000 || fastFail) reject(new Error('ERROOOOR!!!'))
      else resolve(number);
    }, number)
  })
}

async function main() {
  try {
    const [one, two, three] = await Promise.all([
      getNumber(false)
        .catch(() => console.log('error suprimido'))
        .then((result) => result ?? 1),
      getNumber(),
      getNumber()
    ]);
    console.log('Primeras 3 promesas terminadas');
    console.log('one', one);
    console.log('two', two);
    console.log('three', three);
    const number = await getNumber();
    console.log('Next promise', number)
  } catch(error) {
    console.error(error)
  } finally {
    console.log('Promesa terminada')
  }
}

main();


console.log('Hello world!');
console.log('Hello world!');