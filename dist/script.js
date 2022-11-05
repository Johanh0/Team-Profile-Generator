
    // CONST
    const main = document.querySelector("main");
    
    const myObj = [{"name":"Johan Herrera","role":"Engineer","email":"johanherrera20000@gmail.com","github":"Johanh0"},{"name":"Alexander Havers","role":"Manager","email":"example@gmail.com","github":"pseudoDjnn","officeNumber":"5"},{"name":"Gabriella Pinto","role":"Intern","email":"example@gmail.com","github":"gabriellapinto","school":"UNC"},{"name":"Ella Rekow","role":"Engineer","email":"example@gmail.com","github":"ellarekow"}];
    const employees = Array.from(myObj);
    
    
    // 
    function createCard(){

        let i = 0;

        while(i < employees.length) {
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
            const idDiv = document.createElement("div");
            const idP = document.createElement("p");
    
            // Classes
            cardDiv.classList.add("card");
            blobDiv.classList.add("blob");
            spanImg.classList.add("img");
            iconsDiv.classList.add("icons");
            iconEmail.classList.add("fa-solid", "fa-envelope");
            iconGit.classList.add("fa-brands", "fa-github");
            idDiv.classList.add("id");
            idP.classList.add("id-p");
    
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
            cardDiv.appendChild(idDiv);
            idDiv.appendChild(idP);

            // If logic for assign right data
            if(employees[i].role === "Manager") {
                const oficceDiv = document.createElement("div");
                const oficceP = document.createElement("p");

                oficceDiv.classList.add("oficce");
                oficceP.classList.add("oficce-p");

                cardDiv.appendChild(oficceDiv);
                oficceDiv.appendChild(oficceP);

                oficceP.innerText = "Oficce: " + employees[i].officeNumber;
            }else if (employees[i].role === "Intern") {
                const schoolDiv = document.createElement("div");
                const schoolP = document.createElement("p");

                schoolDiv.classList.add("school");
                schoolP.classList.add("school-p");

                cardDiv.appendChild(schoolDiv);
                schoolDiv.appendChild(schoolP);

                schoolP.innerText = "School: " + employees[i].school;
            }
    
            // Information
            h2El.innerText = employees[i].name;
            pEl.innerText = employees[i].role;

            aEmail.href = "mailto:" + employees[i].email;
            aGit.href = "https://www.github.com/"+ employees[i].github + "";
            aGit.target = "_blank"
    
    
    
            // Calling the API and giving the img
            fetch("https://api.github.com/users/"+ employees[i].github + "").then( (response) => {
                return response.json();
             }).then( (data) => {
                spanImg.style.backgroundImage = "url("+ data.avatar_url + ")";

                idP.innerText = "ID: " + data.id;
            })

            i++;
        }
    };
    
    createCard();
    