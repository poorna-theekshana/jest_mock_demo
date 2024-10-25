const fetchUserData = require('../src/userService');

// Test setup and teardown
beforeEach(() => {
  console.log('Setting up before each test...');
});

afterEach(() => {
  console.log('Cleaning up after each test...');
});

// Mocking a console log (for advanced mocking demonstration)
jest.spyOn(console, 'log').mockImplementation(() => {});

// Test for fetching valid user data
test('fetches valid user data for user ID 1', async () => {
  const userData = await fetchUserData(1);
  expect(userData).toEqual({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  });
});

// Test for user not found scenario
test('throws an error when the user is not found', async () => {
  await expect(fetchUserData(999)).rejects.toMatch('User not found');
});

// Parameterized test to test multiple user IDs
test.each([
  [1, { id: 1, name: 'John Doe', email: 'john@example.com' }],
  [2, { id: 2, name: 'Jane Smith', email: 'jane@example.com' }]
])('fetches user data for user ID %i', async (userId, expectedUserData) => {
  const userData = await fetchUserData(userId);
  expect(userData).toEqual(expectedUserData);
});

// Test teardown
afterAll(() => {
  console.log('All tests completed');
});
