(() => {
  //~Creating and alias (custom type)
  type UserId = string | number ;
  let userId: UserId;

  function greeting(userId: UserId) {
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toLocaleLowerCase()}`);
    } else {
      console.log("I'm a number");
    }
  }

  greeting('NICOLAS');
  greeting(24);

  //~Literal types
  type Siezes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Siezes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

})();
