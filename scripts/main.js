import { SubmissionList } from "./displaySubmissions.js"
import { locationChoicesHTML } from "./locationChoices.js"
import { ownJeansChoices } from "./ownsJeans.js"
import { saveSubmissionButton } from "./saveSubmissions.js"

const container = document.querySelector("#maincontain")

const render = async () => {
    const jeanOwnshipHTML = ownJeansChoices()
    const locationsHTML = await locationChoicesHTML()
    const saveButtonHTML = await saveSubmissionButton();
    const displaySubmissionBox = await SubmissionList()

    container.innerHTML = `${jeanOwnshipHTML}
    ${locationsHTML}
    ${saveButtonHTML}
    ${displaySubmissionBox}

    `
}

document.addEventListener("newSubmissionCreated", render)

render()

