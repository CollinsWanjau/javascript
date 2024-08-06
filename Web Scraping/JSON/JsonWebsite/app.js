function populateHeader(obj) {
  // Select the header element
  const header = document.querySelector("header");

  // Create an <h1> element
  const myH1 = document.createElement("h1");

  // Set the text content to the squad name
  myH1.textContent = obj.squadName;

  // Append the <h1> to the header
  header.appendChild(myH1);

  const myPara = document.createElement("p");

  // set the text content
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;

  header.appendChild(myPara); // Append the <p> to the headr
}

function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";


    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}

// Asynchronous function to fetch and populate the superhero data
async function populate() {
  const requestURL =
    "superheroes.json";

  // we use the URL to initialize a new Request object.
  const request = new Request(requestURL)

  /**
   * To obtain the JSON, we use an API called Fetch
   * This API allows us to make network requests to retrieve resources from a 
   * server via JavaScript (e.g. images, text, JSON, even HTML snippets),
   * meaning that we can update small sections of content without having to 
   * reload the entire page.
   *
   */
  try {
    const response = await fetch(request)
    const superHeroes = await response.json()

    populateHeader(superHeroes)
    populateHeroes(superHeroes)
  } catch (error) {
    console.error('Error fetching superhero data:', error);
  }
  
}

populate()
