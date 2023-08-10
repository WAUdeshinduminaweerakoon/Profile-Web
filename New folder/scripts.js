window.onscroll = function() {myFunction()};

var header = document.getElementById("Mynav-bar-link");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

const accordionItemHeaders = document.querySelectorAll(".section-three-eduAndWork-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    // Close all open accordion items
    accordionItemHeaders.forEach(item => {
      if (item !== accordionItemHeader) {
        item.classList.remove("active");
        item.nextElementSibling.style.maxHeight = 0;
      }
    });

    // Toggle the clicked accordion item
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
