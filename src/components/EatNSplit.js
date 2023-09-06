import FriendList from "./FriendList";
import SplitPayment from "./SplitPayment";
import NewFriendForm from "./NewFriendForm";
import Button from "./Button";
import { useState } from "react";

export default function EatNSplit({ initialFriends }) {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedId, setSelectedId] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);

  function handleSelect(id) {
    setSelectedId(id === selectedId ? null : id);
  }

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    setIsAddOpen(false);
  }
  function handlePayments(value) {
    setFriends(
      friends.map((friend) =>
        friend.id === selectedId
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedId(null);
  }

  console.log(friends.filter((f) => f.id === selectedId));
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          initialFriends={friends}
          selected={selectedId}
          onSelect={handleSelect}
        />
        {isAddOpen && <NewFriendForm onAddFriend={handleAddFriend} />}
        <Button onClick={() => setIsAddOpen((s) => !s)}>
          {isAddOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedId !== null && (
        <div className="splitscreen">
          <SplitPayment
            friend={
              selectedId !== null
                ? friends.find((f) => f.id === selectedId)
                : null
            }
            onPayment={handlePayments}
          />
          <button className="close-button" onClick={() => setSelectedId(null)}>
            X
          </button>
        </div>
      )}
    </div>
  );
}
