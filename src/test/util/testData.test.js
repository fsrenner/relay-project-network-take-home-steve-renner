import { testData } from '../../util/testData';

const test = {
      black: 566,
      dem: 9401,
      female: 4927,
      hispanic: 393,
      male: 4576,
      other_party: 1705,
      other_race: 650,
      rep: 1402,
      the_geom: null,
      the_geom_webmercator: null,
      total: 12508,
      unknown_sex: 3005,
      ward: "WD01",
      white: 4446,
};
it('should match object', () => {
    expect(testData[0]).toEqual(test);
});
// describe('Test Data Tests', () => {

// });