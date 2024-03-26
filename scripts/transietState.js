// Set up the transient state data structure and provide initial valuess
const transientState = {
        "ownsBlueJeans": false,
        "socioLocationId": 0
}


// Functions to modify each property of transient state
export const setOwnsJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState)
}


// Function to convert transient state to permanent state
export const setSocioLocationID = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}

// Function to covert to perm state0
export const saveSubmission = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const respose = await fetch("http://localhost:8088/submissions", postOptions)

    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent)
}