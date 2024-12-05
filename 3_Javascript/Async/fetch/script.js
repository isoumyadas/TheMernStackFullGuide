// For Understanding Fetch:
//Note: https://www.notion.so/Javascript-13c8a069a2a480ef9e8adb420faa2faa?pvs=4

const imageUrl = document.querySelector(".card-img-top");
const title = document.querySelector(".card-title");
const jokeText = document.querySelector(".card-text");

const chuckNorrisJokes = async () => {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const retrivedJokes = await response.json();

    const norrisImage = (imageUrl.src = retrivedJokes.icon_url);
    const createdAt = retrivedJokes.created_at;
    const joke = retrivedJokes.value;

    imageUrl.append(norrisImage);
    title.append(createdAt);
    jokeText.append(joke);
  } catch (error) {
    console.log("Error:", error);
  }
};

chuckNorrisJokes();

// If i were to do this same thing with then catch

const example = new Promise((resolve, reject) => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      if (!response.ok) {
        reject("Error: Something went wrong");
      }
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

example
  .then((res) => {
    console.log(res.value);
  })
  .catch((error) => {
    console.log(error);
  });

// Fetch already returns an promise so you don't need to use manual Promise.
