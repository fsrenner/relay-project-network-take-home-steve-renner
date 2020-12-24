import React, { useState, useEffect } from 'react';
import Summary from './Summary';
import DisplayTable from './DisplayTable';
import getTopSegmentOfAllVoters from './util/getTopSegmentOfAllVoters';
import getSelectedSegmentOfAllVoters from './util/getSelectedSegmentOfAllVoters';

const VOTER_DATA_URL = 'https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id';

/**
 * This function is a container component used to fetch data, manipulate it, and pass it
 * to the child components for rendering.
 */
export default function VoterData() {

    const [voterData, setVoterData] = useState([]);
    const [topSegmentOfAllVoters, setTopSegmentOfAllVoters] = useState({
        name: '',
        count: 0,
        percent: ''
    });
    const [segment, setSegment] = useState(''); 
    const [selectedSegmentOfAllVoters, setSelectedSegmentOfAllVoters] = useState({
        name: '',
        count: 0,
        percent: ''
    });
    
    async function fetchVoterData() {
        const response = await fetch(VOTER_DATA_URL);
        const data = await response.json();
        setVoterData(data.rows);
        setTopSegmentOfAllVoters(getTopSegmentOfAllVoters(data.rows))
    }
    useEffect(() => {
        fetchVoterData();
    }, []);

    const handleSegmentChange = (e) => {
        setSegment(e.target.value);
        setSelectedSegmentOfAllVoters(getSelectedSegmentOfAllVoters(e.target.value, voterData));
    }
    console.log(segment);
    return(
        <>
            <Summary 
                topSegmentOfAllVoters={topSegmentOfAllVoters} 
                handleSegmentChange={handleSegmentChange}
                selectedSegmentOfAllVoters={selectedSegmentOfAllVoters}
            />
            <DisplayTable voterData={voterData} />
        </>
    )
}