export default function getTopSegmentOfAllVoters(arr) {
    console.log(arr);
    return {
        name: 'Dem',
        count: arr[2].dem,
        percent: arr[2].dem/arr[2].total
    };
}