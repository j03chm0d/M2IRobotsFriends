console.log("1ere ligne");
const cardholder = document.getElementById("main-cartes");
console.log(cardholder);

const API_KEY = "566ec926-471e-11ee-be56-0242ac120002";
console.log("juste  pres la cle api")
axios
    .get(`https://prfauraproject.up.railway.app/api/users?apiKey=${API_KEY}`)
    .then((res) => {
        console.log(res);
        const users = res.data;

        const allUsers = users.map((user) => {
            const card = document.createElement("div");
            const persoinfo = document.createElement("div");
            persoinfo.classList.add("persoinfo");
            const personame = document.createElement("p");
            personame.innerText = user.name;
            const persoemail = document.createElement("p")
            persoemail.innerText = user.email;
            persoinfo.appendChild(personame);
            persoinfo.appendChild(persoemail);
            card.classList.add("card");
            const image = document.createElement("img");
            image.src = `https://robohash.org/${user.id}`
            image.classList.add("photoprofile");
            const favourite = document.createElement("button");
            favourite.classList.add("favourite-btn");

            favourite.addEventListener("click",  function () {
                 axios .patch(`https://prfauraproject.up.railway.app/api/users/toggle-favorite/${user.id}?apiKey=${API_KEY}`).then((response )=>{
                    console.log(response.data);

                 })
              
                

                

                
            });
            card.addEventListener("click", function(){
                document.location.href = `../pagedetails/getdetails.html?id=${user.id}`
            })
            card.appendChild(image);
            card.appendChild(favourite);
            card.appendChild(persoinfo);
            return card;
            
        }); 
        console.log(allUsers);
        console.log(cardholder);

        

        cardholder.append(...allUsers);
    });

            

            //     for (let user of users) {
            //         const card = document.createElement("div");
            //         card.classList.add("card");
            //         const image = document.createElement("img");
            //         image.src = `https://robohash.org/${user.id}`
            //         image.classList.add("photoprofile");
            //         const favourite = document.createElement("button");
            //         favourite.classList.add("favourite-btn");
            //         favourite.addEventListener("click", function(){
            //             axios
            // .patch(`https://prfauraproject.up.railway.app/api/users/toggle-favorite/${cardId}?apiKey=${API_KEY}`)
            // .then((res) => {console.log("toggled")
            //         })


            //     card.appendChild(image);
            //     card.appendChild(favourite);
            //     cardholder.appendChild(card);

            //         }
        


       







// image.src = "https://glisshop-glisshop-fr-storage.omn.proximis.com/Imagestorage/images/2560/1600/624bfe76d1739_446x300_PICTURE_E22.jpg"
//
// card.appendChild(image);
// cardholder.appendChild(card);




