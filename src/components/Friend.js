import Button from "./Button";

export default function Friend({ friend, selected, onSelect }) {
  return (
    <li className={selected === friend.id ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p>{friend.balance === 0 && `You and ${friend.name} are even`}</p>
      {friend.balance > 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}₹
        </p>
      )}
      {friend.balance < 0 && (
        <p className="green">
          {friend.name} owes You {Math.abs(friend.balance)}₹
        </p>
      )}

      <Button onClick={() => onSelect(friend.id)}>
        {selected !== friend.id ? "Select" : "Close"}
      </Button>
    </li>
  );
}
