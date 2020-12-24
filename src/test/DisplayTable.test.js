import { render } from '@testing-library/react';
import DisplayTable from '../DisplayTable';
import { testData } from '../util/testData';

it('should render display table', () => {
  const { getByText } = render(<DisplayTable voterData={testData} />);
  const female = getByText(/Female/i);
  expect(female).toBeInTheDocument();
  const firstTotal = getByText(/12508/i);
  expect(firstTotal).toBeInTheDocument();
});