document.addEventListener('DOMContentLoaded', ()=> {

    const box = document.querySelector('.phoneNumberBox');

    function setInputAttributes (element, attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    function createRadioInput(i, phoneNumber1, phoneNumber2, phoneNumber3) {
        const radioInput = document.createElement('input');

        setInputAttributes(radioInput, {'type': 'button', 'value': i})
        radioInput.classList.add('radioNumber');

        radioInput.addEventListener('click', ()=> {
            
            if (phoneNumber1.value.length < phoneNumber1.attributes["maxlength"].value) {
                phoneNumber1.value += radioInput.value;
            }
            else if(phoneNumber2.value.length < phoneNumber2.attributes["maxlength"].value) {
                phoneNumber2.value += radioInput.value;
            }
            else if(phoneNumber3.value.length < phoneNumber2.attributes["maxlength"].value) {
                phoneNumber3.value += radioInput.value;
            }
        });
        box.appendChild(radioInput);
        return radioInput;
    }

    function resetPhoneNumber (phoneNumber1, phoneNumber2, phoneNumber3) {
        const resetBtn = document.querySelector('.resetBtn');
        resetBtn.addEventListener('click', ()=> {
            phoneNumber1.value = '';
            phoneNumber2.value = '';
            phoneNumber3.value = '';
        })
    }

    const numberOfInputs = 10;
    let radioInputs = [];
    let phoneNumber1 = document.querySelector('#phoneInput1');
    let phoneNumber2 = document.querySelector('#phoneInput2');
    let phoneNumber3 = document.querySelector('#phoneInput3');

    for(let i=0; i < numberOfInputs; i++) {
        radioInputs[i] = createRadioInput(i,phoneNumber1,phoneNumber2,phoneNumber3);
    }

    resetPhoneNumber(phoneNumber1, phoneNumber2, phoneNumber3);

    for(let j=0; j<numberOfInputs; j++) {
        setInterval(()=> {
            radioInputs[j].style.setProperty("--width", Math.random() * 265+ 'px');
            radioInputs[j].style.setProperty("--height", Math.random() * 265+ 'px');
        },Math.random()*300+700);
    }

})

