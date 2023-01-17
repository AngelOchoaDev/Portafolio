import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from "./components/Header/Header";

test('renders the landing page', () => {
  render(
    <Router>
      <App />
    </Router>
  );
});