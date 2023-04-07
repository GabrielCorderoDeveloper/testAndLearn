let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 1;

//^Using this outside of the validation will give eror
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

