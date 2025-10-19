console.log("************* TASKS DAY 20 **************");

// ## 1. Traverse and Toggle Classes

// Build a navigation menu. On click of a list item:

// - Traverse up to parent `<ul>`
// - Remove .active class from all `<li>`
// - Add .active only to the clicked `<li>`

// 1️⃣ Get the parent <ul>
  const navMenu = document.getElementById("navMenu");

  // 2️⃣ Add a single click listener to the parent (event delegation)
  navMenu.addEventListener("click", function (e) {
    // Ensure the clicked target is an <li>
    if (e.target.tagName.toLowerCase() === "li") {
      // 3️⃣ Traverse up to the parent <ul> (though we already have it)
      const parentUl = e.target.parentElement;
      console.log(parentUl);
      

      // 4️⃣ Remove .active from all <li> inside this <ul>
      parentUl.querySelectorAll("li").forEach(li => li.classList.remove("active"));

      // 5️⃣ Add .active only to the clicked <li>
      e.target.classList.add("active");
    }
  });


// ## 2. Highlight Text Using Range

// Use the Range API to highlight a portion of a paragraph by wrapping it with a `<mark>` tag.

// 1️⃣ Get the paragraph
  let para = document.getElementById("myPara");

  // 2️⃣ Create a Range object
  let range = document.createRange();

  // 3️⃣ Select part of the paragraph’s text
  // Start inside the paragraph's first child (text node)
  // Select from character index 4 to 15
  range.setStart(para.firstChild, 4);
  range.setEnd(para.firstChild, 15);

  // 4️⃣ Create a <mark> element
  let markElem = document.createElement("mark");

  // 5️⃣ Surround the range with <mark>
  range.surroundContents(markElem);


// ## 3. Use DocumentFragment for Performance

// Insert 100 list items into the DOM using:

// - Plain DOM methods (one by one)

let listElemNew = document.getElementById("listUl");

function insertIntoDOM(count) {

    console.time("Plain DOM Insertion");
    for(let i = 0; i < count; i++) {

        let liElem = document.createElement('li');
        liElem.innerText = `Item ${i + 1}`;
        listElemNew.appendChild(liElem)
    }
      console.timeEnd("Plain DOM Insertion");
}

insertIntoDOM(100)

// - DocumentFragment (all at once)

function insertIntoDOMViaFragment(count) {

    console.time("DocumentFragment Insertion");

    let docFrag = document.createDocumentFragment();

    for(let i = 0; i < count; i++) {

        let liElem = document.createElement('li');
        liElem.innerText = `FItem ${i + 1}`;
        docFrag.appendChild(liElem)
    }

    listElemNew.appendChild(docFrag);

    console.timeEnd("DocumentFragment Insertion");
}

insertIntoDOMViaFragment(100);