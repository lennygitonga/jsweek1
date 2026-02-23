//Calulating age in months
function ageInMonths(age){
    return age * 12;
}
// Handling form submission and storing data in localStorage
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value

    localStorage.setItem('name', name);
    localStorage.setItem('age', age);

    let storedName = localStorage.getItem('name');
    let storedAge = localStorage.getItem('age');
//Personalized greeting
document.querySelector('#greetings').textContent = `Hey there ${storedName}, Thank you for stopping over!`;
// Check if the user is old enough to access adult content
if (storedAge < 18) {
    document.querySelector('#adultContent').textContent = ` You are not old enough to access adult content.`;
} else{
    document.querySelector('#adultContent').textContent = ` You are old enough to access adult content.`;
}
//Display the user's age in months
document.querySelector('#ageInMonths').textContent = `Your age in months is ${ageInMonths(storedAge)}`;

//Inspirational quote
let quote = 'The best way to predict the future is to create it.';
for (let i = 0; i < 5; i++) {
    document.querySelector('#quote').textContent += quote;
}
});