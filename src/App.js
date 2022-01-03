import './App.css'

import Profile from "./components/Profile/Profile";
import { name, tag, location, avatar, stats } from "./data/user.json";

import Statistics from "./components/Statistics/Statistics";
import statisticalData from "./data/statistical-data.json";

import FriendList from "./components/FriendList/FriendList";
import friends from "./data/friends.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
