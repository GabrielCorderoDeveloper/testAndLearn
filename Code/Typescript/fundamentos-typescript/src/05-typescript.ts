(() => {
  let isNew = true;

  const random = Math.random();

  console.log('random',random);
  isNew = random >= 0.5;

  console.log(isNew);
})();
