import React from 'react';
import { segments, segmentNames } from './util/segmentConfigs';

export default function Summary({ segment, topSegmentOfAllVoters, handleSegmentChange, selectedSegmentOfAllVoters }) {
    const segmentName = (selectedSegmentOfAllVoters) ? selectedSegmentOfAllVoters.name : '';
    const segmentTotal = (selectedSegmentOfAllVoters.count) ? selectedSegmentOfAllVoters.count : '';
    const percent = (selectedSegmentOfAllVoters) ? selectedSegmentOfAllVoters.percent : '%';
    const name = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.name : '';
    const count = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.count : 0;
    const topPercent = (topSegmentOfAllVoters) ? topSegmentOfAllVoters.percent : '%';
    return (
        <>
            <h2>Top Segment of all voters: {name} - {count} - {topPercent}</h2>
            {segmentTotal && <h2>Percentage of All Voters that are {segmentName}: {segmentTotal} - {percent}</h2>}
            <select name="segmentDropdown" id="segmentDropdown" onChange={handleSegmentChange} value={segment}>
                {
                    segments.map((segment, key) => {
                        return <option key={key} value={segment}>{segmentNames[segment]}</option>
                    })
                }
            </select>
        </>
    );
}