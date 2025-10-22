const recipes = [
    {
        title: "Spaghetti Carbonara",
        ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
        instructions: "Cook pasta. Mix with eggs and cheese. Add bacon."
    },
    {
        title: "Chicken Curry",
        ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
        instructions: "Cook onions, add chicken, spices, and tomatoes."
    },
    {
        title: "Grilled Cheese Sandwich",
        ingredients: ["Bread", "Cheddar Cheese", "Butter"],
        instructions: "Butter bread, place cheese between slices, and grill."
    },
    {
        title: "Veggie Stir Fry",
        ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
        instructions: "Stir fry vegetables and add soy sauce."
    }
];

// No results 
let noResultTag = document.createElement("p");
noResultTag.classList.add("no-recipes");
noResultTag.style.display = "none";
document.body.appendChild(noResultTag);

const searchElem = document.getElementById("searchInput");
let searchValue = localStorage.getItem("searchedValue") || "";
searchElem.value = searchValue;

searchElem.addEventListener("input", (e) => {
    searchValue = e.target.value;
    localStorage.setItem("searchedValue", searchValue);

    loadRecipes(searchValue);    
})

function loadRecipes(value = "") {

    document.querySelector(".recipe-list").innerHTML = "";

    let recipesToLoad = [];

    noResultTag.style.display = "none";

    noResultTag.innerText = "";

    recipesToLoad = recipes.filter(recipe => recipe.title.toLowerCase().includes(value.toLowerCase()));
    
    let recipesContainer = document.querySelector(".recipe-list");

    let recipesFragment = document.createDocumentFragment();

    recipesToLoad.forEach((recipe, index) => {
        let recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        // header
        let recipeHeading = document.createElement("div");
        recipeHeading.classList.add("recipe-header");
        recipeHeading.innerText = recipe.title;
        recipeHeading.addEventListener("click", (e) => {
            if(!e.target.classList.contains("recipe-header")) return;
            e.stopPropagation();
            let detailsList = document.querySelectorAll(".recipe-details")
            detailsList.forEach((item, idx) => {
                if(index === idx) {
                    item.style.display = item.style.display === 'block' ? 'none' : "block";
                }
            })
        })

        // details
        let recipeDetails = document.createElement('div');
        recipeDetails.classList.add("recipe-details");

        let ingHead = document.createElement("h4");
        ingHead.innerText = "Ingredients";
        let ingList = document.createElement("ul");
        let ingFragment = document.createDocumentFragment();
        recipe.ingredients.forEach(ing => {
            let liElem = document.createElement("li");
            liElem.innerText = ing;
            ingFragment.appendChild(liElem);
        });
        ingList.appendChild(ingFragment);

        recipeDetails.appendChild(ingHead);
        recipeDetails.appendChild(ingList);

        recipeCard.appendChild(recipeHeading);
        recipeCard.appendChild(recipeDetails);

        recipesFragment.appendChild(recipeCard)
    })
    
    recipesContainer.appendChild(recipesFragment);
    
    if(!recipesToLoad.length) {
        noResultTag.innerText = "No recipes found"
        noResultTag.style.display = "block";
    }
}

document.addEventListener("click", () => {
 
    let detailsList = document.querySelectorAll(".recipe-details");

    detailsList.forEach(elem => {
        elem.style.display = "none";
    })
})

document.getElementById("clearButton").addEventListener("click", function () {
    searchElem.value = "";
    loadRecipes("");
});

loadRecipes(searchValue);
