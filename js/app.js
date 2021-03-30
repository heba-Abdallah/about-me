'ues strict';

alert("HI THERE");

let yourName = prompt('what\'s your name?')
alert("wlecome " + yourName);

let name = prompt('Is My Name HebaEssam?');
name = name.toUpperCase();

if (name === 'YES' || name === 'Y') {
    // console.log(myName);
    alert(name);
} else if (name === 'NO' || name === 'N') {
    // console.log('No My name is Heba Essam');
    alert('No My name is Heba Essam');
} else {
    ('please answer with only yes/y or no/n');
}

let age = prompt('Is My Age 28?');
age = age.toUpperCase();
if (age === 'YES' || age === 'Y') {
    // console.log(myAge);
    alert(name);
} else if (age === 'NO' || age === 'N') {
     // console.log('No Me Age is 28');
    alert('No Me Age is 28');
} else {
    ('please answer with only yes/y or no/n');
} 
   
let nationality = prompt('Do I Have A Jordanian Nationality?');
nationality = nationality.toUpperCase();
if (nationality === 'YES' || nationality === 'Y') {
    // console.log(myNationality);
    alert(nationality);
} else if (nationality === 'NO' || nationality === 'N') {
    // console.log('My Nationality Is Jordanian');
    alert('My Nationality Is Jordanian');

} else {
    ('please answer with only yes/y or no/n');
}
    
let hobbies = prompt('Is My Hobby Reading?');
hobbies = hobbies.toLowerCase();
if (hobbies === 'yes' || hobbies === 'y') {
    // console.log(myHobbies);
    alert(myHobbies);
} else if (hobbies === 'no' || hobbies === 'n') {
    // console.log('My Hobbies Is Reading');
    alert('My Hobbies Is Reading');
} else {
    ('please answer with only yes/y or no/n');
}

let study = prompt('Did I Study Communication Engineering in BAU?');
study = study.toLowerCase();
if (study === 'yes' || study === 'y') {
    // console.log(myStudy);
    alert(myStudy);
} else if (study === 'no' || study === 'n') {
    // console.log('My Study Major Is Communication Engineering');
    alert('My Hobbies Is Reading');
} else {
    ('please answer with only yes/y or no/n')
} 

alert("Thank You For Visiting My Web Page " + yourName);