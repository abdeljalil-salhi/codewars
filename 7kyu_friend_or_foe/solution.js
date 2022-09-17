function friend(friends) {
  // This is the array that we will be returning
  let myFriends = [];
  // Go through each friend in the array passed as argument
  // And if the element length is equal to 4, add it to our array
  friends.map((friend) => {
    if (friend.length === 4) myFriends = [...myFriends, friend];
  });
  // Return our array
  return myFriends;
}
