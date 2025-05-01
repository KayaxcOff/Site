document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#mesajFormu");
  
    form.addEventListener("submit", async function (event) {
      event.preventDefault(); // Sayfanın yenilenmesini engelle
  
      const formData = new FormData(form);
      
      try {
        const response = await fetch("https://formspree.io/f/mzzrdqdv", {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          alert("Mesajınız başarıyla gönderildi. Teşekkür ederim!");
          form.reset();
        } else {
          alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyin.");
        }
      } catch (error) {
        alert("Bir bağlantı hatası oluştu. Lütfen internetinizi kontrol edin.");
      }
    });
  });
