function add_element(tayp0f_ele, name_ele, class_ele) {
  const ele = document.createElement(tayp0f_ele);
  ele.textContent = name_ele;
  ele.className = class_ele;
  return ele;
}
function open_close(clc, event) {
  clc.onclick = () => {
    event.classList.toggle("active");
  };
}
const boxOfProdact = document.querySelector(".box-of-prodact");
const numberOfitem = document.querySelector(".count-item-header");
const closePro = document.querySelector(".close-box");
const checkout = add_element("button", "checkout", "checkout");
const items_checkout = document.querySelector(".items");
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

fetch("products.json")
  .then((Response) => Response.json())
  .then((data) => {
    // console.log(data);
    const b0xOfFavorit = document.querySelector(".box-of-favorit");
    const all_favorite = document.querySelector(".all-favorit");
    const allprodact = document.querySelector(".all-prodact");
    const swiperItemsSale = document.getElementById("swiper-items-sale");
    const swiperItemsElecSale = document.getElementById("swiper-items-elec");

    const swiperItemsMopsale = document.getElementById("swiper-items-mop");
    const swiperItemsAppSale = document.getElementById("swiper-items-app");
    let current = 0;
    let totell = 0;
    data.forEach((prodact) => {
      if (prodact.old_price) {
        const present_disc = Math.floor(
          ((prodact.old_price - prodact.price) / prodact.old_price) * 100,
        );
        swiperItemsSale.innerHTML += `
               <div class="swiper-slide prodact">
              <span class="sale-present">%${present_disc}</span>
              <div class="img-prodact">
                <a href="#"><img src="${prodact.img}" alt="" /></a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name-prodact">
                <a href="#">${prodact.name}</a>
              </p>
              <div class="price">
                <p><span>$${prodact.price}</span></p>
                <p class="old-price">$${prodact.old_price}</p>
              </div>
              <div class="icons">
                <span class="btn-add-cart">
                  <i class="fa-solid fa-cart-shopping"></i>Add To Card
                </span>
                <span class="icon-ptodact">
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
            </div>`;
      }
    });
    data.forEach((prodact) => {
      if (prodact.catetory === "electronics") {
        swiperItemsElecSale.innerHTML += `
               <div class="swiper-slide prodact">
              <div class="img-prodact">
                <a href="#"><img src="${prodact.img}" alt="" /></a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name-prodact">
                <a href="#">${prodact.name}</a>
              </p>
              <div class="price">
                <p><span>$${prodact.price}</span></p>
              </div>
              <div class="icons">
                <span class="btn-add-cart">
                  <i class="fa-solid fa-cart-shopping"></i>Add To Card
                </span>
                <span class="icon-ptodact">
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
            </div>`;
      }
    });
    data.forEach((prodact) => {
      if (prodact.catetory === "mobiles") {
        swiperItemsMopsale.innerHTML += `
               <div class="swiper-slide prodact">
              <div class="img-prodact">
                <a href="#"><img src="${prodact.img}" alt="" /></a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name-prodact">
                <a href="#">${prodact.name}</a>
              </p>
              <div class="price">
                <p><span>$${prodact.price}</span></p>
              </div>
              <div class="icons">
                <span class="btn-add-cart">
                  <i class="fa-solid fa-cart-shopping"></i>Add To Card
                </span>
                <span class="icon-ptodact">
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
            </div>`;
      }
    });
    data.forEach((prodact) => {
      if (prodact.catetory === "appliances") {
        swiperItemsAppSale.innerHTML += `
               <div class="swiper-slide prodact">
              <div class="img-prodact">
                <a href="#"><img src="${prodact.img}" alt="" /></a>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p class="name-prodact">
                <a href="#">${prodact.name}</a>
              </p>
              <div class="price">
                <p><span>$${prodact.price}</span></p>
              </div>
              <div class="icons">
                <span class="btn-add-cart">
                  <i class="fa-solid fa-cart-shopping"></i>Add To Card
                </span>
                <span class="icon-ptodact">
                  <i class="fa-regular fa-heart"></i>
                </span>
              </div>
            </div>`;
      }
    });

    var swiperHotDeles = new Swiper(".slide-prodact", {
      slidesPerView: 5,
      spaceBetween: 20,
      navigation: {
        nextEl: ".box-next",
        prevEl: ".box-prev",
      },
      autoplay: {
        delay: 2500,
      },
      loop: true,
      breakpoints: {
        1200: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        700: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        0: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
    });

    const addToCard = document.querySelectorAll(".btn-add-cart");

    // زر اضافة عنصر الى سله المشتريات
    addToCard.forEach((add) => {
      add.addEventListener("click", (e) => {
        const numq = 1;
        const card = e.target.closest(".prodact");

        const imgPro = card.querySelector("img");
        const namePro = card.querySelector(
          ".name-prodact a, .name-prodact-elec a, .name-prodact-mop a",
        );
        const pricePro = card.querySelector(
          ".price span, .price-elec span, .price-mop span",
        );
        const prodauctName = namePro.textContent.trim();
        const exists = boxOfProdact.querySelector(
          `[data-name="${prodauctName}"]`,
        );

        if (exists) {
          add.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>sorry it is alredy added`;
          return;
        }
        cartItems.push({
          name: prodauctName,
          img: imgPro.src,
          price: parseFloat(pricePro.textContent.replace("$", "")),
          quantity: 1,
        });

        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        // أنشئ عنصر جديد لكل منتج
        const item = document.createElement("div");
        item.className = "prodact-pro";
        item.dataset.name = prodauctName;

        // أنشئ صندوق النصوص
        const textBox = add_element("div", "", "text-box");

        // انسخ العناصر
        const img = imgPro.cloneNode(true);
        const name = namePro.cloneNode(true);
        const price = pricePro.cloneNode(true);

        // ضيف النصوص داخل textBox
        textBox.appendChild(name);
        textBox.appendChild(price);
        // انشاء الزائد و الناقص
        const pluse = add_element("button", "+", "pluse");
        // انشاء الكميه للمنتجات المرغوب الشراء فيها
        const quntity = add_element("span", numq, "quntity");

        const minse = add_element("button", "-", "minse");

        // انشاء الحاويه للزياده و النقصان
        const addCansel = document.createElement("div");
        addCansel.className = "add-cansel";
        addCansel.appendChild(pluse);
        addCansel.appendChild(quntity);
        addCansel.appendChild(minse);
        // انشاء زر الحذف
        const deletee = add_element("i", "", "del fa-solid fa-trash-can");

        // انشاء الخط الفاصل بين كل منتج
        const linePro = add_element("div", "", "line-pro");

        // ضيف الصورة والنصوص داخل العنصر الجديد
        item.appendChild(img);
        item.appendChild(textBox);
        item.appendChild(addCansel);
        item.appendChild(deletee);
        item.appendChild(linePro);

        // ضيف العنصر داخل السلة
        allprodact.appendChild(item);

        // تحديث العداد
        numberOfitem.textContent = ++current;

        add.innerHTML = `<i class="fa-solid fa-cart-shopping" style="color: orange;"></i>item in card`;
        add.style.backgroundColor = "#fefefe";
        add.style.color = "orange";
        //عداد المنتجات داخل السله
        const numOfPro = document.querySelector(".num-of-pro");
        numOfPro.textContent = current;
        const bickPrice = parseFloat(pricePro.textContent.replace("$", ""));
        totell += bickPrice;
        totelPrice.textContent = "$ " + totell;
        // تفعيل زر الزياده
        pluse.onclick = () => {
          let q = parseInt(quntity.textContent);
          q++;
          quntity.textContent = q;

          let basePrice = parseFloat(pricePro.textContent.replace("$", ""));
          price.textContent = "$" + basePrice * q;

          totell += bickPrice;
          totelPrice.textContent = "$ " + totell;
          const itemInStorage = cartItems.find((p) => p.name === prodauctName);
          itemInStorage.quantity = q;
          itemInStorage.price = basePrice * q;

          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        };
        // تفعيل زر النقصان

        minse.onclick = () => {
          let q = parseInt(quntity.textContent);
          if (q > 1) {
            q--;
            quntity.textContent = q;

            let basePrice = parseFloat(pricePro.textContent.replace("$", ""));
            price.textContent = "$" + basePrice * q;
            totell -= basePrice;
            totelPrice.textContent = "$ " + totell;
          } else {
            item.remove();
            numberOfitem.textContent = --current;
            add.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Add To Card`;
            add.style.backgroundColor = "orange";
            add.style.color = "#fff";
          }
          const itemInStorage = cartItems.find((p) => p.name === prodauctName);
          itemInStorage.quantity = q;
          itemInStorage.price = basePrice * q;

          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        };
        // تفعيل زر الحذف
        deletee.onclick = (e) => {
          e.stopPropagation();
          item.remove();
          numberOfitem.textContent = --current;
          add.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>Add To Card`;
          add.style.backgroundColor = "orange";
          add.style.color = "#fff";
          numOfPro.textContent = current;
          const itemPrice = parseFloat(price.textContent.replace("$", ""));
          totell -= itemPrice;
          totelPrice.textContent = "$ " + totell;
          cartItems = cartItems.filter((p) => p.name !== prodauctName);
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
        };
      });
    });
    // checkout.onclick = () => {
    //   const items = [];

    //   document.querySelectorAll(".prodact-pro").forEach((item) => {
    //     items.push({
    //       name: item.dataset.name,
    //       img: item.querySelector("img").src,
    //       price: item.querySelector(".text-box span").textContent,
    //       quantity: item.querySelector(".quntity").textContent,
    //     });
    //   });

    //   localStorage.setItem("checkoutItems", JSON.stringify(items));
    //   window.location.href = "checkout.html";
    // };

    // زر اغلاق السله
    open_close(closePro, boxOfProdact);

    // زر فتح السله
    open_close(numberOfitem, boxOfProdact);

    // اضافة اجزاء المجموع للمنتجات
    // اضافة الحاويه
    const totel = add_element("div", "", "totel");

    // اضافة حاوية ال span
    const boxoftotel = add_element("div", "", "boxoftotel");

    // اضافة span
    const subtotal = add_element("p", "subtotal", "subtotal");

    // اضافة المجموع
    const totelPrice = add_element("span", "$ 0", "totel-Price");

    // اضافة حاوية الازار
    const boxofbutton = add_element("div", "", "boxofbutton");

    // اضافة الازرار

    const shopMore = add_element("button", "shop More", "shopMore");

    // اضافة للعنصر الاب
    boxofbutton.appendChild(checkout);
    boxofbutton.appendChild(shopMore);

    // اضافة العناصر للاب الرئيسي
    boxoftotel.appendChild(subtotal);
    boxoftotel.appendChild(totelPrice);
    totel.appendChild(boxoftotel);
    totel.appendChild(boxofbutton);

    // اضافة العنصر الاب  للسله
    boxOfProdact.appendChild(totel);
    shopMore.onclick = () => {
      boxOfProdact.style.display = "none";
    };

    const Favorite = document.querySelectorAll(".icon-ptodact");
    const countFavorite = document.querySelector(".count-favorite");
    let currentFavorit = 0;
    function counter(num_1, num_2) {
      num_1.textContent = currentFavorit;
      num_2.textContent = currentFavorit;
    }

    const numOfFav = document.querySelector(".num-of-fav");

    Favorite.forEach((e) => {
      // نخزن العنصر المضاف لهذا الزر
      let item_f = null;

      e.addEventListener("click", (c) => {
        // =========================
        // إذا المنتج موجود → احذفه
        // =========================
        if (e.classList.contains("active")) {
          if (item_f) {
            item_f.remove();
            item_f = null;
          }

          e.classList.remove("active");

          e.style.backgroundColor = "";

          e.innerHTML = `
        <span class="icon-ptodact">
          <i class="fa-regular fa-heart"></i>
        </span>
      `;

          currentFavorit--;

          counter(countFavorite, numOfFav);

          return;
        }

        // =========================
        // إذا المنتج غير موجود → أضفه
        // =========================

        const card_f = c.target.closest(".prodact");

        const imge_f = card_f.querySelector(".img-prodact img");
        const name_f = card_f.querySelector(".name-prodact a");
        const price_f = card_f.querySelector(".price p span");

        // نسخ بيانات المنتج
        const imgc = imge_f.cloneNode(true);
        const namec = name_f.cloneNode(true);
        const pricec = price_f.cloneNode(true);

        // زر الحذف
        const favorit_rem = add_element("button", "remove", "remove-favorite");

        // إنشاء عنصر المفضلة
        item_f = document.createElement("div");

        item_f.className = "item_f";

        item_f.style.height = "130px";

        // الخط
        const linePro = add_element("div", "", "line-pro");

        // إضافة العناصر
        item_f.appendChild(imgc);
        item_f.appendChild(namec);
        item_f.appendChild(pricec);
        item_f.appendChild(favorit_rem);
        item_f.appendChild(linePro);

        // إضافة للمفضلة
        all_favorite.appendChild(item_f);

        b0xOfFavorit.appendChild(all_favorite);

        // =========================
        // تغيير شكل القلب
        // =========================

        e.classList.add("active");

        e.style.backgroundColor = "orange";

        e.innerHTML = `
      <span class="icon-ptodact">
        <i class="fa-solid fa-heart" style="color: #fff;"></i>
      </span>
    `;

        // زيادة العداد
        currentFavorit++;

        counter(countFavorite, numOfFav);

        // =========================
        // زر remove
        // =========================
        function remove_pro(item) {
          item.remove();

          item = null;
        }
        favorit_rem.onclick = (event) => {
          event.stopPropagation();
          remove_pro(item_f);

          e.classList.remove("active");

          e.style.backgroundColor = "";

          e.innerHTML = `
        <span class="icon-ptodact">
          <i class="fa-regular fa-heart"></i>
        </span>
      `;

          currentFavorit--;

          counter(countFavorite, numOfFav);
        };
      });
    });

    // حذف جميع المنتجات من المفضله
    const clearAll = add_element("button", "Clear All", "clear-all");
    clearAll.onclick = () => {
      currentFavorit = 0;
      all_favorite.innerHTML = "";
      counter(countFavorite, numOfFav);

      Favorite.forEach((e) => {
        e.classList.remove("active");

        e.style.backgroundColor = "";

        e.innerHTML = `
        <span class="icon-ptodact">
          <i class="fa-regular fa-heart"></i>
        </span>
      `;
      });
    };

    b0xOfFavorit.appendChild(clearAll);
    // إغلاق المفضلة
    const closeBoxf = document.querySelector(".close-box-f");
    open_close(closeBoxf, b0xOfFavorit);

    // فتح المفضلة
    open_close(countFavorite, b0xOfFavorit);

    // اغلاق ال links

    const closeMinu = document.querySelector(".close-minu");
    const minue_links = document.querySelector(".nav .category-nav .links");

    open_close(closeMinu, minue_links);

    // فتح ال links
    const openLinks = document.querySelector(".open-links");
    open_close(openLinks, minue_links);
  });

// Language
const traislation = {
  en: {
    Alrowsi: "Alrwasi",
    online_Shopp: "online shopp",
    translation: "translation",
    Englesh: "Englesh",
    Arabic: "Arabic",
  },
  ar: {
    Alrowsi: "الرواسي",
    online_Shopp: "متجر الكتروني",
    translation: "الترجمه:",
    Englesh: "انجليزي",
    Arabic: "عربي",
  },
};
const Language = document.getElementById("Language");

Language.addEventListener("change", (event) => {
  setlanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});
document.addEventListener("DOMContentLoaded", () => {
  const languge = localStorage.getItem("lang");
  Language.value = languge;

  setlanguage(languge);
});
const setlanguage = (Language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translitionKey = element.getAttribute("data-i18n");
    element.textContent = traislation[Language][translitionKey];
  });
  document.dir = Language === "ar" ? "rtl" : "ltr";
};
// end Language
