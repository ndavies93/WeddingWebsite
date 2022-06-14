// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
    var theUrl = "http://localhost:8081/form";
    xmlhttp.open("POST", theUrl);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    document.getElementById('rsvp-form').onsubmit = (event)=>{
        const formValues = Object.entries(event.target).map((pair) =>{
            const {type, name, value, checked} = pair[1];
            const formName = type === 'radio' ? value : name;

            const formValue = type === 'radio' ? checked : value;
            console.log(formName, formValue)
            return {formName: formValue}
        })
        xmlhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));
        console.log(formValues)
    }
})()
