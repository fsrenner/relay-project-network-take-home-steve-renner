import React from 'react';
import { segments, segmentNames } from './util/segmentConfigs';

export default function Summary({ topSegmentOfAllVoters, handleSegmentChange }) {
    const segment = 'Female'
    const percent = 22.3;
    const name = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.name : '';
    const count = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.count : 0;
    const topPercent = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.percent : '%';
    return (
        <>
            <h2>Top Segment of all voters: {name} - {count} - {topPercent}</h2>
            <h2>Percentage of All Voters that are {segment}: {percent}</h2>
            <select name="segmentDropdown" id="segmentDropdown" onChange={handleSegmentChange}>
                {
                    segments.map((segment, key) => {
                        return <option key={key} value={segment}>{segmentNames[segment]}</option>
                    })
                }
            </select>
        </>
    );
}