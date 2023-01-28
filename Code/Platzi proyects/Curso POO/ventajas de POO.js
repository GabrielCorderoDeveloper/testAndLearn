/* En vez de crear muchisimos objetos es major hacer clases y crear instancias de 
estas clases. asi es mas facil, rapido y eficiente. */

//Learning paths
class LearningPath {
    constructor({
        id,
        name,
        courses = [],
    }) {
        this.id = id;
        this.name = name;
        this.courses = courses;
    }

    addCourse(course) {
        this.courses.push(course);
    }
}

const escuelaWeb = new LearningPath({
    id: 456,
    name: "Escuela de desarrollo web",
    courses: ["Html", "Css", "Js"],
});

const phytonMaster = new LearningPath({
    id: 456,
    name: "Phyton master(Avanzado)",
    courses: ["Phyton 1", "Objetos en Phyton", "Syntaxis en Phyton"],
});

//students
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;

        this.socialMedia = {
            // twiter: twitter     es lo mismo que solo poner twitter.
            twitter,
            instagram,
            facebook,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

const juan2 = new Student({
    name: "JuanDC",
    username: "JuanDCA23",
    email: "juanitoa@gmail.com",
    twitter: "fjandc",
    learningPaths: escuelaWeb,
});

const jake2 = new Student({
    name: "Jake Andrew",
    username: "Jake256",
    email: "jakeandrew@gmail.com",
    twitter: "jaker22027",
    learningPaths: [phytonMaster, escuelaWeb]
});






//Codigo de referencia de un estudiante de platzi
/*

class Course {
  constructor({
    id,
    name,
    teacher,
    lessons = [],
  }) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
    this.lessons = lessons;
  }
}

class LearningPath {
  constructor({
    id,
    name,
    courses = [],
  }) {
    this.id = id;
    this.name = name;
    this.courses = courses;
  }

  addCourse(course) {
    this.courses.push(course);
  }

  replaceCourse(oldCourse, newCourse) {
    const oldCourseIndex = this.courses.findIndex(course => course.id === oldCourse.id);

    if (oldCourseIndex !== -1) {
      this.courses[oldCourseIndex] = newCourse;
    }

    return this.courses;
  }

  deleteCourse(oldCourse) {
    const courseIndex = this.courses.findIndex(course => course.id === oldCourse.id);
    this.courses.splice(courseIndex, 1);

    return this.courses;
  }
}

const reactNativeLearningPath = new LearningPath({
  id: 'react-native',
  name: 'Desarrollo de Apps con React Native',
  courses: [
    new Course({ 
      id: 'basico-javascript', 
      name: 'Curso Básico de JavaScript', 
      teacher: 'Diego De Granda',
    }),
    new Course({
      id: 'ecmascript-6',
      name: 'Curso de ECMAScript 6+',
      teacher: 'Orlando Naipes',
    }),
    // etc...
  ]
})

*/