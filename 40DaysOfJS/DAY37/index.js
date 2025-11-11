console.log("DAY 37 - Web API's");

let areaToCopy = document.getElementById('area');
let copyBtn = document.getElementById("copyBtn");
let statusMsg = document.getElementById("statusMsg");

copyBtn.addEventListener('click', async function() {

    try {
        
        const text = areaToCopy.value;

        if(!navigator.clipboard) {

            throw new Error('Unsupported');
        }

        await navigator.clipboard.writeText(text);

        statusMsg.textContent = "Text copied to clipboard!";

        statusMsg.style.color = "green";

    } catch(error) {

        console.error(error);

        statusMsg.textContent = "Error while copying";

        statusMsg.style.color = "red";
    }
})

// localStorage

let themeBtn = document.getElementById('themeBtn');
let themeP = document.getElementById('currentTheme');

let currentTheme = localStorage.getItem("theme") || 'light';

themeBtn.addEventListener('click', function() {

    currentTheme = currentTheme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', currentTheme);

    updateTheme();
});

function updateTheme() {

    themeP.textContent = `Current Theme : ${currentTheme[0].toUpperCase()}${currentTheme.slice(1)}`;

    if(currentTheme === 'dark') {

        document.body.classList.add('dark');

    } else {
        
        document.body.classList.remove('dark');
    }
}

updateTheme();


