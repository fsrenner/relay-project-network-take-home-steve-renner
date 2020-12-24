import { render } from '@testing-library/react';
import Summary from '../Summary';
import { testData } from '../util/testData';
import getTopSegmentOfAllVoters from '../util/getTopSegmentOfAllVoters';
import getSelectedSegmentOfAllVoters from '../util/getSelectedSegmentOfAllVoters';
import getVoterDataPercents from '../util/getVoterDataPercents';

const segment = 'dem';
const handleSegmentChange = () => 'dem';

it('should render display table', () => {
  const { container, getByText } = render(
    <Summary 
    segment={segment}
    topSegmentOfAllVoters={getTopSegmentOfAllVoters(testData)} 
    selectedSegmentOfAllVoters={getSelectedSegmentOfAllVoters(segment, testData)}
    handleSegmentChange={handleSegmentChange}
    />
);
  const title = getByText(/Top Segment of all voters/i);
  expect(container.firstChild).toBeTruthy();
  expect(title).toBeInTheDocument();
});