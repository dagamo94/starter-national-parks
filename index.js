// console.log(document);

// const heading = document.querySelectorAll("button");
// console.log(heading);

// const heading3List = document.querySelectorAll("h3");

// for(let el of heading3List.values()){
//     console.log(el);
// }

// for(let i=0; i < heading3List.length; ++i){
//     const el = heading3List[i];
//     console.log(el);
// }

// const ratings = document.querySelectorAll(".value");

// for(let el of ratings.values()){
//     console.log(el);
// }

const descriptions = document.querySelectorAll(".description-display");

for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice(0, 250);
        content += '<a href="#">...</a>';
    }

    desc.innerHTML = content;
}

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);

    if (ratingValue > 4.7) {
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}

const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add("header-statement");

const header = document.querySelector("header");
header.appendChild(newElement);


// // REMOVING ELEMENTS *****************
// // Get the parent element of all parks
// const main = document.querySelector("main");

// // Select a single park
// const park = main.querySelector(".park-display");

// // Remove that park
// main.removeChild(park);


/* **************** EVENT LISTENERS *************** */
const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", event => {
    console.log("you clicked the button", event.target);
});


// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const park = event.target.parentNode;
      park.style.backgroundColor = "#c8e6c9";
    });
  });




// ** SORTING FUNCTIONALITY **

// CODE REFACTOR
// Declare handler and support functions here

// Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
        return -1;
    } else if (parkAName > parkBName) {
        return 1;
    } else {
        return 0;
    }
};

// Function for sorting by rating
const sortByRating = ((parkA, parkB) => {
    const parkARating = parkA.querySelector(".rating-display div").innerText;
    const parkBRating = parkB.querySelector(".rating-display div").innerText;

    console.log(parkARating);
    console.log(parkBRating);
    if (parseFloat(parkARating) > parseFloat(parkBRating)) {
        return -1;
    } else if (parseFloat(parkARating) < parseFloat(parkBRating)) {
        return 1;
    } else {
        return 0;
    }
});

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
    event.preventDefault();

    // 1.  Get the main element
    const main = document.querySelector("main");

    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");

    // 3. Empty the main
    main.innerHTML = "";

    // 4. Create an array
    const parksArray = Array.from(parksList);

    // 5. Sort the array
    parksArray.sort(sortByName);

    // 6. Insert each park into the DOM
    parksArray.forEach(park => main.appendChild(park));
};



// Function to handle the `ratingSorter` click
const ratingSorterClickHandler = event => {
    event.preventDefault();

       // 1.  Get the main element
       const main = document.querySelector("main");

       // 2. Get the list of parks
       const parksList = main.querySelectorAll(".park-display");
   
       // 3. Empty the main
       main.innerHTML = "";
   
       // 4. Create an array
       const parksArray = Array.from(parksList);
   
       // 5. Sort the array
       parksArray.sort(sortByRating);
   
       // 6. Insert each park into the DOM
       parksArray.forEach(park => main.appendChild(park));
}



// The code that runs once the DOM is loaded
const main = () => {
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");

  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // Select the `ratingSorter` link
  const ratingSorter = document.querySelector("#rating-sorter");

  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);