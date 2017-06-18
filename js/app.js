//nie działa button nextPicture od razu, tzn trzeba najpierw użyć buttona "prevPicture", a później dopiero "nextPicture" :()
//nie mogę wypisać ID aktualnego zdjęcia
document.addEventListener("DOMContentLoaded", function() {
// invisible


var infinitive = document.querySelectorAll(".infinitive")
var toHide = document.querySelectorAll(".layer-7")

for (var i = 0; i < infinitive.length; i++) {

infinitive[i].addEventListener("mouseover", function() {
  var toHide = this.firstElementChild;
  if (toHide) {
    toHide.style.display = "none";
  }
});
infinitive[i].addEventListener("mouseout", function() {
  var toHide = this.firstElementChild;
  if (toHide) {
    toHide.style.display = "block";
  }
});
}




//menu
  var lis = document.querySelectorAll("nav>ul>li");

  var lislis = document.querySelectorAll("nav>ul>li>ul");
    lislis.forEach(function(e) {
    e.style.display = "none";
  });

  for (var i = 0; i < lis.length; i++) {

    lis[i].addEventListener("mouseover", function() {
      var lisLis = this.firstElementChild;
      if (lisLis) {
        lisLis.style.display = "block";
      }
    });
    lis[i].addEventListener("mouseout", function() {
      var lisLis = this.firstElementChild;
      if (lisLis) {
        lisLis.style.display = "none";
      }
    });
  }

//slider
var nextPicture = document.getElementById("nextPicture");
var prevPicture= document.getElementById("prevPicture");
var lis = document.querySelectorAll(".slider li");
console.log(lis);
var current = 0;

prevPicture.addEventListener("click", function () {
console.log('click nextPicture');
lis[current].classList.remove('visible');
current = current - 1;
if (current <= 0) {
  current = 0;
  lis[current].classList.add('visible');
} else {
  lis[current].classList.add("visible");
}
});

lis[current].classList.add("visible");

nextPicture.addEventListener("click", function () {
  console.log("click prev");
  lis[current].classList.remove("visible");

  current +=1;
  if (current >= lis.length) {
    current = lis.length - 1;
    lis[current].classList.add('visible');
  } else {
    lis[current].classList.add('visible')
  }
});

});
