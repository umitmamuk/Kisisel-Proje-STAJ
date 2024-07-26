class UI {

  static displayMessage(message, type) {
    const cardBody = document.querySelectorAll(".card-body")[0];
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function () {
      div.remove();
    }, 1500);
  }
  static addYeniBasvuru(yeniBasvuru) {
    const basvuruList = document.getElementById("basvurular");
    basvuruList.innerHTML += `<tr>
                    <td>${yeniBasvuru.name}</td>
                    <td>${yeniBasvuru.lastName}</td>
                    <td>${yeniBasvuru.tc}</td>
                    <td>${yeniBasvuru.tel}</td>
                    <td>${yeniBasvuru.city}</td>
                    <td>${yeniBasvuru.age}</td>
                    <td>${yeniBasvuru.email}</td>
                    <td>${yeniBasvuru.cins}</td>
                    <td>${yeniBasvuru.cv}</td>
                    <td>
                      <button id="delete-basvuru" type="button" class="btn btn-outline-light">
                        <i class="bi bi-person-x-fill"></i>
                        SİL
                      </button>
                    </td>
                  </tr>`;


  }

  static clearInput(element1, element2, element3, element4, element5, element6, element7, element8) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
    element4.value = "";
    element5.value = "";
    element6.value = "";
    element7.value = "";
    element8.value = "";
  }
  static loadAllBasvurular(basvurular) {
    const basvuruList = document.getElementById("basvurular");

    basvurular.forEach(function (basvuru) {
      basvuruList.innerHTML += `
            <tr>
                    <td>${basvuru.name}</td>
                    <td>${basvuru.lastName}</td>
                    <td>${basvuru.tc}</td>
                    <td>${basvuru.tel}</td>
                    <td>${basvuru.city}</td>
                    <td>${basvuru.age}</td>
                    <td>${basvuru.email}</td>
                    <td>${basvuru.cins}</td>
                    <td>${basvuru.cv}</td>
                    <td>
                    <a href="#" id="delete-basvuru" class="btn btn-outline-light bi bi-person-x-fill">      
                        SİL
                     </a>
                    </td>
                  </tr>
            `;
    });
  }
  static deleteBasvuruFromUI(element) {
    element.parentElement.parentElement.remove();
  }
}