import Friend from "./Friend";

export default function FriendList({ initialFriends, selected, onSelect }) {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend
          friend={friend}
          selected={selected}
          key={friend.id}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
}
