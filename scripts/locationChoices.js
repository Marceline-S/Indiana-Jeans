import { setSocioLocationID } from "./transietState.js"



const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedINT = parseInt(changeEvent.target.value)
        setSocioLocationID(convertedINT)
    }
}


export const locationChoicesHTML = async () => {
    const jsonObject = await fetch("http://localhost:8088/socioLocations")
    const locationsObjectFromJson = await jsonObject.json()

    document.addEventListener("change", handleLocationChange)

    let choicesHTML = "<h2>What type of area do you live in?</h2>"
    for (const location of locationsObjectFromJson) {
        choicesHTML += `<input type='radio' name='location' value='${location.id}' /> ${location.label}`
    }

    return choicesHTML
}