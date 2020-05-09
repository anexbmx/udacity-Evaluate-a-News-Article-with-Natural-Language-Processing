async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    let responseMsg = document.getElementById('response-msg');
  

    console.log("::: Form Submitted :::")
    try {
        if(!Client.checkForUrl(formText)) {
            throw new Error("URL must be a valid URL.");
        }

        const responseData = await fetch('http://localhost:8080/data', {
            method: "POST",
            credentials: "same-origin",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: formText })
        });

        const responseAsJson = await responseData.json();
        if(responseData.status == 200) {
            console.log('res', responseData);
            document.getElementById("list-data").classList.remove("hide");
            document.getElementById('polarity').innerHTML = responseAsJson.polarity
            document.getElementById('subjectivity').innerHTML = responseAsJson.subjectivity
            document.getElementById('text').innerHTML = responseAsJson.text
            document.getElementById('polarity_confidence').innerHTML = responseAsJson.polarity_confidence
            document.getElementById('subjectivity_confidence').innerHTML = responseAsJson.subjectivity_confidence
            setMessage(responseMsg, "success");

        } else {
            throw new Error(responseAsJson.message);
        }
            
    } catch (error) {

        setMessage(responseMsg, error.toString(), false);
    }
}

function setMessage(element, message, valid = true) {
    element.textContent = message;
    if (!valid) {
        element.classList.add('error');
        element.classList.remove('valid');
    } else {
        element.classList.add('valid');
        element.classList.remove('error');
    }
}
export { handleSubmit }
