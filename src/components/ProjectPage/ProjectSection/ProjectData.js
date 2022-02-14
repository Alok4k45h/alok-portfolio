const ProjectData = [
  {
    image: "./wikipedia.png",
    heading: "Wikipedia Search Application",
    description:
      "Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result",
    technologies: "Technologies used: HTML, CSS, JS, REST API Calls, Bootstrap",
    listFirst:
      "Displayed list of search results with HTML list elements with hyperlink as url, styled list using CSS, Bootstrap and implemented responsiveness using Flex properties and CSS Box model.",
    listSecond:
      "Fetched search results from server asynchronously using fetch GET HTTP API call. When a user clicks on a particular result, opens the website in a new tab by using the target attribute of the anchor tag in HTML.",
    link: "https://searchon.ccbp.tech/",
  },
  {
    image: "./todo.png",
    heading: "Todos Application",
    description:
      "Developed persistent todo application with CRUD operations to track list of tasks",
    technologies: "Technologies used: HTML, CSS, JS, Bootstrap",
    listFirst:
      "Displayed list of todos with HTML list elements, styled todo list using CSS, Bootstrap",
    listSecond:
      "Implemented todo crud operations by using JavaScript event listeners and updated UI dynamically by using JavaScript DOM operations.",
    link: "https://todosapp07.ccbp.tech/",
  },
  {
    image: "./guessNumber.png",
    heading: "Guessing Number Game",
    description:
      "Developed a game where user can Guess the number(integer between 1-100) fixed by Browser itself",
    technologies: "Technologies used: HTML, CSS, Bootstrap, JS",
    listFirst: "Every time you want to play, you must reload your browser. ",
    listSecond:
      "There is a counter that counts the number of steps required to arrive at the correct guess.",
    link: "https://guessingame07.ccbp.tech/",
  },
  {
    image:
      "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png",
    heading: "Food Munch Homepage",
    description:
      "Developed a responsive homepage for Food Store where users can see a list of food items, detailed information about a food item, offers",
    technologies: "Technologies used: HTML, CSS, Bootstrap",
    listFirst:
      "Designed page using following HTML structure elements like li, header, article, footer elements and different bootstrap components to show different sections in the website and different bootstrap classes for responsiveness through mobile-first approach.",
    listSecond:
      "Implemented product youtube videos by using bootstrap embed and model components",
    link: "https://befoody.ccbp.tech/",
  },
  {
    image: "./tourism.png",
    heading: "Tourism, A Static website",
    description:
      "Developed tourism website where users can browse through the content, videos and images of popular destinations.",
    technologies: "Technologies used: HTML, CSS, Bootstrap",
    listFirst:
      "Implemented mobile friendly layout using different HTML block, inline elements, and Styled using CSS3 properties such as background, flex, and CSS box model properties.",
    listSecond:
      "Implemented multiple images of a particular destination in a carousel using bootstrap carousel and virtual tour videos using bootstrap embed component.",
    link: "https://onthetourstatic.ccbp.tech/",
  },
];

export default ProjectData;
