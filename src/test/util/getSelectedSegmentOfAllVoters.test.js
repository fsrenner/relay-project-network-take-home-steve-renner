import getSelectedSegmentOfAllVoters from '../../util/getSelectedSegmentOfAllVoters';
import { testData } from '../../util/testData';

it('should return selected segment of all voters', () => {
    const result = getSelectedSegmentOfAllVoters('black', testData);
    expect(result).toEqual({ name: 'Black', count: 10243, percent: '22.63%' });
});
