export default function getVoterDataPercents(arr, prop) {
    return arr.map(item => {  
        console.log(prop);
        item.percent = `${((item[prop]/item.total) * 100).toFixed(2)}%`;
        return item;
    });
}