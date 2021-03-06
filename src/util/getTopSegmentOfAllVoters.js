import { segments, segmentNames } from './segmentConfigs';

/**
 * The getTopSegmentOfAllVoters array calculates the total of all of the votes found
 * in the array of voter data objects as well as the total number of voters per 
 * segment. The voter segment that contains the largest number of votes is returned
 * with the count and the percent of total votes.
 * 
 * @param {object[]} arr - An array of voter data objects
 * @returns {object} - An object containing the name, count, and percent of total
 */
export default function getTopSegmentOfAllVoters(arr) {
    // Calculate the total number of voters
    const total = arr.map(obj => obj.total).reduce((x, y) => x + y);

    // Populate an array of objects that contains the total votes per segment
    const segmentTotals = [];
    for (const segment of segments) {
        segmentTotals.push({
            name: segmentNames[segment],
            count: arr.map(i => i[segment]).reduce((x, y) => x + y)
        });
    } 

    // Sort the array in descending order to get the segment with the highest count first
    const sortedSegmentTotals = segmentTotals.sort((a, b) => b.count - a.count);

    // Return the first element of the sorted array and calculate the percent of total
    return {
        name: sortedSegmentTotals[0].name,
        count: sortedSegmentTotals[0].count,
        percent: `${((sortedSegmentTotals[0].count/total) * 100).toFixed(2)}%`
    };
}