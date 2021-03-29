'ues strict';

alert("HI THERE");

let yourName = prompt('what\'s your name?')
alert("wlecome " + yourName);

let myName = prompt('Is My Name HebaEssam?');
myName = myName.toUpperCase();

if (myName === 'YES') {
    // console.log(myName);
    alert(myName);
} else {
    // console.log('No My name is Heba Essam');
    alert('No My name is Heba Essam');
}

let myAge = prompt('Is My Age 28?');
myAge = myAge.toUpperCase();
if (myAge === 'YES') {
    // console.log(myAge);
    alert(myName);
} else {
    // console.log('No Me Age is 28');
    alert('No Me Age is 28');
}
let myNationality = prompt('Do I Have A Jordanian Nationality?');
myNationality = myNationality.toUpperCase();
if (myNationality === "YES") {
    // console.log(myNationality);
    alert(myNationality);
} else {
    // console.log('My Nationality Is Jordanian');
    alert('My Nationality Is Jordanian');
}
let myHobbies = prompt('Is My Hobby Reading?');
myHobbies = myHobbies.toLowerCase();
if (myHobbies === 'yes') {
    // console.log(myHobbies);
    alert(myHobbies);
} else {
    // console.log('My Hobbies Is Reading');
    alert('My Hobbies Is Reading');
}
let myStudy = prompt('Did I Study Communication Engineering in BAU?');
myStudy = myStudy.toLowerCase();
if (myStudy === 'yes') {
    // console.log(myStudy);
    alert(myStudy);
} else {
    // console.log('My Study Major Is Communication Engineering');
    alert('My Hobbies Is Reading');
}

alert("Thank You For Visiting My Web Page " + yourName);