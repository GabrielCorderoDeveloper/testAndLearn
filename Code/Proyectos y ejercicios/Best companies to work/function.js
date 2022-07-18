//META
var slides = document.querySelectorAll('.slide');
    var btns = document.querySelectorAll('.btn');
    let currentSlide = 1;
    // Javascript for image slider manual navigation
    var manualNav = function(manual){
      slides.forEach((slide) => {
       slide.classList.remove('active');

        btns.forEach((btn) => {
          btn.classList.remove('active');
        });
      });
      slides[manual].classList.add('active');
      btns[manual].classList.add('active');
    }

    btns.forEach((btn, i) => {
      btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat = function(activeClass){
      let active = document.getElementsByClassName('active');
      let i = 1;

      var repeater = () => {
        setTimeout(function(){
          [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
          }); 

        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
          i = 0;
        }
        if(i >= slides.length){
          return;
        }
        repeater();
      }, 10000);
      }
      repeater();
    }
    repeat();








    //GOOGLE
    var slides2 = document.querySelectorAll('.slide2');
    var btns2 = document.querySelectorAll('.btn2');
    let currentSlide2 = 1;
    // Javascript for image slider manual navigation
    var manualNav2 = function(manual2){
      slides2.forEach((slide2) => {
       slide2.classList.remove('active2');

        btns2.forEach((btn2) => {
          btn2.classList.remove('active2');
        });
      });
      slides2[manual2].classList.add('active2');
      btns2[manual2].classList.add('active2');
    }

    btns2.forEach((btn2, g) => {
      btn2.addEventListener("click", () => {
        manualNav2(g);
        currentSlide2 = g;
      });
    });

    // Javascript for image slider autoplay navigation
    var repeat2 = function(activeClass2){
      let active2 = document.getElementsByClassName('active2');
      let g = 1;

      var repeater2 = () => {
        setTimeout(function(){
          [...active2].forEach((activeSlide2) => {
            activeSlide2.classList.remove('active2');
          }); 

        slides2[g].classList.add('active2');
        btns2[g].classList.add('active2');
        g++;

        if(slides2.length == g){
          g = 0;
        }
        if(g >= slides2.length){
          return;
        }
        repeater2();
      }, 10000);
      }
      repeater2();
    }
    repeat2();



//MICROSOFT
var slides3 = document.querySelectorAll('.slide3');
var btns3 = document.querySelectorAll('.btn3');
let currentSlide3 = 1;
// Javascript for image slider manual navigation
var manualNav3 = function(manual3){
  slides3.forEach((slide3) => {
   slide3.classList.remove('active3');

    btns3.forEach((btn3) => {
      btn3.classList.remove('active3');
    });
  });
  slides3[manual3].classList.add('active3');
  btns3[manual3].classList.add('active3');
}

btns3.forEach((btn3, m) => {
  btn3.addEventListener("click", () => {
    manualNav3(m);
    currentSlide3 = m;
  });
});

// Javascript for image slider autoplay navigation
var repeat3 = function(activeClass3){
  let active3 = document.getElementsByClassName('active3');
  let m = 1;

  var repeater3 = () => {
    setTimeout(function(){
      [...active3].forEach((activeSlide3) => {
        activeSlide3.classList.remove('active3');
      }); 

    slides3[m].classList.add('active3');
    btns3[m].classList.add('active3');
    m++;

    if(slides3.length == m){
      m = 0;
    }
    if(m >= slides3.length){
      return;
    }
    repeater3();
  }, 10000);
  }
  repeater3();
}
repeat3();






//APPLE
var slides4 = document.querySelectorAll('.slide4');
var btns4 = document.querySelectorAll('.btn4');
let currentSlide4 = 1;
// Javascript for image slider manual navigation
var manualNav4 = function(manual4){
  slides4.forEach((slide4) => {
   slide4.classList.remove('active4');

    btns4.forEach((btn4) => {
      btn4.classList.remove('active4');
    });
  });
  slides4[manual4].classList.add('active4');
  btns4[manual4].classList.add('active4');
}

btns4.forEach((btn4, a) => {
  btn4.addEventListener("click", () => {
    manualNav4(a);
    currentSlide4 = a;
  });
});

// Javascript for image slider autoplay navigation
var repeat4 = function(activeClass4){
  let active4 = document.getElementsByClassName('active4');
  let a = 1;

  var repeater4 = () => {
    setTimeout(function(){
      [...active4].forEach((activeSlide4) => {
        activeSlide4.classList.remove('active4');
      }); 

    slides4[a].classList.add('active4');
    btns4[a].classList.add('active4');
    a++;

    if(slides4.length == a){
      a = 0;
    }
    if(a >= slides4.length){
      return;
    }
    repeater4();
  }, 10000);
  }
  repeater4();
}
repeat4();


//AMAZON
var slides5 = document.querySelectorAll('.slide5');
var btns5 = document.querySelectorAll('.btn5');
let currentSlide5 = 1;
// Javascript for image slider manual navigation
var manualNav5 = function(manual5){
  slides5.forEach((slide5) => {
   slide5.classList.remove('active5');

    btns5.forEach((btn5) => {
      btn5.classList.remove('active5');
    });
  });
  slides5[manual5].classList.add('active5');
  btns5[manual5].classList.add('active5');
}

btns5.forEach((btn5, am) => {
  btn5.addEventListener("click", () => {
    manualNav5(am);
    currentSlide2 = am;
  });
});

// Javascript for image slider autoplay navigation
var repeat5 = function(activeClass5){
  let active5 = document.getElementsByClassName('active5');
  let am = 1;

  var repeater5 = () => {
    setTimeout(function(){
      [...active5].forEach((activeSlide5) => {
        activeSlide5.classList.remove('active5');
      }); 

    slides5[am].classList.add('active5');
    btns5[am].classList.add('active5');
    am++;

    if(slides5.length == am){
      am = 0;
    }
    if(am >= slides5.length){
      return;
    }
    repeater5();
  }, 10000);
  }
  repeater5();
}
repeat5();