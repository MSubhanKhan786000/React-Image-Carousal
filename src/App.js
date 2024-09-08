import React, { useState, useEffect } from "react";

const App = () => {
  const [currItem, setCurrItem] = useState(0);
  const items = [
    {
      id: 1,
      imageUrl:
        "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 1",
      description: "This is item 1 description",
    },
    {
      id: 2,
      imageUrl:
        "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 2",
      description: "This is item 2",
    },
    {
      id: 3,
      imageUrl:
        "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Item 3",
      description: "This is Item 3",
    },
  ];
  const handleNext = () => {
    if (currItem === items.length - 1) {
      setCurrItem(0);
    } else {
      setCurrItem((curr) => curr + 1);
    }
  };

  const handlePrev = () => {
    if (currItem === 0) {
      setCurrItem(items.length - 1);
    } else {
      setCurrItem((curr) => curr - 1);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000);
    return () => clearInterval(timer);
  }, [currItem]);
  return (
    <>
      <h1>Image Carousal</h1>
      <img
        src={items[currItem].imageUrl}
        alt={items[currItem].title}
        height={200}
        width={200}
      />
      <p>{items[currItem].title}</p>
      <p>{items[currItem].description}</p>
      <button onClick={handleNext}>Next</button>
      <button onClick={handlePrev}>Previous</button>
    </>
  );
};

export default App;
