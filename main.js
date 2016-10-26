function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date());
    }, 1000 * seconds);
  });
}

console.log('Console log before calling wait:', new Date());

(async ()=> {
  const foo = await wait(3);
  console.log('Console log after three seconds:', foo);
})();

console.log('Console log after calling wait:', new Date());
