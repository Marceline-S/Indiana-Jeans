export const SubmissionList = async () => {
    // Get the submissions from your API
    const submissionsJson = await fetch("http://localhost:8088/submissions")
    const submissionsArray = await submissionsJson.json()


    // Iterate the submissions and create some <section> representations
    let html = ""
    for (const submission of submissionsArray) {
        html += `<section class="submission">
            <div>Jeans? ${submission.ownsBlueJeans}</div>
            <div>Location? ${submission.socioLocationId}</div>
        </section>`
    }

    return html
    // Return the HTML string
}