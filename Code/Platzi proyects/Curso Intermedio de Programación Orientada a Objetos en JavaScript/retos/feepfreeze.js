const juan = {
    name: "Juanito",
    approvedCourses: ["Curso 1","Curso 2"],
    caracteristicas: {
      age: 18,
      colorCabello: 'Negro',
      gustos: {
        musica: ['rock', 'punk', 'ska'],
        peliculas: ['drama', 'horros', 'comedia'],
      },
    },
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
  };

  function deepFreeze(obj) {
    if ( typeof(obj)!=="object") {
        return;
    }
    Object.freeze(obj);

    for(let key in obj) {
        deepFreeze(obj[key])
    }
  }

deepFreeze(juan);