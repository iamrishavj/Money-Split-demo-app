import { useState } from "react";
import Button from "./Button";

export default function NewFriendForm({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState(
    "https://i.pravatar.cc/48?" + Math.floor(100000 + Math.random() * 900000)
  );

  function addFriend(e) {
    e.preventDefault();
    if (name === "") return;

    onAddFriend({ id: Date.now(), name: name, image: image, balance: 0 });
  }
  return (
    <form className="form-add-friend" onSubmit={addFriend}>
      <label>👫 Friend's Name</label>
      <input
        id="friendName"
        type="text"
        name="friendName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>🌄 Image URL</label>
      <input
        if="url"
        type="text"
        name="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      ></input>
      <Button>Add</Button>
    </form>
  );
}
