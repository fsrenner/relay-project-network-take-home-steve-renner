import React from 'react';

export default function Summary({ top }) {
    const percent = 22.3;
    return (
        <>
            <h2>Top Segment of all voters: {top}</h2>
            <h2>Percentage of All Voters that are {top}: {percent}</h2>
        </>
    );
}