const buttontest = document.getElementById("habilities")

async function postFeedback() {
    const response = await fetch(
        "https://zjhbjvjwnpopegulxupe.supabase.co/rest/v1/feedbacks",
        {
            method: "POST",
            headers: {
            "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqaGJqdmp3bnBvcGVndWx4dXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMjcyNTEsImV4cCI6MjA5ODcwMzI1MX0.A0n9kg9SRyZtyZjDLlc4wHsiUq922lqmpSxhRko8Dr8",
            
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqaGJqdmp3bnBvcGVndWx4dXBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMxMjcyNTEsImV4cCI6MjA5ODcwMzI1MX0.A0n9kg9SRyZtyZjDLlc4wHsiUq922lqmpSxhRko8Dr8",
            "Content-Type": "application/json",
            "Prefer": "return=representation"
            },
            body: JSON.stringify({
            name: "Gabrielm",
            feedback: "Meu feedback2"
            })
        }
    );
    return response.json()
}

buttontest.addEventListener("click", async () => {
    const data = await postFeedback()

    console.log(data);
})