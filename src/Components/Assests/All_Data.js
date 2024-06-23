import men1_img from "./men1.png";
import p2_img from "./model3.png";
import p1_img from "./model2.png";
import p3_img from "./model4.png";
import p4_img from "./model5.png";
import kid1_img from "./kid1.png";

let all_product = [
  {
    id: 1,
    name: "Casual Dress for Women",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 2,
    name: "party wear western dress for women",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: p2_img,
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 3,
    name: "Designer Traditional Glass Satin Saree .",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: p3_img,
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 4,
    name: "New Churidar Designs For Women in 2024",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: p4_img,
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },

  {
    id: 5,
    name: "Casual Dress for Women",
    category: "kid",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: kid1_img,
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 6,
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    new_price: 56.99,
    old_price: 90.0,
    size: "",
  },
  {
    id: 7,
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    new_price: 29.95,
    old_price: 50.0,
    size: "",
  },
  {
    id: 8,
    name: "Regular Fit Linen-blend Shirt",
    category: "men",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/d5/9a/d59a0a9ccd4cc6ddeff0ffec007ae718b82e70fe.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 9,
    name: "Casual Dress for Women",
    category: "men",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: men1_img,
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 10,
    name: "Ruffle-trimmed Cotton Dress",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    category: "kid",
    image:
      "https://image.hm.com/assets/hm/10/6b/106b92a9900778698f4356c59bd19b2bdf74bfc6.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 11,
    name: "3-pack T-shirts",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    category: "kid",
    image:
      "https://image.hm.com/assets/hm/d0/d0/d0d059bed27bf3decce7f444d138ea11557281d8.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 12,
    name: "Regular Fit Linen-blend Shirt",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    category: "men",
    image:
      "https://image.hm.com/assets/hm/f7/fc/f7fc4504943c0e170725142acbb5374d2c14f4c4.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 13,
    name: "Skinny Fit Suit Pants",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    category: "men",
    image:
      "https://image.hm.com/assets/hm/30/f6/30f6c2484e78b9e4d823fe5a66edaaaa215e7ad9.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 14,
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    new_price: 39.99,
    old_price: 70.99,
    size: "",
  },
  {
    id: 15,
    name: "MBJ Women's Solid Short Sleeve Boat Neck V",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    new_price: 40.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 16,
    name: "2-piece Printed Set",
    category: "kid",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/be/fb/befbd4df37700a52444eeade71e9107092503424.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 17,
    name: "Cotton Paper-bag Shorts",
    category: "kid",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/60/24/6024921db3308c94acc8f040f7a8d28eeb6fed54.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 18,
    name: "Relaxed Fit Appliquéd Sweatshirt",
    category: "men",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/ca/d2/cad20940729fa245d537291fc4a52166166da311.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 19,
    name: "Designer Traditional Glass Satin Saree .",
    category: "men",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/19/63/1963f78945f45ae8ea8c7f784c48197d7579675e.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 20,
    name: "Opna Women's Short Sleeve Moisture",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    new_price: 20.0,
    old_price: 40.5,
    size: "",
  },
  {
    id: 21,
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    category: "women",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 22,
    name: "Printed T-shirt",
    category:
      "https://image.hm.com/assets/hm/b5/f1/b5f1782e3da357dec2b0bce81c818efd23db6afa.jpg",
    image: kid1_img,
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 23,
    name: "3-pack Ribbed Bike Shorts",
    category: "kid",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/fb/92/fb922348c5f3b617eb78f85b6b2c066ab564ad83.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 24,
    name: "Regular Fit Linen-blend Shorts",
    category: "men",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/57/71/5771ff8f0f51ae8e15ab08b46901049986713721.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 25,
    name: "Slim Fit Jersey Jacket",
    category: "men",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/a9/66/a9666ee236f736bbb43560cb9fc6f9ee6ccc1624.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 26,
    name: "Linen Shirt",
    category: "women",
    description:
    "Shirt in airy linen. Collar, buttons at front, and a patch chest pocket. Gently dropped shoulders, long sleeves with button at cuffs, and double-layered yoke at back. Gently rounded hem.",
    image: "https://image.hm.com/assets/hm/2f/69/2f69a5fda82d6ff174e192296b9cc531c320265a.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 27,
    name: "Regular Fit Linen Pants",
    category: "men",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/5a/7c/5a7cd4c403fa62a41165dfa2ff888ce914321b94.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 28,
    name: "Patterned Cotton Dress",
    category: "kid",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/dd/b9/ddb99959e67a4fd59adc6cea8a7d4e69f9d8fd5d.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },

  {
    id: 29,
    name: "Ribbed Jersey Top",
    category: "kid",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/d7/b5/d7b59db3a738e28450b3bd863aacc2468fbab53a.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 30,
    name: "Flounce-trimmed Jersey Dress",
    category: "kid",
    description:
      "Knee-length, sleeveless dress in airy, woven cotton fabric. Ruffle-trimmed shoulder straps, square neckline with covered elastic at back, faux wood buttons at front, and a gathered seam at midsection",
    image:
      "https://image.hm.com/assets/hm/bd/b6/bdb6c792bfd9383dc9b9ea8224d88014db5f337b.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 31,
    name: "Cotton Jersey T-shirt",
    category: "kid",
    description:
    "T-shirt in soft cotton jersey with a printed design. Ribbed neck and a snap fastener on one shoulder (sizes 2–4Y without snap fastener).",
    image:
    "https://image.hm.com/assets/hm/6a/ec/6aec866f7d1313922ebf495b7c83c417d5d2de45.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 32,
    name: "Short-sleeved Patterned Shirt",
    category: "kid",
    description:
    "The Floral Story. Short-sleeved shirt in crisp cotton poplin with a printed floral design. Collar, buttons at front, and a gently rounded hem, slightly longer at back.",
    image:
    "https://image.hm.com/assets/hm/05/45/05455976052d2415dad801aebe8314d20283cbf0.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 33,
    name: "Printed T-shirt",
    category: "kid",
    description:
    "Classic T-shirt in soft jersey with a printed design. Round, ribbed neck and a straight-cut hem.",
    image:
    "https://image.hm.com/assets/hm/b5/f1/b5f1782e3da357dec2b0bce81c818efd23db6afa.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 34,
    name: "Regular Fit Textured-weave Resort Shirt",
    category: "men",
    description:
    "Regular-fit shirt in textured, woven cotton fabric with a comfortable, classic silhouette. Resort collar, buttons without placket, and a straight-cut hem.",
    image:
    "https://image.hm.com/assets/hm/e5/e0/e5e06efb6a6375bab30fb6ce04f6ec908d357834.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 35,
    name: "Slim Fit Waffled Polo Shirt",
    category: "men",
    description:
    "Slim-fit polo shirt in waffled, cotton-blend jersey. Ribbed collar, button placket, and short sleeves. Straight-cut hem with small slit at sides.",
    image:
    "https://image.hm.com/assets/hm/86/21/86217fddf680494152081271b9ad0d14c823dac7.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 36,
    name: "Baggy Jeans",
    category: "men",
    description:
    "5-pocket jeans in non-stretch cotton denim for denim perfection. Rounded legs and baggy fit from seat to hem with plenty of room around legs. Regular waist, zip fly, and dropped gusset. Stacked at ankle.",
    image:
    "https://image.hm.com/assets/hm/a9/c9/a9c948b779d1d73c401e3dc5325a9ddf8bc82f0a.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
  {
    id: 37,
    name: "Puff-sleeved Midi Dress",
    category: "women",
    description:
    "Calf-length dress in airy, woven viscose fabric. Square neckline at front with a keyhole opening and narrow ties. Fitted bodice with shaped cups, visible seam at waist, smocked section at back, and a concealed zipper at one side. Short puff sleeves with narrow elastic over shoulders and at cuffs. Gently flared skirt and straight-cut hem with a high slit at one side of front.",
    image:
    "https://image.hm.com/assets/hm/4f/cc/4fcc4e04544ec16f33c492d60044a7c345a1252d.jpg",
    new_price: 50.0,
    old_price: 80.5,
    size: "",
  },
];

export default all_product;
