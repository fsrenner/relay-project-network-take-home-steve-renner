import { segmentNames } from './segmentConfigs';
/**
 * This function receives the name of the segment of voters, calculates the
 * total number of voters, the total number of voters in that segment, and 
 * returns the total votes for that segment and the percent of the total
 * number of votes.
 * 
 * @param {string} segment - the name of the segment of voters
 * @param {object[]} arr - An array of voter data objects
 * @returns {object} - An object containing the name, count, and percent of total
 */
export default function getSelectedSegmentOfAllVoters(segment, arr) {

    // Calculate the total number of voters
    const total = arr.map(obj => obj.total).reduce((x, y) => x + y);

    // Calculate the total number of votes per segment
    const segmentTotal = arr.map(i => i[segment]).reduce((x, y) => x + y);

    return {
        name: segmentNames[segment],
        count: segmentTotal,
        percent: `${((segmentTotal/total) * 100).toFixed(2)}%`
    };
};