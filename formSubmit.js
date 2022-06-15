// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    const xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    const theUrl = "https://whynot-get-married-backend.herokuapp.com/form";
    xmlhttp.open("POST", theUrl, true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    document.getElementById('rsvp-form').onsubmit = (event)=>{
        const formValues = Object.entries(event.target).map((pair) =>{
            const {type, name, value, checked} = pair[1];
            const formName = type === 'radio' ? value : name;
            console.log(formName);
            const formValue = type === 'radio' ? checked : value;
            return {[formName]: formValue}
        })
        xmlhttp.onreadystatechange = function() { // Call a function when the state changes.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                console.log(this.responseText);
            }
        }
        xmlhttp.send(JSON.stringify(formValues));
    }
})()
