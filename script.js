let allTotal = 0; // ovo je za ukupnu cenu svih proizvoda u korpi

function addToCart(element) {
    let mainEl = element.closest(".single-item");
    let price = mainEl.querySelector(".price").innerText;
    let name = mainEl.querySelector("h3").innerText;
    let quantity = mainEl.querySelector("input").value;
    let cartitems = document.querySelector(".cart-items");//ovo je za selektovanje diva u kome se prikazuju proizvodi u korpi

    if (parseInt(quantity) > 0) {

        price = price.substring(1); // ovo je za skidanje dolara znaka sa cene da nismo ovo dodali onda bi bilo string + string a ne broj + broj
        price = parseInt(price); // ovo je za pretvaranje cene u broj
        let total = price * parseInt(quantity);// ovo je za racunanje ukupne cene proizvoda
        allTotal += total; // ovo je za racunanje ukupne cene svih proizvoda u korpi

        cartitems.innerHTML += `<div class="cart-single-item">
            <h3>${name}</h3>
            <p>${price} x ${quantity} = $<span>${total}</span></p> 
            <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
            </div>` ; // ovde je dodat span tag za total cenu proizvoda da bi ga lakse selektovali kada se ukloni proizvod iz korpe
        document.querySelector(".total").innerText = `Total: $${allTotal}`; // ovo je za ispis ukupne cene u korpi

        //`proizvod: ${name} cena: ${price} kolicina: ${quantity} Total: ${total} <br>`; // ovo je za ispis u korpi

        element.innerText = "Dodato"; // ovo je za dugme da se promeni tekst
        element.setAttribute("disabled", "true");// ovo je za dugme da se onemoguci kada se doda u korpu
    } else {
        alert("unesite kolicinu");
    }
}
// ovo je za uklanjanje proizvoda iz korpe
function removeFromCart(element) {
    let mainEl = element.closest(".cart-single-item");
    let price = mainEl.querySelector("p span").innerText;//mainEl je div cart-single-item, onda trazimo p tag unutar diva i span unutar p taga
    let name = mainEl.querySelector("h3").innerText;
    let vegetables = document.querySelectorAll(".single-item");
    price = parseInt(price);// ovo je za pretvaranje cene u broj
    allTotal -= price; // ovo je za oduzimanje cene proizvoda koji se uklanja iz korpe od ukupne cene svih proizvoda u korpi
    document.querySelector(".total").innerText = `Total: $${allTotal}`; // ovo je za ispis ukupne cene u korpi
    mainEl.remove(); // ovo je za uklanjanje proizvoda iz korpe
    
    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector(".si-content h3").innerText;
        if (itemName === name) {
            vege.querySelector(".actions input").value = 0;
            vege.querySelector(".actions button").removeAttribute("disabled");
            vege.querySelector(".actions button").innerText = "Dodaj";
        }




        });
    }


