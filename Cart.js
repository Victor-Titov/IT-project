// var data;
// async function fetchData() {
//     try {
//       const response = await fetch("assets/js/data.json");
//       const jsondata = await response.json();
//       //console.log(jsondata); // This will log the jsondata after it has been fetched
//       return jsondata;
//     } catch (error) {
//       console.error('Error fetching the data:', error); // Handle errors
//     }
//   }
// data = fetchData()
// const returnData = async () =>{
//     const a=await data;
//     //console.log(a);
//     return a;
// }

// var obj = returnData();
// console.log(obj);
// const data = async () =>{
//     fetch("assets/js/data.json")
//     .then((response)=>response.json())
//     .then((item)=>{
//         const tmp=item.results.map(result => result.id);
//         console.log(tmp);
//         return tmp;
//     })

// }

// data();


items = [
  {
    id: 0,
    name: "laptop",
    rname: "laptop",
    price: 1999.99,
    qty: 5,
    cat: "special offers",
    img: "products/specialoffers/laptop.jpg",
    imga: "products/specialoffers/laptop1.PNG",
    imgb: "products/specialoffers/laptop2.PNG",
    imgc: "products/specialoffers/laptop3.PNG",
    desc: "Experience advanced technology with our latest laptop, featuring a sleek design and powerful performance. With a 15.6-inch display, 16GB RAM, and 512GB SSD, it ensures smooth multitasking. The lightweight build and long battery life make it perfect for on-the-go use."
  },
  {
    id: 1,
    name: "bag",
    rname: "old bag",
    price: 100,
    qty: 12,
    cat: "electronics",
    img: "products/specialoffers/bag.jpg",
    imga: "products/specialoffers/bag1.PNG",
    imgb: "products/specialoffers/bag2.PNG",
    imgc: "products/specialoffers/bag3.PNG",
    desc: "Discover the classic style with our old leather bag made of high quality genuine leather. Measuring 30cm long, 25cm high and 10cm deep, it's perfect for everyday use. Adjustable leather handles and metal buckle provide comfort and security. The vintage design makes it suitable for any event."
  },
  {
    id: 2,
    name: "bed",
    rname: "laptop",
    price: 2001,
    qty: 10,
    cat: "special offers",
    img: "products/specialoffers/bed.jpg",
    imga: "products/specialoffers/bed1.PNG",
    imgb: "products/specialoffers/bed2.PNG",
    imgc: "products/specialoffers/bed3.PNG",
    desc: "Discover comfort with our traditional slippers made of high quality wool. One-size-fits-all, they're perfect for cold days. Warmth and softness provide coziness and comfort. The handmade design makes them suitable for any occasion. With each wear, the slippers take on a unique character, adding to their personality."
  },
  {
    id: 3,
    name: "curvul",
    rname: "laptop",
    price: 0.1,
    qty: 9,
    cat: "special offers",
    img: "products/specialoffers/curvul.jpg",
    imga: "products/specialoffers/curvul1.PNG",
    imgb: "products/specialoffers/curvul2.PNG",
    imgc: "products/specialoffers/curvul3.PNG",
    desc: "Discover the traditional style with our tservula made of high quality materials. Measuring 30cm long, 10cm wide and 5cm high, they are perfect for folklore events. Comfort and strength ensure long-lasting wear. The authentic design makes them suitable for any traditional occasion. With each wear, the cherubs take on a unique character, adding to their personality."
  },
  {
    id: 4,
    name: "kozunak",
    rname: "laptop",
    price: 99,
    qty: 8,
    cat: "special offers",
    img: "products/specialoffers/kozunak.jpg",
    imga: "products/specialoffers/kozunak1.PNG",
    imgb: "products/specialoffers/kozunak2.PNG",
    imgc: "products/specialoffers/kozunak3.PNG",
    desc: "Discover the classic taste with our traditional kozunak made from high quality ingredients. With a weight of 500 grams, it is ideal for festive tables. The soft texture and sweet taste provide pleasure and delight. The traditional design makes it suitable for any event. With every bite, the kozunak reveals a unique aroma, adding to its authenticity."
  },
  {
    id: 5,
    name: "socks",
    rname: "laptop",
    price: 9,
    qty: 0,
    cat: "special offers",
    img: "products/specialoffers/socks.jpg",
    imga: "products/specialoffers/socks1.PNG",
    imgb: "products/specialoffers/socks2.PNG",
    imgc: "products/specialoffers/socks3.PNG",
    desc: "Discover comfort with our traditional slippers made of high quality wool. One-size-fits-all, they're perfect for cold days. Warmth and softness provide coziness and comfort. The handmade design makes them suitable for any occasion. With each wear, the slippers take on a unique character, adding to their personality."
  },
  {
    id: 6,
    name: "TV",
    rname: "TV",
    price: 7777,
    qty: 7,
    cat: "special offers",
    img: "products/specialoffers/TV.jpg",
    imga: "products/specialoffers/TV1.PNG",
    imgb: "products/specialoffers/TV2.PNG",
    imgc: "products/specialoffers/TV3.PNG",
    desc: "Discover quality with our TV made with the latest technology. Measuring 120cm wide, 70cm high and 10cm deep, it is perfect for any living room. Bright colors and clear sound provide a full experience. The modern design makes it suitable for any interior. With every switch on, the TV delivers a unique quality, adding to your entertainment."
  },
  {
    id: 7,
    name: "uselessbrick",
    rname: "old telephone",
    price: 99999,
    qty: 3,
    cat: "special offers",
    img: "products/specialoffers/uselessbrick.jpg",
    imga: "products/specialoffers/uselessbrick1.PNG",
    imgb: "products/specialoffers/uselessbrick2.PNG",
    imgc: "products/specialoffers/uselessbrick3.PNG",
    desc: "Discover the classic style with our old phone made with high quality materials. Measuring 20cm long, 15cm high and 5cm deep, it's perfect for collectors. The unique design provides aesthetic pleasure and functionality. The vintage style makes it suitable for any decoration. With each use, the phone takes on a unique character, adding to its personality."
  },
  {
    id: 8,
    name: "wrench",
    rname: "wrench",
    price: 123,
    qty: 222,
    cat: "special offers",
    img: "products/specialoffers/wrench.jpg",
    imga: "products/specialoffers/wrench1.PNG",
    imgb: "products/specialoffers/wrench2.PNG",
    imgc: "products/specialoffers/wrench3.PNG",
    desc: "Discover the functionality with our wrench made  of high quality steel. Measuring 15cm long and 2cm wide, it's perfect for any repair job. The sturdy and comfortable  grip ensures efficiency and ease of use.The ergonomic design is suitable for all tools. With each use, the wrench takes on a unique character, adding to its effectiveness."
  },
  {
    id: 9,
    name: "cart",
    rname: "cart",
    price: 5000,
    qty: 0,
    cat: "special offers",
    img: "products/specialoffers/cart.jpg",
    imga: "products/specialoffers/cart1.PNG",
    imgb: "products/specialoffers/cart2.PNG",
    imgc: "products/specialoffers/cart3.PNG",
    desc: "Discover convenience with our supermarket trolley made of high quality materials. Measuring 90cm long, 60cm wide and 100cm high, it's perfect for shopping. The spacious design ensures easy collection of all products. The strength makes it suitable for all kinds of shops. With each shopping trip, the cart takes on a unique character, adding to your convenience."
  },
  {
    id: 10,
    name: "eggs",
    rname: "eggs",
    price: 1,
    qty: 13,
    cat: "special offers",
    img: "products/specialoffers/eggs.jpg",
    imga: "products/specialoffers/eggs1.PNG",
    imgb: "products/specialoffers/eggs2.PNG",
    imgc: "products/specialoffers/eggs3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 11,
    name: "Headphones",
    rname: "Headphones",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/headphones.jpg",
    imga: "products/electronics/headphones1.PNG",
    imgb: "products/electronics/headphones2.PNG",
    imgc: "products/electronics/headphones3.PNG",
    desc: "Immerse yourself in superior sound with our premium headphones, designed for comfort and clarity. Featuring noise-canceling technology, 40mm drivers, and a 20-hour battery life, these headphones provide an unparalleled listening experience."
  },
  {
    id: 12,
    name: "Airpods",
    rname: "airpods",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/product_airpods.jpg",
    imga: "products/electronics/product_airpods1.PNG",
    imgb: "products/electronics/product_airpods2.PNG",
    imgc: "products/electronics/product_airpods3.PNG",
    desc: "Enjoy wireless freedom with our AirPods, offering seamless connectivity and exceptional sound quality. With a sleek design, touch controls, and a charging case that provides 24 hours of battery life, they are perfect for everyday use."
  },
  {
    id: 13,
    name: "Laptope",
    rname: "Laptope",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/product_laptop.jpg",
    imga: "products/electronics/product_laptop1.PNG",
    imgb: "products/electronics/product_laptop2.PNG",
    imgc: "products/electronics/product_laptop3.PNG",
    desc: "Experience advanced technology with our latest laptop, featuring a sleek design and powerful performance. With a 15.6-inch display, 16GB RAM, and 512GB SSD, it ensures smooth multitasking. The lightweight build and long battery life make it perfect for on-the-go use."
  },
  {
    id: 14,
    name: "tve",
    rname: "tve",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/product_tv.jpg",
    imga: "products/electronics/product_tv1.PNG",
    imgb: "products/electronics/product_tv2.PNG",
    imgc: "products/electronics/product_tv3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 15,
    name: "microphone",
    rname: "microphone",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/product_microphone.jpg",
    imga: "products/electronics/product_microphone1.PNG",
    imgb: "products/electronics/product_microphone2.PNG",
    imgc: "products/electronics/product_microphone3.PNG",
    desc: "Capture crystal-clear audio with our professional microphone, ideal for recording and streaming. Equipped with a cardioid pickup pattern, adjustable gain, and a built-in pop filter, it ensures high-quality sound for any application."
  },
  {
    id: 16,
    name: "Bedf",
    rname: "bed",
    price: 300,
    qty: 4,
    cat: "furniture",
    img: "products/furniture/product_bed.jpg",
    imga: "products/furniture/product_bed1.PNG",
    imgb: "products/furniture/product_bed2.PNG",
    imgc: "products/furniture/product_bed3.PNG",
    desc: "Transform your bedroom with our luxurious bed, crafted for comfort and style. Measuring 200 cm by 160 cm, it features a sturdy frame, plush headboard, and high-quality mattress, ensuring a restful night's sleep."
  },
  {
    id: 17,
    name: "Chair",
    rname: "chair",
    price: 300,
    qty: 4,
    cat: "furniture",
    img: "products/furniture/product_chair.jpg",
    imga: "products/furniture/product_chair1.PNG",
    imgb: "products/furniture/product_chair2.PNG",
    imgc: "products/furniture/product_chair3.PNG",
    desc: "Add elegance to your living space with our stylish armchair, designed for comfort and durability. Upholstered in premium fabric, it features a solid wood frame, plush cushions, and a timeless design that complements any decor."
  },
  {
    id: 18,
    name: "Desk",
    rname: "desk",
    price: 300,
    qty: 4,
    cat: "furniture",
    img: "products/furniture/product_desk.jpg",
    imga: "products/furniture/product_desk1.PNG",
    imgb: "products/furniture/product_desk2.PNG",
    imgc: "products/furniture/product_desk3.PNG",
    desc: "Create an efficient workspace with our modern desk, designed for productivity and style. Measuring 120 cm by 60 cm, it features a spacious surface, sturdy legs, and built-in cable management, ensuring a clutter-free environment."
  },
  {
    id: 19,
    name: "Ottoman",
    rname: "ottoman",
    price: 300,
    qty: 4,
    cat: "furniture",
    img: "products/furniture/product_ottoman.jpg",
    imga: "products/furniture/product_ottoman1.PNG",
    imgb: "products/furniture/product_ottoman2.PNG",
    imgc: "products/furniture/product_ottoman3.PNG",
    desc: "Enhance your home with our versatile ottoman, perfect for extra seating or as a footrest. Upholstered in durable fabric, it features a sturdy frame and ample storage space, making it both functional and stylish."
  },
  {
    id: 20,
    name: "Table",
    rname: "table",
    price: 300,
    qty: 4,
    cat: "furniture",
    img: "products/furniture/product_table.jpg",
    imga: "products/furniture/product_table1.PNG",
    imgb: "products/furniture/product_table2.PNG",
    imgc: "products/furniture/product_table3.PNG",
    desc: "Upgrade your dining area with our elegant table, crafted for both functionality and style. Measuring 150 cm by 90 cm, it features a solid wood top, sturdy legs, and a timeless design that fits any decor."
  },
  {
    id: 21,
    name: "Wardrobe",
    rname: "wardrobe",
    price: 300,
    qty: 4,
    cat: "furniture",
    img: "products/furniture/product_wardrobe.jpg",
    imga: "products/furniture/product_wardrobe1.PNG",
    imgb: "products/furniture/product_wardrobe2.PNG",
    imgc: "products/furniture/product_wardrobe3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 22,
    name: "Conditioner",
    rname: "conditioner",
    price: 300,
    qty: 4,
    cat: "Health_Beauty",
    img: "products/Health_Beauty/product_conditioner.jpg",
    imga: "products/Health_Beauty/product_conditioner1.PNG",
    imgb: "products/Health_Beauty/product_conditioner2.PNG",
    imgc: "products/Health_Beauty/product_conditioner3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 23,
    name: "Hairdye",
    rname: "product_hairdye",
    price: 300,
    qty: 4,
    cat: "Health_Beauty",
    img: "products/Health_Beauty/product_hairdye.PNG",
    imga: "products/Health_Beauty/product_hairdye1.PNG",
    imgb: "products/Health_Beauty/product_hairdye2.PNG",
    imgc: "products/Health_Beauty/product_hairdye3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 24,
    name: "Makeupremover",
    rname: "product_makeupremover",
    price: 300,
    qty: 4,
    cat: "Health_Beauty",
    img: "products/Health_Beauty/product_makeupremover.PNG",
    imga: "products/Health_Beauty/product_makeupremover1.PNG",
    imgb: "products/Health_Beauty/product_makeupremover2.PNG",
    imgc: "products/Health_Beauty/product_makeupremover3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 25,
    name: "Promopack",
    rname: "product_promopack",
    price: 300,
    qty: 4,
    cat: "Health_Beauty",
    img: "products/Health_Beauty/product_promopack.PNG",
    imga: "products/Health_Beauty/product_promopack1.PNG",
    imgb: "products/Health_Beauty/product_promopack2.PNG",
    imgc: "products/Health_Beauty/product_promopack3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 26,
    name: "Shampoo",
    rname: "product_shampoo",
    price: 300,
    qty: 4,
    cat: "Health_Beauty",
    img: "products/Health_Beauty/product_shampoo.PNG",
    imga: "products/Health_Beauty/product_shampoo1.PNG",
    imgb: "products/Health_Beauty/product_shampoo2.PNG",
    imgc: "products/Health_Beauty/product_shampoo3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 27,
    name: "Leash",
    rname: "product_leash",
    price: 300,
    qty: 4,
    cat: "Misk",
    img: "products/Misk/product_leash.PNG",
    imga: "products/Misk/product_leash1.PNG",
    imgb: "products/Misk/product_leash2.PNG",
    imgc: "products/Misk/product_leash3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 28,
    name: "Paper",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Misk",
    img: "products/Misc/prouct_paper.PNG",
    imga: "products/Misc/product_paper1.PNG",
    imgb: "products/Misc/prouct_paper2.PNG",
    imgc: "products/Misc/prouct_paper3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 29,
    name: "Puzzle",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Misk",
    img: "products/Misk/product_puzzle.PNG",
    imga: "products/Misk/product_puzzle1.PNG",
    imgb: "products/Misk/product_puzzle2.PNG",
    imgc: "products/Misk/product_puzzle3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 30,
    name: "Watter",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Misk",
    img: "products/electronics/product_watter.PNG",
    imga: "products/electronics/product_watter1.PNG",
    imgb: "products/electronics/product_watter2.PNG",
    imgc: "products/electronics/product_watter3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 31,
    name: "Correctiontape",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Office Supplice",
    img: "products/electronics/product_correctiontape.PNG",
    imga: "products/electronics/product_correctiontape1.PNG",
    imgb: "products/electronics/product_correctiontape2.PNG",
    imgc: "products/electronics/product_correctiontape3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 32,
    name: "Pencils",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Office suplices",
    img: "products/Office Suplice/product_pencils.PNG",
    imga: "products/Office Suplice/product_pencils1.PNG",
    imgb: "products/Office Suplice/roduct_pencils2.PNG",
    imgc: "products/Office Suplice/product_pencils3.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 33,
    name: "Headphones",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/headphones.PNG",
    imga: "products/electronics/headphones.PNG",
    imgb: "products/electronics/headphones.PNG",
    imgc: "products/electronics/headphones.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 34,
    name: "Headphones",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/headphones.PNG",
    imga: "products/electronics/headphones.PNG",
    imgb: "products/electronics/headphones.PNG",
    imgc: "products/electronics/headphones.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 35,
    name: "Headphones",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/headphones.PNG",
    imga: "products/electronics/headphones.PNG",
    imgb: "products/electronics/headphones.PNG",
    imgc: "products/electronics/headphones.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 36,
    name: "Headphones",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/headphones.PNG",
    imga: "products/electronics/headphones.PNG",
    imgb: "products/electronics/headphones.PNG",
    imgc: "products/electronics/headphones.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 37,
    name: "Headphones",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/headphones.PNG",
    imga: "products/electronics/headphones.PNG",
    imgb: "products/electronics/headphones.PNG",
    imgc: "products/electronics/headphones.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 38,
    name: "Headphones",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/headphones.PNG",
    imga: "products/electronics/headphones.PNG",
    imgb: "products/electronics/headphones.PNG",
    imgc: "products/electronics/headphones.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 39,
    name: "Headphones",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/headphones.PNG",
    imga: "products/electronics/headphones.PNG",
    imgb: "products/electronics/headphones.PNG",
    imgc: "products/electronics/headphones.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  },
  {
    id: 40,
    name: "Headphones",
    rname: "laptop",
    price: 300,
    qty: 4,
    cat: "Electronics",
    img: "products/electronics/headphones.PNG",
    imga: "products/electronics/headphones.PNG",
    imgb: "products/electronics/headphones.PNG",
    imgc: "products/electronics/headphones.PNG",
    desc: "Discover freshness with our fresh eggs from free-range hens. In L sizes, they are perfect for any recipe. High quality and natural taste ensure a healthy and tasty dish. The natural origin makes them suitable for all ages. With each egg you get a unique quality, adding to your culinary delight."
  }
]

for(let i =0; i<=40; i++){
    items[i].ab=localStorage.getItem('item'+String(i)) ? parseInt(localStorage.getItem('item'+String(i))) : 0;
}

//console.log(items[0].ab)
function buy(){
  let index = localStorage.getItem("idflow");
  let amount = localStorage.getItem("countflow");
  console.log(index, parseInt(amount), items[index].qty, items[index].ab);  
  
  if(items[index].ab+parseInt(amount)>items[index].qty){
        alert("can not buy that much " + items[index].name + "'s.Amount available: " + (items[index].qty - items[index].ab));
    }
    else{
        items[index].ab+=parseInt(amount);
        localStorage.setItem(('item'+String(index)), items[index].ab);
    }
}

function cancel(index){
    items[index].ab=0;
}

function test(index){
    console.log(items[index].ab);
}

let ListBlock=document.querySelector(".items-list");


function generateList(){
  
  items.forEach(item =>{
    if(item.ab!=0){
      let listItem = document.createElement("div");

      let name = document.createElement("h1");
      name.innerHTML=item.name;
      listItem.appendChild(name);

      let image = document.createElement("img");
      image.src=item.img;
      image.alt=item.name;
      listItem.appendChild(image);

      let amount = document.createElement("p");
      amount.innerHTML="Amount: " + item.ab;
      listItem.appendChild(amount);


      ListBlock.append(listItem);
    }
  })
  let pr=0;
  items.forEach(item =>{
    pr+=item.ab * item.price;
  })

  let Tprice= document.getElementById("Tprice");
  Tprice.innerHTML = "Total price: " + String(pr);
}



function order (){
  for(let i=0;i<=40;i++){
    localStorage.setItem(('item'+String(i)),0);
  }
  window.location.reload();
  alert("Your order has been processed");
}