import React, { useState, useEffect } from 'react';
import Summary from './Summary';
import DisplayTable from './DisplayTable';

const VOTER_DATA_URL = 'https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id';

export default function VoterData() {

    const [voterData, setVoterData] = useState([]);

    async function fetchVoterData() {
        const response = await fetch(VOTER_DATA_URL);
        const data = await response.json();
        setVoterData(data.rows);
    }
    
    useEffect(() => {
        fetchVoterData();
    }, [])

    return(
        <>
            <Summary top="Female"/>
            <DisplayTable voterData={voterData} />
        </>
    )
}