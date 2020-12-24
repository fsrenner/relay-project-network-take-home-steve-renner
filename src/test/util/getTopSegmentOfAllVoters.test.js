import getTopSegmentOfAllVoters from '../../util/getTopSegmentOfAllVoters';
import { testData } from '../../util/testData';

it('should return top segment of all voters object', () => {

    const result = getTopSegmentOfAllVoters(testData);
    expect(result).toEqual({ name: 'Democrat', count: 35839, percent: '79.18%' });
});