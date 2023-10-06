// function handleSubmit(event) {
//     event.preventDefault();


//     const input = document.querySelector(".name_input");
//     const button = document.querySelector(".login_button");
    
//     const validateInput = ({target}) => {
//         if (target.value.lenght > 3) {
//             button.removeAttribute('disabled');
//             return;
//         }
//         button.setAttribute('disabled', '');
//     }

//     input.addEventListener("input", validateInput);
// }

// function handleSubmit(event) {
//     event.preventDefault();
    
// }

const input = document.querySelector(".name_input");
const button = document.querySelector(".login_button");
const form = document.querySelector(".page-login")

const validateInput = ({target}) => {
    if(target.value.length > 2) {
        button.removeAttribute("disabled");  
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (evt) => {
    evt.preventDefault();

    localStorage.setItem('player', input.value)
    window.location = "./game.html";
}

input.addEventListener("input", validateInput);

form.addEventListener("submit", handleSubmit);

