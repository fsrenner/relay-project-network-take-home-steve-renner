/**
 * The getVoterDataPercents function takes the voter data array parameter and a segment
 * prop in order to calculate the percent of the provided segment of the total. The 
 * function returns the array with the percentage added to the array objects.
 * @param {object []} arr - arr - An array of voter data objects
 * @param {string} prop - the key prop for the selected segment
 * @returns {object[]} - the array of voter data objects with percent added
 */
export default function getVoterDataPercents(arr, prop) {
    return arr.map(item => {  
        console.log(prop);
        item.percent = `${((item[prop]/item.total) * 100).toFixed(2)}%`;
        return item;
    });
}