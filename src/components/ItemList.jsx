import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

const sortingOptions = [
  {
    label: "Organizar por entrada",
    value: "entrada",
  },

  {
    label: "Organizar por completos",
    value: "completos",
  },

  {
    label: "Organizar por incompletos",
    value: "incompletos",
  },
];

function ItemList({ items, onDelete, onComplete }) {
  const [sortBy, setSortBy] = useState("entrada");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "completos") {
          return b.done - a.done;
        }
        if (sortBy === "incompletos") {
          return a.done - b.done;
        }

        return;
      }),
    [items, sortBy]
  );
  return (
    <ul className="item-list ">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            placeholder="Selecione"
          />
        </section>
      ) : null}
      {sortedItems.map((item) => (
        <ListItem
          onComplete={onComplete}
          key={item.id}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ItemList;

function ListItem({ item, onDelete, onComplete }) {
  const handleClick = () => {
    onDelete(item.id);
  };

  const handleComplete = () => {
    onComplete(item.id);
  };
  return (
    <li className="item">
      <label htmlFor={item.id}>
        <input
          id={item.id}
          type="checkbox"
          onClick={handleComplete}
          style={
            item.done
              ? {
                  background: "#016a6d",
                }
              : {}
          }
        />
        <span style={item.done ? { textDecoration: "line-through" } : {}}>
          {item.name} {item.done ? "🦄" : "😶"}
        </span>
      </label>
      <button onClick={handleClick}>❌</button>
    </li>
  );
}
