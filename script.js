let open = document.querySelector(".open");
let close = document.querySelector(".close");
let side_bar = document.querySelector(".side-bar");

open.addEventListener("click", function () {
  close.style.display = "block";
  side_bar.style.display = "flex";
});

close.addEventListener("click", function () {
  close.style.display = "none";
  side_bar.style.display = "none";
});

const FetchData =
  "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json";
const images = [
  "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=2915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1681406994498-e2f24136108c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?q=80&w=2876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=2754&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1580217593608-61931cefc821?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1662116765994-1e4200c43589?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnVycml0b3xlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1503764654157-72d979d9af2f?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1664472637341-3ec829d1f4df?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1646488643615-84b4f85bb2c5?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1494315153767-9c231f2dfe79?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1600626334697-2b025169fb1e?q=80&w=3021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1715015439764-1e8d37d5c6c9?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586985288123-2495f577c250?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1707757442370-c86084c6ae0c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1709689156424-16fe0e05b47b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1700514184930-d842842d08a9?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1534939561126-855b8675edd7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

document.addEventListener("DOMContentLoaded", function () {
  let cardSection = document.querySelector(".card-section");

  function getMenu() {
    fetch(FetchData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((items, i) => {
          cardSection.innerHTML += `
        <div class="card">
            <img src=${images[i]} alt="" class="card-main-img">
            <div class="card-content">
                <div class="card-start-content">
                    <p class="food-name">${items.name}</p>
                    <p class="cost">$${items.price}/-</p>
                </div>
                <div class="card-end-content">
                    <img src="./Assets/image.png" alt="">
                </div>
            </div>
        </div>
        `;
        });
      });
  }

  getMenu();

  function takeOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const burgers = [
          { name: "Cheese Burger", price: 5.99 },
          { name: "Veggie Burger", price: 6.49 },
          { name: "Bacon Burger", price: 7.49 },
          { name: "Chicken Burger", price: 6.99 },
          { name: "Mushroom Burger", price: 6.79 },
          { name: "Double Cheese Burger", price: 8.99 },
          { name: "BBQ Burger", price: 7.99 },
          { name: "Fish Burger", price: 7.29 },
          { name: "Turkey Burger", price: 6.49 },
          { name: "Spicy Burger", price: 7.49 },
        ];

        const randomBurgers = [];
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * burgers.length);
          randomBurgers.push(burgers[randomIndex]);
        }

        resolve(randomBurgers);
      }, 2500);
    });
  }

  function orderPrep() {
    return new Promise((resolve) => {
      setTimeout(() => {
        let orderPrepObj = { order_status: true, paid: false };
        resolve(orderPrepObj);
      }, 1500);
    });
  }

  function payOrder() {
    return new Promise((resolve) => {
      setTimeout(() => {
        let payOrderObj = { order_status: true, paid: true };
        resolve(payOrderObj);
      }, 1000);
    });
  }

  function thankyou() {
    alert("thankyou for eating with us today!");
  }

  function main() {
    takeOrder()
      .then((order) => {
        console.log("Your Order:", order);
        return orderPrep();
      })
      .then((orderStatus) => {
        console.log("Order Preparation Status:", orderStatus);
        return payOrder();
      })
      .then((payOrderStatus) => {
        console.log("Payment Status:", payOrderStatus);
        if (payOrderStatus && payOrderStatus.paid) {
          thankyou();
        }
      });
  }
  main();
});

function secondScreen() {
  let hideMainImg = document.querySelector(".main_hero_img");
  hideMainImg.style.display = "none";
}
