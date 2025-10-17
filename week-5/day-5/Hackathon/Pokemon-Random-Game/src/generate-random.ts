


const detailsDiv = document.getElementById("details");
       
async function getPokemonInfo(pokemonNumber: number) {
    const pokemonRespond = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
    if(pokemonRespond.ok){
        const thePokemonObjct = await pokemonRespond.json();
        return await thePokemonObjct
    }else{
        throw Error("cant find the pokemon`s API");
    }
}

const findButton:HTMLElement|null = document.getElementById("findButton");
if(!findButton){throw new Error("cant find the find button amit");}
    findButton.addEventListener("click", async () =>{
        if(!detailsDiv){throw new Error("cant find the details Div amit");}
        detailsDiv.innerHTML = 'loading...'
        let randomNum:number = Math.floor((Math.random() * 151)+1);
        let pokemonObjct:object = await getPokemonInfo(randomNum).then((result) => result);

        function renderPage(objectPoke:object){
            const ulElm = document.createElement("ul");
            
            if("name" in objectPoke){
                const liName = document.createElement('li');
                liName.innerHTML = `<h2>${objectPoke.name}</h2>`
                ulElm.appendChild(liName);
            }
            if("id" in objectPoke){
                const liNum = document.createElement('li');
                liNum.innerHTML = "Pokemon ID: " + objectPoke.id;
                ulElm.appendChild(liNum);
            }
            if("height" in objectPoke){
                 const liHight = document.createElement('li');
                liHight.innerHTML = "Height: " + objectPoke.height;
                ulElm.appendChild(liHight);
            }
            if("weight" in objectPoke){
                const liWeight = document.createElement('li');
                liWeight.innerHTML = "Weight: " + objectPoke.weight;
                ulElm.appendChild(liWeight);
            }
            // if("types" in objectPoke){
            //     const liType = document.createElement('li');
            //     liType.innerHTML = "Type:"
            //     for (let i = 0; i < objectPoke.types.length; i++) {
            //         const aType = objectPoke.types[i];
            //         liType.innerHTML += ` ${aType.type.name}`
            //     };
            //     ulElm.appendChild(liType);
            // }
            const imgElm = document.createElement("img");
            // if ("sprites" in objectPoke) {
            //     imgElm.src=objectPoke.sprites.front_default;
            // }
            
            if(!detailsDiv){throw new Error("cant find the details Div amit");}
                detailsDiv.innerHTML = ''
                detailsDiv.appendChild(imgElm);
                detailsDiv.appendChild(ulElm);
                detailsDiv.appendChild(nextButton);
                detailsDiv.appendChild(previousButton);
            };
        
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.addEventListener("click", async ()=>{
            if(randomNum === 151){
                pokemonObjct = await getPokemonInfo(1).then((result) => result);
                randomNum = 1;
            }else{
                pokemonObjct = await getPokemonInfo(randomNum+1).then((result) => result);
                randomNum++;
            }
            renderPage(pokemonObjct);
        });
        const previousButton = document.createElement("button");
        previousButton.textContent = "Previous";
        previousButton.addEventListener("click", async ()=>{
            if(randomNum === 1){
                pokemonObjct = await getPokemonInfo(151).then((result) => result);
                randomNum = 151;
            }else{
                pokemonObjct = await getPokemonInfo(randomNum-1).then((result) => result);
                randomNum--;
            }
            renderPage(pokemonObjct);
        });

        renderPage(pokemonObjct);
    });
