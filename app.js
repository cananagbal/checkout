const taxRate = 0.18; //vergiyi değişkene atadık.
const shippingPrice = 15 // kargo ücreti değişecekse diye kargo ücretini de bir değişkene atadık
// projede değişkenlik gösterecek şeyleri değişkene atıyoruz.

const shippingFreePrice = 300; //300 dolara kadar kargo ücreti bedava, yarın değiştirirsek diye değişkene atıyoruz. 

window.addEventListener("load", ()=>{ //sayfa yüklendiğinde ilk açıldığında veriler DOMa ilk basıldığında değişkenleri localStoragede tutmak istiyoruz.
    localStorage.setItem("taxRate", taxRate);  //localStorage gönderme yapıyoruz key ve value şeklinde
    localStorage.setItem("shippingPrice",shippingPrice); //locale setItem diyerek gönderiyoruz.
    localStorage.setItem("shippingFreePrice", shippingFreePrice);

    // sessionStorage.setItem("taxRate", taxRate);  //sessionStorage gönderme yapıyoruz key ve value şeklinde
    // sessionStorage.setItem("shippingPrice",shippingPrice);
    // sessionStorage.setItem("shippingFreePrice", shippingFreePrice);

    //localStorage de tutulan veriler tarayıcı kapansa da kaybolmaz sessionStorage de tutulan veriler tarayıcı kapandığı zaman veriler gider.
})

const productsDiv = document.querySelector(".products") //bütün alanı seçtik.
productsDiv.addEventListener("click", (event) => {  //bütün alandan tıklamak istediğimiz yeri seçtik.
    // console.log(event.target); //tıkladığımız yeri yakalıyor. dış sınır belirleniyor sonra içeriden yakalama yapılıyor buna capturing deniyor. parentten child e doğru gidiyor.
    if (event.target.className == "fa-solid fa-minus") { //tıkladığımız yerin classı - yi içeriyorsa yani eksiyi tıkladı isek;
        if(event.target.parentElement.querySelector(".quantity").innerText > 1){ //eğer tıkladığımız yer birden büyükse bir bir azalt diyoruz
            event.target.parentElement.querySelector(".quantity").innerText--

        }else{
            if(confirm(`${event.target.parentElement.parentElement.querySelector("h2").innerText} will be deleted!!!`)){ //eksiye tıkladığımızda ve confirm geldiğinde evet dersek 
                event.target.closest(".product").remove() //en yakın ürünü siler

            }
        }

    
        
    }else if (event.target.className == "fa-solid fa-plus"){ //tıkladığımız yer + ise
        event.target.previousElementSibling.innerText++; // +nın bir öncesi değeri bir arttır
    }else if (event.target.className == "remove-product"){ //remove tıkladığımız zaman
        // event.target.parentElement.parentElement.parentElement.remove() // 
        event.target.closest(".product").remove()
    }

    calculateProductPrice(event.target);
    calculateCartPrice()

});

const calculateProductPrice = (btn) => { //ürün fiyatı ile ürün sayısını carpıp productTotale yazdıracağız

    const productInfoDiv = btn.parentElement.parentElement;

    const price = number(productInfoDiv.querySelector(".product-price strong").innerText);
    productTotalDiv.innerText = (price *quantity).toFixed(2);
    const quantity = Number(productInfoDiv.querySelector(".quantity").innerText);
    const productTotalDiv = productInfoDiv.querySelector(".price");
       

}


const calculateCardPrice = () => {
    const productTotalPricesDivs = document.querySelectorAll(".price");
    [...productTotalPricesDivs].reduce((acc, price)=> acc+ Number(price.innerText), 0);
    const taxPrice = subtotal * lacalStorage.getItem("taxRate")
    
    document.querySelector("#subtotalCart").innerText = subtotal.toFixed(2)
}
