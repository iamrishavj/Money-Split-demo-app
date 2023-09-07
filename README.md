# Money-Split Demo App

## Live Demo

Check out the live demo [here](https://iamrishavj.github.io/Money-Split-demo-app/).

## Description

This demo app allows you to manage money splits among a group of friends. Built with React, the application utilizes React hooks (`useState`) for state management.

## Features

- List of friends with balances
- Add new friends
- Select a friend for bill splitting
- Specify bill amount and expenses by each person
- Mark who is paying the bill (User or friend)

## How to Run

1. Install Node.js and npm if you haven't already.
2. Clone the repository.
3. Navigate to the project folder in the terminal.
4. Run `npm install` to install dependencies.
5. Run `npm start` to start the application.

#### State variables:

- `friends`: List of friends with their balances
- `showAddFriend`: Boolean to control the "Add Friend" form visibility
- `selectedFriend`: The friend object that is currently selected

#### Functions:

- `handleShowAddFriend()`: Toggles the visibility of the "Add Friend" form
- `handleAddFriend(friend)`: Adds a new friend to the list
- `handleSelection(friend)`: Sets the `selectedFriend` state variable
- `handleSplitBill(value)`: Updates the balance for a friend

### `FriendsList()`

Displays the list of friends.

### `Friend()`

Displays a single friend, including their balance and selection button.

### `FormAddFriend()`

A form to add new friends. Uses `useState` for form fields.

#### Functions:

- `handleSubmit(e)`: Handles form submission and updates the `friends` state in `App`.

### `FormSplitBill()`

A form for bill splitting functionalities.

#### State variables:

- `bill`: The total amount of the bill
- `paidByUser`: Amount paid by the user
- `paidByFriend`: Amount paid by the friend, calculated as `bill - paidByUser`
- `whoIsPaying`: Who is paying the bill ("user" or "friend")

#### Functions:

- `handleSubmit(e)`: Handles form submission and updates the `friends` state in `App` with the new balance.

## Dependencies

- React

Adding a "Live Demo" section near the top of your README ensures that it gets attention, making it easier for users to experience your project without having to clone the repo and run it locally.
