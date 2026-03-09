/* const foxButton = document.querySelector("#fox-button")
foxButton.addEventListener("click", () => {
fetch('https://randomfox.ca/floof/')
  .then((response) => {
    console.log('Response received!');
    return response.json();
  })
  .then((foxData) => {
    console.log('Data parsed!');
    console.log(foxData);
    foxImage.src = foxData.image;
  });

console.log('This code runs immediately!');
})

const foxImage = document.querySelector("#fox")


const dogButton = document.querySelector("#dog-button")
dogButton.addEventListener("click", displayDogImage) => {
  fetch('https://random.dog/woof.json')
  .then((response) => {
    console.log('Response received!');
    return response.json();
  })
  .then((dogData) => {
    console.log('Data parsed!');
    console.log(dogData);
    dogImage.src = dogData.url;
  });

console.log('This code runs immediately!');
})

const dogImage = document.querySelector("#dog")
*/
const foxButton = document.querySelector("#fox-button")
foxButton.addEventListener("click", () => {
    fetch("https://randomfox.ca/floof/")
        .then((response) => {
            return response.json()
        })
        .then((foxData) => {
            const foxImage = document.querySelector("#fox")
            foxImage.src = foxData.image
        })
})

const dogButton = document.querySelector("#dog-button")

const displayDogImage = async () => {
    const response = await fetch("https://random.dog/woof.json")
    const dogData = await response.json()
    const dogImage = document.querySelector("#dog")
    dogImage.src = dogData.url
}

dogButton.addEventListener("click", displayDogImage)
