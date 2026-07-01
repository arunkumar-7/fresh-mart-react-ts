import React from "react";

interface VegItem {
  id: number;
  name: string;
  price: number;
  imageurl: string;
  description: string;
}

function Veg() {
  const vegItems: VegItem[] = [
    {
      id: 1,
      name: "Potato",
      price: 100,
      imageurl: "public/images/bitter.jpg",
      description: "Fresh potatoes",
    },
    {
      id: 2,
      name: "Tomato",
      price: 200,
      imageurl: "/images/tomato.jpg",
      description: "Ripe tomatoes",
    },
    {
      id: 3,
      name: "Carrot",
      price: 150,
      imageurl: "/images/carrot.jpg",
      description: "Crunchy carrots",
    },
  ];

  let listItems = vegItems.map((veg) => (
    <li>
      {veg.name}
      <img src={veg.imageurl} alt={veg.name} width={150} height={150} />
      Price: ₹{veg.price}
      {veg.description}
    </li>
  ));

  return (
    <>
      <h1>This are Veg Items</h1>
      <ol>{listItems}</ol>
      <h1>This is Running</h1>
    </>
  );
}

export default Veg;
