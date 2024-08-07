/************************************
 * Lektion 2 - Objects & functions  *
 ************************************/

// Opgave 1
// I denne opgave skal du lave en funktion der kan tjekke længden på en given string.
// Din funktion skal altså tage imod et argument (din string der skal tjekkes) og returnere et resultat i form af et tal.
// Funktionen skal kaldes og du skal gemme resultatet, hvorefter string + resultat skal printes i en console.log,
// så der står i konsollen: "Relativitetsteori er 17 bogstaver langt".

// Function to check the length of a given string
function checkStringLength(str) {
    return str.length;
  }
  
  // Call the function with a string
  const myString = "flat earth theory";
  const lengthis = checkStringLength(myString);
  
  // Print the result in the console
  console.log(myString + " is " + lengthis + " letters long");

  


//________________________________________________________________________________________________

// Opgave 2
// Du skal i denne opgave lave et objekt der indeholde følgende:
// - Fornavn, Efternavn, Email, Telefonnummer, Adresse og Postnummer.
// Objektet skal printes ud i en console.log

const myObject = {Fornavn: "Omid", Efternavn: "Deiminiyat", Email: "omid@kandlus.dk", Addres: "Aalborg", Postnummer: "9000"};
console.log(myObject);

//________________________________________________________________________________________________

// Opgave 3
// Du skal nu lave en funktion der kan ændre på en værdi i et objekt.
// Funktionen skal kunne tage imod tre argumenter; objektet der skal ændres, hvilken "key" der skal ændres på,
// og til sidst hvad den nye "value" skal være.
// Til slut skal din funktion returnere det nye modificerede objekt og printe dette i en console.log.
// Du kan med fordel bruge objektet du lavede i opgave 2 til at ændre på en value.

// Function to change a value in an object
function changeObjectValue(obj, key, newValue) {
    obj[key] = newValue;
    return obj;
  }
  
  let newObject = {
    subject: "Relativity theory",
    length: 17,
    isFamous: true,
    publishedYear: 1999
  };
  
  const modifiedObject = changeObjectValue(newObject, "length", 18);

  console.log(modifiedObject);
  
//_________________________________________________________________________________________________

// Opgave 4
// Du skal i denne opgave lave en funktion der kan tjekke typeof på alle key value pairs i et objekt.
// Funktionen skal console.logge typen af hver eneste value i et objekt.
// Objektet der skal tjekkes skal kunne sendes ind i funktionen som argument.

// Function to check the type of each value in an object
function checkTypes(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${typeof obj[key]}`);
      }
    }
  }
  // call function with data from object in opgave 3
  checkTypes(newObject);

  
//__________________________________________________________________________________________________

// Opgave 5
// I denne opgave skal du lave en "DOM Element generator" funktion.
// Din funktion skal kunne returnere et givent DOM element når den kaldes.
// Funktionen skal indeholde så mange af de gængse HTML elementers argumenter som du kan komme i tanke om.
// Den skal som minimum være i stand til at tage imod argumenterne; type, classname og id.
// Et eks. på at kalde en sådan funktion kunne se således ud: GenerateElement('div', 'someClassName', 'myID')



function generateElement(type, className, id) {

    const element = document.createElement(type);
 
    if (className) {
      element.className = className;
    }
  
    if (id) {
      element.id = id;
    }
      return element;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const newElement = generateElement('div', 'someClassName', 'myID');

    document.body.appendChild(newElement);

    console.log(newElement);
  });

  

//__________________________________________________________________________________________________

// Opgave 6 Bonus:
// Brug din nye HTML kodegenerator funktion til at bygge et 3x3 Grid layout af div.
// Hver div skal have en forskellige background-color og inde i hver div skal der ligge et P tag.
// P taggets innerText skal være forskelligt på dem alle. Øvelsen går ud på at lave dette med så lidt kode som muligt.

function generateElement(type, className, id, innerText, styles) {
    const element = document.createElement(type);
    if (className) element.className = className;
    if (id) element.id = id;
    if (innerText) element.innerText = innerText;
    if (styles) Object.assign(element.style, styles);
    return element;
  }

  document.addEventListener('DOMContentLoaded', function() {
    const container = generateElement('div', 'grid-container');

    const colors = ['#91ed66', '#67b7f0', '#f06792', '#3e32db', '#f2a933', '#f25333', '#9634ba', '#c71a93', '#c71a1a'];
    const texts = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];

    for (let i = 0; i < 9; i++) {
      const gridItem = generateElement('div', 'grid-item', null, null, { backgroundColor: colors[i] });
      const p = generateElement('p', null, null, texts[i]);
      gridItem.appendChild(p);
      container.appendChild(gridItem);
    }

    document.body.appendChild(container);
  });