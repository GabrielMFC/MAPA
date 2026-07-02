const navButtonsHtmlElements = document.getElementsByTagName("button");
const navButtonsArray = [];
const pageContent = document.getElementsByTagName("iframe")[0];
for (i=0; i < navButtonsHtmlElements.length; i++){
    navButtonsArray.push(navButtonsHtmlElements[i]);
}

navButtonsArray.forEach(button => {
    button.addEventListener("click", (event) => {
        pageContent.src = `src/pages/${button.id}.html`
        console.log(pageContent.src);
    })
})