function showSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

// Range //
const sliderEl = document.querySelector("#range1")

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;

  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
});

const sliderEl2 = document.querySelector("#range2")

sliderEl2.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;

  const progress = (tempSliderValue / sliderEl2.max) * 100;

  sliderEl2.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
})

const sliderEl3 = document.querySelector("#range3")

sliderEl3.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;

  const progress = (tempSliderValue / sliderEl3.max) * 100;

  sliderEl3.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
})

const sliderEl4 = document.querySelector("#range4")

sliderEl4.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;

  const progress = (tempSliderValue / sliderEl4.max) * 100;

  sliderEl4.style.background = `linear-gradient(to right, #f50 ${progress}%, #ccc ${progress}%)`;
})


// Range //

// Filter //
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// Filter //

// Scroll effect //
    function reveal() {
        let elems = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

        for (let i = 0; i < elems.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = elems[i].getBoundingClientRect().top;
            let elementVisible = 120;

            if (elementTop < windowHeight - elementVisible) {
                elems[i].classList.add("active");
            }
        }
    }

    window.addEventListener("scroll", reveal);
    reveal();
