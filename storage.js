class MyStorage {

    constructor() { }

    static addBasvurularToStorage(yeniBasvuru) { // Storage'a başvuru ekle
        let basvurular = this.getBasvurularFromStorage(); // Storage'dan tüm başvuruları al
        if (basvurular.indexOf(yeniBasvuru) === -1) { // Eğer yeni başvuru storage'da yoksa
            basvurular.push(yeniBasvuru); // Başvurulara yeni başvuruyu ekle
        }
        localStorage.setItem("basvurular", JSON.stringify(basvurular)) // Başvuruları storage'a geri yaz
    }

    static getBasvurularFromStorage() { // Storage'dan tüm başvuruları al
        let basvurular; // Başvuruları tutacak bir değişken
        if (localStorage.getItem("basvurular") === null) { // Eğer storage'da basvurular adında bir key yoksa
            basvurular = [];    // Boş bir array oluştur
        }
        else {
            basvurular = JSON.parse(localStorage.getItem("basvurular")); // Storage'dan basvurular key'ini al ve parse et
        }
        return basvurular;  // Başvuruları döndür
    }
    static deleteBasvuruFromStorage(basvuruTc) { // Storage'dan başvuru sil
        let basvurular = this.getBasvurularFromStorage();  // Storage'dan tüm başvuruları al
        basvurular.forEach(function (basvuru, index) {  // Her bir başvuru için
            if (basvuru.tc === basvuruTc) { // Eğer başvurunun tc'si parametredeki tc'ye eşitse
                basvurular.splice(index, 1); // Başvuruyu sil
            }
            localStorage.setItem("basvurular", JSON.stringify(basvurular)); // Başvuruları storage'a geri yaz
        });
    }
}
