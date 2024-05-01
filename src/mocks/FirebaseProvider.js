// MockFirebaseProvider.jsx

import { FirebaseContext } from '../context/firebase'; // Assuming this is the path to your Firebase context file

const MockFirebaseProvider = ({ children }) => {
  // Mock Firebase functionality here if needed
  const firebaseMock = {
    // Mock Firebase functions or data here
  };

  return (
    <FirebaseContext.Provider value={firebaseMock}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default MockFirebaseProvider;
