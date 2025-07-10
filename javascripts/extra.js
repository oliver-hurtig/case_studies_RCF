
function handleClickOnDetails() {
  // close all details
  if (this.open) {
    let detailsOpened = document.querySelectorAll("details[open]");

    for (const item of detailsOpened) {
        // keep open only details clicked
        if (this != item) {
        item.removeAttribute("open");
        }
    }
  }
}


document.addEventListener("DOMContentLoaded", function(){    
    /* Handle for details */
    const detailsElements = document.querySelectorAll("details");

    detailsElements.forEach(function (item) {
        item.addEventListener("toggle", handleClickOnDetails);
    });

});

function typesetMathJax() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    setTimeout(() => {
      window.MathJax.typesetPromise();
    }, 50); // Delay to ensure DOM is updated
  }
}

document.addEventListener("DOMContentLoaded", typesetMathJax);
document.addEventListener("navigation", typesetMathJax);
window.addEventListener("hashchange", typesetMathJax);

// Also handle anchor navigation on initial load
if (window.location.hash) {
  window.addEventListener("load", typesetMathJax);
}