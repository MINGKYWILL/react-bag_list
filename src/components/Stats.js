export default function Stats({ items }) {
  if (!items || items.length === 0)
    return (
      <p className="stats">
        <em>Add your items</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentageItems =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentageItems === 100
          ? "All good to go!"
          : `Total: ${numItems} items, Packed: ${numPacked} items (${percentageItems})%`}
      </em>
    </footer>
  );
}
