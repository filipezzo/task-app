import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import Bg from "./components/Bg";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Main from "./components/Main";
import { initialItems } from "./lib/const";

const getItemsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("items")) || initialItems;
};

function App() {
  const [items, setItems] = useState(getItemsFromLocalStorage());

  const handleDeleteItem = (id) => {
    const deletedItem = items.filter((item) => item.id !== id);
    setItems(deletedItem);
  };

  const handleAddItem = (newItem) => {
    const addItem = [...items, newItem];
    setItems(addItem);
  };

  const handleComplete = (id) => {
    const updateItem = items.map((item) =>
      item.id === id
        ? {
            ...item,
            done: !item.done,
          }
        : item
    );
    setItems(updateItem);
  };

  const handleReset = () => {
    setItems(initialItems);
  };

  const handleRemoveAll = () => {
    setItems([]);
  };

  const handleAllDone = () => {
    const newItems = items.map((item) => ({ ...item, done: true }));
    setItems(newItems);
  };

  const handleAllNotDone = () => {
    const newItems = items.map((item) => ({ ...item, done: false }));
    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <Bg />
      <Main>
        <Header items={items} />
        <ItemList
          onComplete={handleComplete}
          items={items}
          onDelete={handleDeleteItem}
        />
        <AddItem
          onAdd={handleAddItem}
          onReset={handleReset}
          onDelete={handleRemoveAll}
          onAllDone={handleAllDone}
          onNotDone={handleAllNotDone}
        />
      </Main>
      <Footer />
    </>
  );
}

export default App;
