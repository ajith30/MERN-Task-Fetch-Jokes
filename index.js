//Making request to the server and fetching the resources using fetch() with Async/await from Geek-Jokes-api

//holding the required target elements in a variables

const jokeElement = document.getElementById("joke");
const buttonElement = document.getElementsByTagName("button")[1];

const getJokes = async () => {
  try {
    const response = await fetch(
      "https://geek-jokes.sameerkumar.website/api?format=json"
    );
    const data = await response.json();
    console.log(data);

    const joke = data.joke;

    jokeElement.innerText = joke;
  } catch (error) {
    console.log(`The error is: ${error}`);
  }
};

getJokes();

//Adding EventListner for Another Joke when the button clicked
buttonElement.addEventListener("click", getJokes);
