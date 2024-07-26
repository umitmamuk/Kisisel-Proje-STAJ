class FirebaseService {
  constructor() {
    // Firebase yapılandırma bilgileri
    const firebaseConfig = {
      apiKey: "API_KEYİNİZ",
      authDomain: "PROJENİZ.firebaseapp.com",
      databaseURL: "https://test-a7b00-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "PROJE_ID",
      storageBucket: "PROJE_ID.appspot.com",
      messagingSenderId: "SENDER_ID",
      appId: "APP_ID"
    };

    // Firebase'i başlat
    firebase.initializeApp(firebaseConfig);
    this.database = firebase.database();
  }

  // Veri kaydetme fonksiyonu
  writeUserData(name, lastName, email, tc, tel, city, age, cins, file) {
    this.database.ref('users/' + tc).set({
      username: name,
      email: email,
      latename: lastName,
      tc: tc,
      tel: tel,
      city: city,
      age: age,
      cins: cins,
      file: file
    });
  }

    // Veri silme fonksiyonu
    deleteUserData(userId) {
      this.database.ref('users/' + userId).remove()
      .then(() => {
        console.log('Veri başarıyla silindi.');
      })
      .catch((error) => {
        console.error('Veri silinirken bir hata oluştu: ', error);
      });
    }
}

// Sınıfın örneğini oluşturma ve veri kaydetme
