function ageInMonths(age){
    return age * 12;
}

let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);

    let storedName = localStorage.getItem('name');
    let storedAge = localStorage.getItem('age');

document.querySelector('#greetings').textContent = `Hey there ${storedName}, Thank you for stopping over!`;

if (storedAge < 18) {
    document.querySelector('#adultContent').textContent = ` You are not old enough to access adult content.`;
} else{
    document.querySelector('#adultContent').textContent = ` You are old enough to access adult content.`;
}

document.querySelector('#ageInMonths').textContent = `Your age in months is ${ageInMonths(storedAge)}`;
};