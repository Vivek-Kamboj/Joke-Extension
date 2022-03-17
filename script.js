fetch("https://icanhazdadjoke.com/slack")
  .then((data) => data.json())
  .then((jsonData) => {
    const joke = jsonData.attachments[0].text;
    const jokeElement = document.getElementById("jokeElement");
    jokeElement.innerHTML = joke;
  });
