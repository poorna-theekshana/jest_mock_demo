const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fakeDatabase = {
        1: { id: 1, name: 'John Doe', email: 'john@example.com' },
        2: { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      };

      const user = fakeDatabase[userId];
      if (user) {
        resolve(user);
      } else {
        reject('User not found');
      }
    }, 1000); // Simulated delay of 1 second
  });
};

module.exports = fetchUserData;
