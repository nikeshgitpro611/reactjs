import { useState } from "react";

export const Logo = () => {
  return <h1>🏝️ Far Away 🧳</h1>;
};

export const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log("newItem : ", newItem);

    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Add Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export const PackingList = ({ items, onDeleteItem, onToggleItem }) => {
 

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Items key={item.id} items={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Items = ({ items, onDeleteItem , onToggleItem }) => {
  return (
    <div>
      <li>
        <input type="checkbox" value={items.packed} onChange={() => onToggleItem(items.id)}/>
        <span style={items.packed ? { textDecoration: "line-through" } : {}}>
          {items.quantity} {items.description}
        </span>
      </li>
    </div>
  );
};
export const FormCheck = () => {
  const [items, setItems] = useState([]);
  console.log("items : ", items);

  const handleAddItems = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

   const handleDeleteItem = (id) => {
    console.log("Delete item with id:", id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    console.log("Toggle item with id:", id);
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem}  onToggleItem={handleToggleItem}/>
    </div>
  );
};
