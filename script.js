document.addEventListener("DOMContentLoaded", function() {
  const servicesSection = document.getElementById("servicesSection");
  const productsSection = document.getElementById("productsSection");
  const categorySelect = document.getElementById("categorySelect");

  const products = [
    { name: "Gaming CPU", description: "This is a gaming CPU for gaming enthusiasts by Zebronics", image: "https://5.imimg.com/data5/SELLER/Default/2022/8/QC/AX/EG/14979481/2o5a1015-hdr-edit.jpg" },
    { name: "Gaming Keyboard", description: "This is a gaming keyboard for gaming enthusiasts that will give you immense fun during gaming with inbuilt RGB lights.", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/desktop-keyboard/w/l/6/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpeg?q=90&crop=false" },
    { name: "Gaming Mouse", description: "Gaming Mouse designed especially for Gamers", image: "https://rukminim2.flixcart.com/image/850/1000/ky1vl3k0/mouse/m/q/m/2-4ghz-rechargeable-wireless-gaming-mouse-x8-professional-gaming-original-imagad723mv9vxyz.jpeg?q=20&crop=false" },
    { name: "Graphics Card", description: "Graphics Card by Nvidia", image: "https://m.media-amazon.com/images/I/514yE2DTYVL.jpg" },
    { name: "Pen Drive", description: "External Storage of 1 TB to extend your memory so that you can store more", image: "https://5.imimg.com/data5/SELLER/Default/2022/7/FQ/BK/UL/153609657/1-tb-data-storage-pen-drive.jpg" },
    { name: "Power Bank", description: "MI 20000mAh Power Bank so that you will never run low on battery.", image: "https://d2xamzlzrdbdbn.cloudfront.net/products/ed62b4e3-9038-4b5c-8610-58aa080efed0_416x416.jpg" }
  ];

  const services = [
    { name: "Profile Advertisement", description: "If you want your product to be noticed by everyone but don't know where to start! Don't worry we are here for you by advertising it to everyone." },
    { name: "Account Management", description: "We can manage your multiple accounts for you" }
  ];

  function displayProducts() {
    const selectedCategory = categorySelect.value;

    if (selectedCategory === "products") {
      servicesSection.style.display = "none";
      productsSection.style.display = "block";
      productsSection.innerHTML = "";

      products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
          <h2>${product.name}</h2>
          <img src="${product.image}" alt="${product.name}">
          <p>${product.description}</p>
        `;
        productsSection.appendChild(productElement);
      });
    } else if (selectedCategory === "services") {
      productsSection.style.display = "none";
      servicesSection.style.display = "block";
      servicesSection.innerHTML = "";

      services.forEach(service => {
        const serviceElement = document.createElement("div");
        serviceElement.classList.add("service");
        serviceElement.innerHTML = `
          <h2>${service.name}</h2>
          <p>${service.description}</p>
        `;
        servicesSection.appendChild(serviceElement);
      });
    }
  }

  displayProducts();

  categorySelect.addEventListener("change", displayProducts);
});
