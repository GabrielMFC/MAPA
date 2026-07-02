const navButtonsHtmlElements = document.getElementsByTagName("button");
const navButtonsArray = [];
const pageContent = document.getElementsByTagName("iframe")[0];

for (i=0; i < navButtonsHtmlElements.length; i++){
    navButtonsArray.push(navButtonsHtmlElements[i]);
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
        document.querySelector("main").innerHTML = html;

    } catch (error) {
        console.error("Falha ao carregar a página:", error);
    }
}

navButtonsArray.forEach(button => {
    button.addEventListener("click", async (event) => {
        pageContent.src = await loadPage(button.id);
    })
})
