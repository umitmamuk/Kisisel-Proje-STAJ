const form = document.getElementById("basvuru-form");
const submitButton = document.getElementById("submit-button");
const cardBody = document.querySelectorAll(".card-body")[1];
const nameElement = document.getElementById("name");
const lastNameElement = document.getElementById("lastName");
const tcElement = document.getElementById("tc");
const telElement = document.getElementById("tel");
const cityElement = document.getElementById("city");
const ageElement = document.getElementById("age");
const emailElement = document.getElementById("e-mail");
const fileElement = document.getElementById("file");
const firebaseService = new FirebaseService();


eventListeners();

function eventListeners() {
    submitButton.addEventListener("click", addBasvuru);
    document.addEventListener("DOMContentLoaded", function () {
        let basvurular = MyStorage.getBasvurularFromStorage();
        UI.loadAllBasvurular(basvurular);
    })
    cardBody.addEventListener("click",deleteBasvuru);
}


function addBasvuru(e) {
    


    const cinsElement = document.querySelector('input[name="cins"]:checked');

    const name = nameElement.value;
    // console.log("name", name);
    const lastName = lastNameElement.value;
    // console.log("lastName", lastName);
    const tc = tcElement.value;
    // console.log("tc", tc);
    const tel = telElement.value;
    // console.log("tel", tel);
    const city = cityElement.value;
    // console.log("city", city);
    const age = ageElement.value;
    // console.log("age", age);
    const email = emailElement.value;
    // console.log("email", email);
    const cins = cinsElement.value;
    // console.log("cins", cins);
    const file = fileElement.value;



    if (name === "" || lastName === "" || tc === "" || tel === "" || city === "" || age === "" || email === "" || cins === "") {
        //Hata Mesajı Fırlat
        UI.displayMessage("Lütfen Boş Alanları Doldurunuz", "danger");
    }
    else {
        // Yeni başvuru
        const yeniBasvuru = new Basvuru(name, lastName, email, tc, tel, city, age, cins, file);
        UI.addYeniBasvuru(yeniBasvuru); //Arayüze Başvuru Ekleme.
        MyStorage.addBasvurularToStorage(yeniBasvuru);
        UI.displayMessage("Başvurunuz Başarıyla Alınmıştır", "success");
        
        firebaseService.writeUserData(name, lastName, email, tc, tel, city, age, cins, file);

    }
    UI.clearInput(nameElement, lastNameElement, emailElement, tcElement, telElement, cityElement, ageElement, fileElement);
    // document.querySelector('input[name="cins"][value="erkek"]').checked = true;


    e.preventDefault();
}

function deleteBasvuru(e) {
    if(e.target.id === "delete-basvuru"){
        UI.deleteBasvuruFromUI(e.target);
        firebaseService.deleteUserData(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        MyStorage.deleteBasvuruFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("Başvuru silindi.","warning");
    }
}

