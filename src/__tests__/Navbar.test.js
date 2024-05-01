// Navbar.test.js



import { render, fireEvent } from '@testing-library/react';
import {StaticRouter} from "react-router-dom/server" // Use BrowserRouter for testing
import Navbar from '../components/Navbar';

// Mock useFirebase hook
jest.mock('../context/firebase');

test('test the Navbar component', () => {
  // Render Navbar component within a BrowserRouter for testing
  const { getByText } = render(
    <StaticRouter>
      <Navbar />
    </StaticRouter>
  );

  // Assert that the Navbar renders correctly
//   expect(getByText('Vartalaap')).toBeInTheDocument(); // Check if the brand name is rendered

//   // Test sidebar toggle button
//   const toggleButton = getByText(/toggle-sidebar/i);
//   fireEvent.click(toggleButton); // Simulate click on toggle button
//   expect(toggleButton).toHaveAttribute('aria-expanded', 'true'); // Check if the sidebar is expanded

  // Add more assertions as needed
});
