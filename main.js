fetch("https://v2.jokeapi.dev/joke/Any")
    .then((response) => {
        console.log(response);
        return response.json();
    })
    .then((data) => console.log(data))