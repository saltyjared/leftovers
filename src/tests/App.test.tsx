import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';

jest.mock('../components/LoadingSpinner', () => () => <div>Loading...</div>);
jest.mock('../components/RecipeOverlay', () => ({ recipe, onClose }: any) => (
  <div>
    <span>{recipe?.title}</span>
    <button onClick={onClose}>Close</button>
  </div>
));

describe('App', () => {
  it('renders header and mixing bowl', () => {
    const { getByText } = render(<App />);
  expect(getByText(/Ingredients/i)).toBeInTheDocument();
  });
  it('shows loading spinner when generating recipe', async () => {
    // Mock fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({
          choices: [{ message: { content: 'Title: Test\nIngredients: Eggs, Milk\nInstructions: 1. Mix.\n2. Cook.' } }]
        })
      }) as any
    );
    const { getByText, getByRole } = render(<App />);
    // Simulate adding ingredient and generating recipe
    fireEvent.click(getByText(/Generate/i));
  await waitFor(() => expect(getByText('Loading...')).toBeInTheDocument());
  });
});
