/*******************************
 * Lektion 3 - Loops & Arrays  *
 *******************************/

// Opgave 1
// Du skal i disse opgaver arbejde med et givent array. Arrayet ligger i filen: storeProducts.js
// Start med at lave en <div> som du henter ind i dit script med en getElementById metode.
// Du skal i første omgang loope igennem alle indexes i arrayet og vise alle produkterne i din div.
// Produkterne skal opstilles i et css grid eller en flexbox, med pris, billede, produkt navn, antal og popularitet (0-10).
// main.js

// main.js

import { storeProducts } from './storeProducts.js';

document.addEventListener("DOMContentLoaded", () => {
    const productsDiv = document.getElementById('products');
    const sortCriteriaSelect = document.getElementById('sortCriteria');

    function displayProducts(storeProducts) {
        productsDiv.innerHTML = ''; // Clear the container first
        storeProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.title}</h2>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Quantity: ${product.quantity}</p>
                <p>Popularity: ${product.popularity}/10</p>
                <button onclick="addToBasket('${product.name}')">Add to Basket</button>
            `;

            productsDiv.appendChild(productDiv);
        });
    }

    function sortProducts(array, type) {
        let sortedArray = [...array];
        switch(type) {
            case 'price':
                sortedArray.sort((a, b) => a.price - b.price);
                break;
            case 'popularity':
                sortedArray.sort((a, b) => b.popularity - a.popularity);
                break;
             case 'alphabetical':
                 sortedArray.sort((a, b) => a.title.localeCompare(b.title));
                 break;
        }
        return sortedArray;
    }

    // Initial display of products
    displayProducts(storeProducts);

    // Handle change event on select element
    sortCriteriaSelect.addEventListener('change', () => {
        const sortedProducts = sortProducts(storeProducts, sortCriteriaSelect.value);
        displayProducts(sortedProducts);
    });

   
});

//________________________________________________________________________________________
// Opgave 2
// Du skal nu lave en funktion der kan simulere at du tilføjer et af produkterne fra opgave 1 til en kurv.
// Din funktion skal derfor kunne kaldes med en onclick på hver af produkterne og kalde en alert
// med følgende tekst: Du har tilføjet "Produktets navn" til din kurv.
window.addToBasket = function(productName) {
    alert(`Du har tilføjet "${productName}" til din kurv.`);
};


//________________________________________________________________________________________

// Opgave 3
// I denne opgave skal du lave en sortering af produkterne fra opgave 1 (lav til høj). Det vil sige du skal arbejde
// videre på samme side.
// Du skal først tilføje en <select> på din side. I din select skal følgende "options" være mulige at vælge;
// Pris, popularitet og alfabetisk.
// Lav en funktion der kan tage imod arrayet og modificere det, så man kan sortere efter de tre options.
// Det vil sige at funktionen skal have to argumenter; arrayet og type af sortering.
// Når arrayet er sorteret skal det returneres og vises i DOM´en med den nye sortering.
//_________________________________________________________________________________________
