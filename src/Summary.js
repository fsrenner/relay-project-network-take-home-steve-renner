import React from 'react';

export default function Summary({ topSegmentOfAllVoters }) {
    const segment = 'Female'
    const percent = 22.3;
    const name = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.name : '';
    const count = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.count : '';
    const topPercent = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.percent : '';
    return (
        <>
            <h2>Top Segment of all voters: {name} - {count} - {topPercent}</h2>
            <h2>Percentage of All Voters that are {segment}: {percent}</h2>
        </>
    );
}