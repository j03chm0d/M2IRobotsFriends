const urlParams=new URLSearchParams(location.search)
 const userId = urlParams.get("id");
 const contactName = document.getElementById("contact-name");
 const contactEmail = document.getElementById("contact-email");
 const contactPhoneNumber = document.getElementById("contact-phonenumber");
 const street = document.getElementById('street-p');
 const suite = document.getElementById('suite-p');
 const city = document.getElementById('city-p');
 const photo = document.getElementById("contact-photo")
 




const API_KEY = "566ec926-471e-11ee-be56-0242ac120002";
console.log("juste  pres la cle api")
axios
    .get(`https://prfauraproject.up.railway.app/api/users?apiKey=${API_KEY}`)
    .then((res) => {
        console.log(res);
        const user = res.data[userId];
        const NomContact = user.name;
        contactName.innerText += NomContact;
        const EmailContact = user.email;
        contactEmail.innerText += EmailContact;
        const phoneNumberContact = user.phone;
        contactPhoneNumber.innerText += phoneNumberContact;
        const userStreet = user.address.street;
        street.innerText = userStreet;
        const userSuite = user.address.suite;
        suite.innerText = userSuite;
        const userCity = user.address.city;
        city.innerText = userCity;
        
        photo.src = `https://robohash.org/${user.id}`;


        console.log(user)
    
    
    
    
    
    
    })