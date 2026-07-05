const navButtonsHtmlElements = document.getElementsByTagName("button");
const navButtonsArray = [];

const contentContainer = document.getElementById("content");

const windowButtonsHtmlElements = document.getElementsByClassName("win-btn")
const windowButtonsArray = []


for (i=0; i < navButtonsHtmlElements.length; i++){
    navButtonsArray.push(navButtonsHtmlElements[i]);
}

for (i=0; i < windowButtonsHtmlElements.length; i++){
    windowButtonsArray.push(windowButtonsHtmlElements[i]);
}

async function loadPage(pageName) {
    try {
        const response = await fetch(`src/pages/${pageName}.html`, {
            method: "GET",
            headers: {
                "Accept": "text/html"
            }
        });

        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }

        const html = await response.text();
        contentContainer.innerHTML = html;

    } catch (error) {
        console.error("Falha ao carregar a página:", error);
    }
}

contentContainer.innerHTML = loadPage("aboutMe")

navButtonsArray.forEach(button => {
    button.addEventListener("click", async (event) => {
        await loadPage(button.id);
    })
})

windowButtonsArray.forEach(button => {
    button.addEventListener("click", (event) => {
        event.preventDefault()
        alert("Eu acho que você não vai querer fazer isso!")
    })
})