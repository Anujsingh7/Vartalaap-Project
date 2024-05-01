export const useFirebase = jest.fn(() => ({
    user: { email: 'test@example.com' }, // Mock user object
    logout: jest.fn(), // Mock logout function
  }));