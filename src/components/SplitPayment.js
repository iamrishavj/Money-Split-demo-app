import Button from "./Button";
import { useState } from "react";

export default function SplitPayment({ friend, onPayment }) {
  const [bill, setBill] = useState("");
  const [expense, setExpense] = useState("");
  const [paying, setPaying] = useState(-1);

  function handleSplitPayment(e) {
    e.preventDefault();

    if (bill === "" || expense === "") return;

    const balance = bill - expense;

    paying > 0 ? onPayment(balance) : onPayment(-balance);
  }

  return (
    <form className="form-split-bill" onSumbit={handleSplitPayment}>
      <h2>Split a bill with {friend?.name}</h2>
      <label>💰 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      ></input>
      <label>🧍‍♀️ Your expense</label>
      <input
        type="text"
        value={expense}
        onChange={(e) =>
          setExpense(+e.target.value <= bill ? +e.target.value : expense)
        }
      ></input>
      <label>👫 Friend's expense</label>
      <input
        type="text"
        disabled={true}
        value={bill !== "" ? bill - expense : ""}
      ></input>
      <label>🤑 Who is paying the bill</label>
      <select onChange={(e) => setPaying(+e.target.value)}>
        <option value={paying}>You</option>
        <option value={friend?.id}>{friend?.name}</option>
      </select>
      <Button onClick={handleSplitPayment}>Split Bill</Button>
    </form>
  );
}
