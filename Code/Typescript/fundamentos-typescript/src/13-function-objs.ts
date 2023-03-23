(() => {
  const login = (data: {email: string, password: number}) => {
    console.log(data.email, data.password);
  }
//~Using certain types in a function
//^Hover over login to see the TS magic
  login({
    email: 'jake_drake@gmail.com',
    password: 2121212,
  });
})();


//? Void is a function that does not uses return
