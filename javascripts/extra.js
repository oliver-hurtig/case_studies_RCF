
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