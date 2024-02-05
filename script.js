var firstName = "Zamira";
var lastName = "Estrada";
var age = 20;

alert("My name is " + firstName + " " + lastName);
alert("I am " + age + " years old");
console.log("Having so much fun in the class!");

// Logging even numbers from 1000 to 0
for (let i = 1000; i >= 0; i -= 2) {
  console.log(i);
}

// Alerts during the loop at specific points
for (let i = 0; i <= 10000; i++) {
  if (i === 2500) {
    alert("A quarter of the way there!");
  } else if (i === 5000) {
    alert("Halfway there!");
  } else if (i === 10000) {
    alert("The loop is done!");
  }
}

// Array of top 5 favorite TV shows and logging messages
var topTvShows = ["Buccaneers", "Griselda", "The Vampire Diaries", "Emily in Paris", "Don't Look Up"];

for (let i = 0; i < topTvShows.length; i++) {
  console.log("My #" + (i + 1) + " favorite TV show is " + topTvShows[i]);
}


