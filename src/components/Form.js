import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSumit(e) {
    e.preventDefault();

    if (!description) return;
    //how we get input data out of the form
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    console.log(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSumit}>
      <h3>Add things! </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button onClick={() => onAddItems}>Add</button>
    </form>
  );
}
