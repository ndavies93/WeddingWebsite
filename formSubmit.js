(() => {
    'use strict'
    const xmlhttp = new XMLHttpRequest();
    // const theUrl = "https://whynot-get-married-backend.herokuapp.com/form";
    const theUrl = "http://localhost:8081/form";
    xmlhttp.open("POST", theUrl, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    document.getElementById('rsvp-form').onsubmit = (event)=>{
        event.preventDefault();
        const formValues = Object.entries(event.target).map((pair) =>{
            const {type, name, value, checked} = pair[1];
            const formName = type === 'radio' || type === 'checkbox' ? value : name;
            const formValue = type === 'radio' || type === 'checkbox'? checked : value;
            return {[formName]: formValue}
        })
        xmlhttp.onreadystatechange = function() { // Call a function when the state changes.
            console.log(formValues)
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {

            } else {
                console.log('error',this.status, this.statusText)
            }
        }
        try{
            xmlhttp.send(JSON.stringify(formValues));
        }
        catch (e) {
            console.log(e)
        }
    }
})()
