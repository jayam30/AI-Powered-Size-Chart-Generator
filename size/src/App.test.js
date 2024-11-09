import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';  // Router for routing in tests

// Mocking the Header, Footer, and other components
jest.mock('./components/Header', () => () => <div>Header Component</div>);
jest.mock('./components/Footer', () => () => <div>Footer Component</div>);
jest.mock('./pages/Home', () => () => <div>Home Page</div>);
jest.mock('./pages/SizeRecommendation', () => () => <div>Size Recommendation Page</div>);
jest.mock('./pages/AdminDashboard', () => () => <div>Admin Dashboard Page</div>);

describe('App Component', () => {
  test('renders the app with header and footer', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Check if the Header and Footer components are rendered
    expect(screen.getByText(/Header Component/i)).toBeInTheDocument();
    expect(screen.getByText(/Footer Component/i)).toBeInTheDocument();
  });

  test('navigates to Home Page by default', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Ensure that the Home page is rendered
    expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
  });

  test('navigates to Size Recommendation Page on clicking link', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Simulate clicking the "Get Started" link or navigate to size recommendation page
    fireEvent.click(screen.getByText(/Get Started/i));

    // Verify that the Size Recommendation Page is rendered
    expect(screen.getByText(/Size Recommendation Page/i)).toBeInTheDocument();
  });

  test('navigates to Admin Dashboard Page on clicking Admin link', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Simulate navigating to Admin Dashboard
    fireEvent.click(screen.getByText(/Admin/i));

    // Verify that Admin Dashboard Page is displayed
    expect(screen.getByText(/Admin Dashboard Page/i)).toBeInTheDocument();
  });
});
