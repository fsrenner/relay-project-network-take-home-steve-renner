import getVoterDataPercents from '../../util/getVoterDataPercents';

it('should return map with property percent', () => {

    const testVoterData = [{
        test: 10,
        total: 100
    }];

    const result = getVoterDataPercents(testVoterData, 'test');
    expect(result).toEqual([{
        test: 10,
        total: 100,
        percent: '10.00%'
    }]);
});