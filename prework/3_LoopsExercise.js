// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
  let i = 1;
  while ( i <= 5 ) {
    console.log(i);
    i++;
  }

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
  let j = 1;
  do {
    console.log(j);
    j++;
  } while ( j <= 5 );

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
  for ( let k = 1 ; k <= 5 ; k++ ) {
    console.log(k);
  }

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
  let l = 10;
  while ( l >= 1 ) {
    console.log(l);
    l--;
  }
  let m = 10;
  do {
    console.log(m);
    m--;
  } while ( m >= 1 );

  for ( let n = 10 ; n > 0 ; n-- ) {
    console.log(n);
  }

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
  let o = 7;
  while ( o <= 27 ) {
    console.log(o);
    o++;
  }
  let p = 7;
  do {
    console.log(p);
    p++;
  } while ( p <= 27 )

  for ( let q = 7 ; q <= 27 ; q++ ) {
    console.log(q);
  }

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
  let r = 0;
  while ( r < 100 ) {
    r+=10;
    console.log(r);
  }
  let s = 0; 
  do {
    s+=10;
    console.log(s);
  } while ( s < 100);

  for ( let t = 1 ; t <= 10 ; t++ ) {
    console.log(t*10);
  }

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

  // The variable counterFour decrements from 1 to 0 to -1 ... and will never reach 2, 
  // which is the stop condition.
  // The while loop is waiting for counterFour to reach 2 but counterFour just continues
  // to get further away from 2 in the opposite direction and it will always be < 2
let counterFour = 1;
while (counterFour > -100 ) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
  let u = 7;
  for ( u = 0 ; u <= 7 ; u++ ) {
    console.log(u);
  }

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
  let kevin = 7;
  for ( v = 0 ; v <= 100 ; v++ ) {
    if ( v === kevin ) {
      console.log( v + " my favorite number!");
    } else {
      console.log( v + " not my favorite number");
    }
  }

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
  // In real life, I generally pick a for loop as the default loop because it comes with a self-contained
  // iterator , termination condition, and step size.
  // the only instance I would pick a do...while loop is if there will always be a default output
  // regardless of the input conditions. I would pick a while loop if the iterator or termination condition
  // is a global variable or in a scope that can be modified by other functions, so that it would be apt
  // for the iterator or stop condition to be modifiable outside of the loop

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3 /*???*/; ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter /*???*/ /*???*/; ; ) {
    console.log("inside" /*???*/);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
  //
  //  MDN do...while statement (for syntax), chrome console
// Email your file to us or commit your file to GitHub and email us a link.
