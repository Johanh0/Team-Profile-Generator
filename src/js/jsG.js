// Generating the JS
function jsGenerator(employees) {
    return `
    // CONST
    const main = document.querySelector("main");
    
    const myObj = ${employees};
    const employees = JSON.parse(myObj);
    
    
    // 
    function createCard(){
        for(let i = 0; i <= employees.length; i++) {
            // Create Elements
            const cardDiv = document.createElement("div");
            const blobDiv = document.createElement("div");
            const spanImg = document.createElement("span");
            const h2El = document.createElement("h2");
            const pEl = document.createElement("p");
            const iconsDiv = document.createElement("div");
            const aEmail = document.createElement("a");
            const aGit = document.createElement("a");
            const iconEmail = document.createElement("i");
            const iconGit = document.createElement("i");
    
            // Classes
            cardDiv.classList.add("card");
            blobDiv.classList.add("blob");
            spanImg.classList.add("img");
            iconsDiv.classList.add("icons");
            iconEmail.classList.add("fa-solid", "fa-envelope");
            iconGit.classList.add("fa-brands", "fa-github");
    
            // Append Childs
            main.appendChild(cardDiv);
            cardDiv.appendChild(blobDiv);
            cardDiv.appendChild(spanImg);
            cardDiv.appendChild(h2El);
            cardDiv.appendChild(pEl);
            cardDiv.appendChild(iconsDiv);
            iconsDiv.appendChild(aEmail);
            iconsDiv.appendChild(aGit);
            aEmail.appendChild(iconEmail);
            aGit.appendChild(iconGit);
    
            // Information
            h2El.innerText = employees[i].nameUser + employees[i].lastName;
            pEl.innerText = employees[i].role;
    
    
    
            // Calling the API and giving the img
            fetch("https://api.github.com/users/"+ employees[i].github + "").then( (response) => {
                return response.json();
             }).then( (data) => {
                spanImg.style.backgroundImage = "url("+ data.avatar_url + ")";
        })
        }
    };
    
    createCard();
    `
};

module.exports = jsGenerator;