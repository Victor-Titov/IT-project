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


var items=[
    {
      id: 0,
      name: "laptop",
      price: 1999.99,
      qty: 5,
      cat: "special offers",
      img: "photos/laptop.jpg",
      ab: 0
    },
    {
      id: 1,
      name: "bag",
      price: 100,
      qty: 12,
      cat: "electronics",
      img: "photos/bag.jpg",
      ab: 0
    },
    {
      id: 2,
      name: "bed",
      price: 2001,
      qty: 10,
      cat: "special offers",
      img: "photos/bed.jpg",
      ab: 0
    },
    {
      id: 3,
      name: "curvul",
      price: 0.1,
      qty: 9,
      cat: "special offers",
      img: "photos/curvul.jpg",
      ab: 0
    },
    {
      id: 4,
      name: "kozunak",
      price: 99,
      qty: 8,
      cat: "special offers",
      img: "photos/kozunak.jpg",
      img1: "photos/kozunak.jpg",
      img2: "photos/kozunak.jpg",
      ab: 0
    },
    {
      id: 5,
      name: "socks",
      price: 9,
      qty: 0,
      cat: "special offers",
      img: "photos/socks.jpg",
      ab: 0
    },
    {
      id: 6,
      name: "TV",
      price: 7777,
      qty: 7,
      cat: "special offers",
      img: "photos/TV.jpg",
      ab: 0
    },
    {
      id: 7,
      name: "uselessbrik",
      price: 99999,
      qty: 3,
      cat: "special offers",
      img: "photos/uselessbrik.jpg",
      ab: 0
    },
    {
      id: 8,
      name: "wrench",
      price: 123,
      qty: 222,
      cat: "special offers",
      img: "photos/wrench.jpg",
      ab: 0
    },
    {
      id: 9,
      name: "cart",
      price: 5000,
      qty: 0,
      cat: "special offers",
      img: "photos/cart.jpg",
      ab: 0
    },
    {
      id: 10,
      name: "eggs",
      price: 1,
      qty: 13,
      cat: "special offers",
      img: "photos/eggs.jpg",
      ab: 0
    }
  ];
  

for(let i =0; i<=10; i++){
    items[i].ab=localStorage.getItem('item'+String(i)) ? parseInt(localStorage.getItem('item'+String(i))) : 0;
}

console.log(items[0].ab)
function buy(amount, index){
    if(items[index].ab+amount>items[index].qty){
        alert("can not buy that much " + items[index].name + "'s.Amount available: " + (items[index].qty - items[index].ab));
    }
    else{
        items[index].ab+=amount;
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
  
}

generateList();