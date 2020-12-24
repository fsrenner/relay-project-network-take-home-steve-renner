import React from 'react';
import { segments, segmentNames } from './util/segmentConfigs';

export default function Summary({ topSegmentOfAllVoters, handleSegmentChange, selectedSegmentOfAllVoters }) {
    const segment = (selectedSegmentOfAllVoters) ? selectedSegmentOfAllVoters.name : '';
    const segmentTotal = (selectedSegmentOfAllVoters.count) ? selectedSegmentOfAllVoters.count : '';
    const percent = (selectedSegmentOfAllVoters) ? selectedSegmentOfAllVoters.percent : '%';
    const name = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.name : '';
    const count = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.count : 0;
    const topPercent = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.percent : '%';
    return (
        <>
            <h2>Top Segment of all voters: {name} - {count} - {topPercent}</h2>
            {segmentTotal && <h2>Percentage of All Voters that are {segment}: {segmentTotal} - {percent}</h2>}
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