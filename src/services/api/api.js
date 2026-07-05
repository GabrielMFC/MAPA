const nameInput = document.getElementById("nameInput")
const feedbackTextarea = document.getElementById("feedbackTextarea")
const submitFeedbackButton = document.getElementById("submitFeedbackButton")

async function postFeedback(name, feedback) {
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
            name: name,
            feedback: feedback
            })
        }
    );
    return response.json()
}

document.addEventListener("click", async (event) => {
    if (event.target.id !== "submitFeedbackButton") return;

    try {
        const nameInput = document.getElementById("nameInput");
        const feedbackTextarea = document.getElementById("feedbackTextarea");

        const data = await postFeedback(
            nameInput.value,
            feedbackTextarea.value
        );
        alert("Feedback enviado!")
    } catch (error) {
        alert("O envio falhou, tente novamente mais tarde.")
        console.log(error);
    }
});