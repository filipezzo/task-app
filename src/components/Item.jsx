import { useRef, useState } from "react";
import Button from "./Button";

function Item({ onAdd }) {
  const [newEntry, setNewEntry] = useState("");
  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newEntry.length > 0) {
      const newItem = {
        id: crypto.randomUUID(),
        name: newEntry,
        done: false,
      };
      onAdd(newItem);
      setNewEntry("");
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Adicione uma tarefa 🦄</h2>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        placeholder="Abraçar o Filipe..."
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
      />
      <Button>Adicionar a lista</Button>
    </form>
  );
}

export default Item;
