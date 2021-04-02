'ues strict';

alert('HI THERE');
let score = 0;
let yourName = prompt('what\'s your name?');
while (!yourName) {
    yourName = prompt('pleas put your name');
}
alert('wlecome ' + yourName);
function question1() {
    let name = prompt('Is My Name HebaEssam?');


    while (name !== 'yes' && name !== 'y' && name !== 'no' && name !== 'n') {
        name = prompt('please choose YES/No');
    }
    name = name.toUpperCase();
    if (name === 'YES' || name === 'Y') {
        alert(name);
        score++;
    } else if (name === 'NO' || name === 'N') {
        alert('No My name is Heba Essam');
    } else {
        ('please answer with only yes/y or no/n');
    }
}
question1();

function question2() {


    let age = prompt('Is My Age 28?');

    while (age !== 'yes' && age !== 'y' && age !== 'no' && age !== 'n') {
        age = prompt('please choose YES/No')
    }
    age = age.toUpperCase();
    if (age === 'YES' || age == 'Y') {
        alert(age);
        score++;
    } else if (age === 'NO' || age === 'N') {
        alert('No My Age is 28');
    } else {
        ('please answer with only yes/y or no/n');
    }
}
question2();

function question3() {

    let nationality = prompt('Do I Have A Jordanian Nationality?');
    while (nationality !== 'yes' && nationality !== 'y' && nationality !== 'no' && nationality !== 'n') {
        nationality = prompt('please choose YES/No');
    }
    nationality = nationality.toUpperCase();
    if (nationality === 'YES' || nationality === 'Y') {
        alert(nationality);
        score++;
    } else if (nationality === 'NO' || nationality === 'N') {
        alert('My Nationality Is Jordanian');

    } else {
        ('please answer with only yes/y or no/n');
    }
}
question3();

function question4() {


    let hobbies = prompt('Is My Hobby Reading?');
    while (hobbies !== 'yes' && hobbies !== 'y' && hobbies !== 'no' && hobbies !== 'n') {
        hobbies = prompt('please choose YES/No');
    }
    hobbies = hobbies.toLowerCase();
    if (hobbies === 'yes' || hobbies === 'y') {
        alert(hobbies);
        score++;
    } else if (hobbies === 'no' || hobbies === 'n') {
        alert('My Hobbies Is Reading');
    } else {
        ('please answer with only yes/y or no/n');
    }
}
question4();

function question5() {


    let study = prompt('Did I Study Communication Engineering in BAU?');
    while (study !== 'yes' && study !== 'y' && study !== 'no' && study !== 'n') {
        study = prompt('please choose YES/No');
    }
    study = study.toLowerCase();
    if (study === 'yes' || study === 'y') {
        alert(study);
        score++;
    } else if (study === 'no' || study === 'n') {
        alert('My Study Major Is Communication Engineering');
    } else {
        ('please answer with only yes/y or no/n')
    }
}
question5();

function question6() {


    for (let i = 0; i < 4; i++) {
        let yourNumber = prompt('what day is my birthday?');

        if (i == 3) {
            alert("its 28")
        }
        else if (yourNumber < 28) {
            alert('too low');

        } else if (yourNumber > 28) {
            alert('too big');

        } else if (yourNumber == 28) {
            alert('right');
            score++;
            break;
        }
    }
}
question6();

function question7() {


    let yourFood = '';
    let food = ["pizza", "fries", "cheese", "kabseh", "coffee"]
    for (let j = 0; j < 6; j++) {
        yourFood = prompt('what\s food do I like?');

        for (let i = 0; i < food.length; i++) {
            yourFood = yourFood.toLowerCase();
            if (food[i] === yourFood) {
                alert(yourFood + ' correct');
                j = 6;
                score++;
            }

        } if (j == 5) {
            alert('this is ' + food);
            break;
        } else if (j < 6) {
            alert('no it\s not sorry');
        }
    }
}
question7();

alert('thanks for playing ' + yourName + ' your score is ' + score);
