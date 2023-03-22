(() => {
  let dynamicVar: any; //*It means that could be anything.
  //^It is not the best practice so i should try to avoid it.

  const rta = (dynamicVar as string).toLocaleLowerCase
  //*Treat an any variable as a specific type

  const rta2 = (<string>dynamicVar).toLocaleLowerCase
  //*Treat an any variable as a specific type

})();
