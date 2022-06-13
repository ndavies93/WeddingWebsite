// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
    document.getElementById('rsvp-form').onsubmit = (event)=>{
        const formValues = Object.entries(event.target).map((pair) =>{
            const {type, name, value, checked} = pair[1];
            const formName = type === 'radio' ? value : name;

            const formValue = type === 'radio' ? checked : value;
            console.log(formName, formValue)
            return {formName: formValue}
        })
        console.log(formValues)
    }
})()
