// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####


// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####
function bruceBanner(num) {
    console.log('#####' + 'Challenge' + num + '#####' );
    }
    // console.log(giveMe);
    bruceBanner(1)
//for (let i = 1; i < 5; i ++){
    //console.log(i);
//}





// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.

for (let i = 1; i < 20; i += 3){
    console.log(i); 
}
bruceBanner(2)




// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
for (let i = 1; i < 20; i += 3){
    console.log(i);
} bruceBanner(3);



// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
for (let i = 20; i >= 0; i--) {
console.log(i);
} 
bruceBanner(4);


// 5.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
let str = 'Boy howdy am I good at this!';
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}
bruceBanner(5);




// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
str2 = 'And getting better every day.';
for (let i = 1; i < str2.length; i+=3){
console.log(str2.charAt(i));
}
bruceBanner(6);


// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
str3 = 'Am I the Best?'.toUpperCase();
for(let i = 0; i < str3.length; i += 1 ){
    console.log(str3.charAt(i));
}
bruceBanner(7);


// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
str4 = 'Whoa, I'.toLowerCase() + 'AM'.toUpperCase() + 'the best!';
for(let i = 0; i < str4.length; i += 1){
console.log(str4.charAt(i))
}


// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
function reverse(s) {
    for ( i = s.length -1, o = ''; i >= 0; o += s [i--]) {}
    return o;
}
console.log(reverse('I am become death, destroyer of worlds.'))

// 10.

let sharkString = "I am the one ";

// Iterate through each index in the string
//
const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!


// 11.
//
// There is no 11. Celebrate! You did it!
