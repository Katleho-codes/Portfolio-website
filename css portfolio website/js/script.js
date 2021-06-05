// menu
$(document).ready(function(){
    $('.toggle').click(function(){
        $('.menu').toggleClass('active');
    });
});
// work section
     const filterButtons = document.querySelector("#filter-btns").children;
        const items = document.querySelector(".portfolio-gallery").children;

        for (let i = 0; i < filterButtons.length; i++) {
            filterButtons[i].addEventListener("click", function () {
                for (let j = 0; j < filterButtons.length; j++) {
                    filterButtons[j].classList.remove("active")
                }
                this.classList.add("active");
                const target = this.getAttribute("data-target")

                for (let k = 0; k < items.length; k++) {
                    items[k].style.display = "none";
                    if (target == items[k].getAttribute("data-id")) {
                        items[k].style.display = "block";
                    }
                    if (target == "all") {
                        items[k].style.display = "block";
                    }
                }

            })
        }

//to top button - About section
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}