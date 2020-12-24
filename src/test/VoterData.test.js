import { render } from '@testing-library/react';
import VoterData from '../VoterData';

it('should render display table', () => {
  const { container, getByText } = render(<VoterData />);
  const title = getByText(/Top Segment of all voters/i);
  expect(container.firstChild).toBeTruthy();
  expect(title).toBeInTheDocument();
});