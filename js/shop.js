const products = [
  { id: 1, name: "T-Shirt", price: 499, img: "https://thebanyantee.com/cdn/shop/files/White-T-shirt_f1ff4218-0807-441e-966a-7b3cf6c1bf63.jpg?v=1751219681" },
  { id: 2, name: "Shoes", price: 999, img: "https://www.walkaroo.in/cdn/shop/files/1_de6b4c76-85a1-4388-98c6-2eb15646d101.jpg?v=1753517388&width=1600" },
  { id: 3, name: "Shirt", price: 799, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1mDAi1lbbZE0NZApzPHdbE4PMs0TOTqE1xJKrz64IfkHU8SMA5HDDFwTT-I8tRA7l8eEdTjQKLNSreu15CuBwvcptk-kO-NJHfz7N2s7sF6KGa7yKmZlj" },
  { id: 4, name: "Jeans", price: 1199, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQhp1BjaZIc5-iprhVzHYVkUtWRnACKGZBnU8Er16lovvx73g9hhe8cSZ0XakhZfwwC2fwq79xvHQnadocAdIgpDTKWCCEA2J-EzL4BSUv5" },
  { id: 5, name: "Jacket", price: 1599, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQv6F0CnmB_5X4MK8vvFZwO0DEyfrEcc9bnUcAEtMkkbM_2H7Z85y_FdCc_-By9kRLSfhU4EHEq9z-16HNX1D8PY-OBSsxLyJJbQShTP0CZxqhTpDnlZgMYfw" },
  { id: 6, name: "Watch", price: 1999, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlqmg1n_EHjNbc2OZiVfp5Sm8kJWGXxLzMEknHk3z4JvW_sxBsr4LhQfvFVXWQrgyEZtnlevBK1LBygSm3Lbuqq4PkYAVN" },
  { id: 7, name: "Backpack", price: 1499, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRSkfk9xVrB73OyeveZstpeImxLl6L0q6ebA&s" },
  { id: 8, name: "Wallet", price: 499, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMakaBw-qGSSpiKF6fuVzDJLdEO8VUxXgriWRYyoIKqDmjjcJYvXghnl9BePRQdSZULoGSmP9FQNRCJh8XdedTDEw51vmE8GOfZQFMqXIz-5P5sreVogDoxHY" },
  { id: 9, name: "Sunglasses", price: 699, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTuvgzPjuVQ11f3HqyPUGmu9Pj94bKPOOYDuZLeC8hfhKPpwHQZ8sOyXXGgAeQpV8Ol8PKf6csnozZhngRDjxtkiN346OxjIAmQ5a0kDV-QSl3gxL2bygHK" },
  { id: 10, name: "Cap", price: 299, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNgibvFJOcbfIoDtOkl4Fj6Qppb-CTb5Fhw&s" },

  { id: 11, name: "Laptop", price: 45999, img: "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/n/e/new-image-for-dell-dc16250-laptop-sl.png" },
  { id: 12, name: "Headphones", price: 1999, img: "https://trysonos.in/cdn/shop/files/product-img1_ba44c421-f0d8-488e-ae57-3c7aae7c7884.avif?v=1769060581&width=832" },
  { id: 13, name: "Keyboard", price: 1299, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOcgspgKe0ILDTpoHfyB3hlXD0JUt5aAs_EY1HRy9-QbbWVOqVLg3jYczHTLfMhsKy-7zHjKrDcJjQ5AxjzKqbgPc7MFCGjsXSTwg6jonVEkF7wXJ10m6uVQ" },
  { id: 14, name: "Mouse", price: 799, img: "https://image.benq.com/is/image/benqco/ec2-dw-top?$ResponsivePreset$&fmt=png-alpha" },
  { id: 15, name: "Monitor", price: 12999, img: "https://image.benq.com/is/image/benqco/01-ma320u-product-01?$ResponsivePreset$" },

  { id: 16, name: "Water Bottle", price: 299, img: "https://bedcetera.in/cdn/shop/files/IMG_3181_1.heic?v=1745313579&width=1080" },
  { id: 17, name: "Coffee Mug", price: 399, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQpyoLgWhEzVgRaoAz8gQdhESAbFXi0DuVGlJCfIp_lhT0Fgpdlk-oYgbFrjrMZtUauH22_D4J7MTx1B2F1XIG7DcV9bI4StMuGdBfb50A" },
  { id: 18, name: "Plate", price: 499, img: "https://icmedianew.gumlet.io/pub/media/catalog/product/cache/7c90eecf75182456ca0a208cc3917af8/i/n/india-circus-by-krsnaa-mehta-sky-dinner-plate-set-of-2-52152000sd02253-2.jpg" },
  { id: 19, name: "Cutlery Set", price: 999, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSub4EWF_V3emjuZb03pZAdVmrHKIJybSIg5CikkuIuNhpjVVu8lAYtZin34MIkNQqrcJAsmQTnXBPnENriqHftgeLJHNZ5djuphCX3NZtX5nxqWrqkAeP2Y2I" },
  { id: 20, name: "Electric Kettle", price: 1499, img: "https://m.media-amazon.com/images/I/41JJWFk14hL.jpg" },

  { id: 21, name: "Football", price: 799, img: "https://m.media-amazon.com/images/I/31UFMLIyMHL._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 22, name: "Cricket Bat", price: 1499, img: "https://m.media-amazon.com/images/I/318f+PL-NmL._SL1000_.jpg" },
  { id: 23, name: "Tennis Racket", price: 1999, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTMoXj4lZ9AZvM-gisMh4K87hSi6jYYVuLFXDySAzvUMfb-tvx26Nj97wchH1z9X22knZ9B4qu-CGEU9ePFIKOZYunyyqsCqomX1GyfhpQ_FKp8G0J10eOiM6U" },
  { id: 24, name: "Yoga Mat", price: 999, img: "https://www.bombaymerchandisingco.com/wp-content/uploads/2025/07/1000785171-768x541.jpg" },
  { id: 25, name: "Dumbbells", price: 1499, img: "https://m.media-amazon.com/images/I/71nxADFJzWL._SL1500_.jpg" },

  { id: 26, name: "Perfume", price: 2499, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdkNv93ObxpaIfwXpUxO90t2HOoOf2AslrPLB-ZfQbl5Gor87HG6q0t7hiFXOyJKmp4apdvpvlPe9UpiT287gnM-CfANnlZokkJcwjv7pkPM5guYXV-FClb8M" },
  { id: 27, name: "Lipstick", price: 799, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRDNt8i53y1aAp3xpsAeQu1Mf9udDXh1PscUx1h41G2EBmPMJvOLc4RGtu1PEbbFYljiLmtAo3-aFXRZIoWAOiuTuy8NjrulODLcjFAQ2tDv0k5dgxFvbkxMUQ" },
  { id: 28, name: "Hair Dryer", price: 1299, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSearyTeAQb7R08mFUacCGAmDAt9q43MTV-p9ODiW3nOfqEPLeACwKf9ce_k6ngH3-QNFzxaoOwQouGhmZVTI93C0aLQPrlTz3GODwIMCcsPHBdocjboui-a1s" },
  { id: 29, name: "Toothbrush", price: 199, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTT1zAfMDFcA-bg_KCPSpUlNlbWv9aP30-Hlk6WsHe4SfnbGiHLMcJKE3jE547eWLEwONT9dsLjRrmQ1VPEEppZvp9xxpAlzw" },
  { id: 30, name: "Face Wash", price: 299, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZ_aIu7fmqjac1DJ3KDEyMndj6F8ofX2Mf8xYhX3FaUe05sXer5dsh-5mJPjGlHJSBgwv3eJlP5T9r8o_vY3-M-XIoQgAWNAW2NcD2mCAWFn52KOdJEhs6IjA" },

  { id: 31, name: "Chennai Super Kings Jersey", price: 899, img: "https://playr.in/cdn/shop/files/21_cb65f67c-a1f2-4416-8b83-ecf951a0d869.jpg?v=1756795718" },
  { id: 32, name: "Mumbai Indians Jersey", price: 899, img: "https://d3pc1xvrcw35tl.cloudfront.net/ln/images/1200x900/lokmat-times-2024-03-07t144046.303_202403702592.png" },
  { id: 33, name: "Indian Jersey", price: 1999, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7z8kAhQUu72xUBS3tOmFM6Y1yT5_nOiBqUOHve9KipDDjQCveSaLB0Ik_UtZ9W_2aV-t2z6MLazAOCzGkborAltcWrbzidw" },
  { id: 34, name: "RCB Jersey", price: 899, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ_afE3DEGaBQ2JhV-IVXH7NzfXCOppW5w5AWSufrU-tawtRi5eRsIie3FLrjPP_dc1uMN-gnorc6-3WzvMPLFq1X-cfLuNnnONMUHyvyFz6IizlLvTHf7g" },
  { id: 35, name: "Punjab Kings Jersey", price: 899, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVmeQSWJqivyjF4CZyPhaiQRMuC0_y1o4jtA&s" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
const grid = document.getElementById("products");
const count = document.getElementById("count");

function render() {
  grid.innerHTML = "";
  products.forEach(p => {
    grid.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="add(${p.id})">Add to Cart</button>
      </div>`;
  });
  
  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
  count.textContent = totalItems;
}

function add(id) {
  const product = products.find(p => p.id === id);
  
  const existingItem = cart.find(item => item.id === id);
  
  if (existingItem) {
    existingItem.qty = (existingItem.qty || 1) + 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1
    });
  }
  
  localStorage.setItem("cart", JSON.stringify(cart));
  
  render();
}

function goCart() { 
  window.location = "cart.html"; 
}

render();