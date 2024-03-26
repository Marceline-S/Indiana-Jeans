import { setOwnsJeans } from "./transietState.js"

/**Provide UI controls for yes/no for owns bluejeans
 * Strategy is to provide component function procuding HTML radio buttons yes/no
 */

 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownsJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsJeans(convertedToBoolean)
    }
}

export const ownJeansChoices = () => {

    document.addEventListener("change", handleOwnershipChange)

    let html = "<h2>Do you own jeans?</h2>"
    html += "<input type='radio' name='ownsJeans' value='true'/> Yes, I own blue jeans"
    html += "<input type='radio' name='ownsJeans' value='false'/> No, I do not own blue jeans"
    return html
}