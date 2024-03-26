import { saveSubmission } from "./transietState.js"


const handleSurveySubmission = (clickEvent) => {
    if (clickEvent.target.id === "submitButton") {
        saveSubmission()
    }
}

export const saveSubmissionButton = () => {
    document.addEventListener("click", handleSurveySubmission)
    return "<button id='submitButton'>Submit</button>"
}