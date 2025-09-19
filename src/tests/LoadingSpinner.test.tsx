import React from 'react';
import { render } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<LoadingSpinner />);
    expect(getByTestId('loading-spinner')).toBeInTheDocument();
    expect(getByTestId('spinner-svg')).toBeInTheDocument();
  });
});
