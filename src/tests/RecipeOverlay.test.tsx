import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RecipeOverlay from '../components/RecipeOverlay';

describe('RecipeOverlay', () => {
  const recipe = {
    title: 'Test Recipe',
    ingredients: ['Eggs', 'Milk'],
    instructions: '1. Mix ingredients.\n2. Cook.'
  };
  it('renders recipe details', () => {
    const { getByText } = render(<RecipeOverlay recipe={recipe} onClose={() => {}} />);
    expect(getByText('Test Recipe')).toBeInTheDocument();
    expect(getByText('Ingredients')).toBeInTheDocument();
    expect(getByText('Eggs')).toBeInTheDocument();
    expect(getByText('Milk')).toBeInTheDocument();
    expect(getByText('Instructions')).toBeInTheDocument();
    expect(getByText('1. Mix ingredients.')).toBeInTheDocument();
    expect(getByText('2. Cook.')).toBeInTheDocument();
  });
  it('calls onClose when exit button is clicked', () => {
    const onClose = jest.fn();
    const { container } = render(<RecipeOverlay recipe={recipe} onClose={onClose} />);
    const exitBtn = container.querySelector('.overlay-exit-btn');
    fireEvent.click(exitBtn!);
    expect(onClose).toHaveBeenCalled();
  });
});
