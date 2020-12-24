import React from 'react';
import { testData } from './util/testData';

/**
 * The DisplayTable function receives voter data from the VoterData
 * parent component and populates a table with it.
 * 
 * @param {array[object]} voterData - A prop array of voter data objects
 */
export default function DisplayTable({ voterData }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Ward</th>
                    <th>Democrat</th>
                    <th>Republican</th>
                    <th>Other Party</th>
                    <th>Male</th>
                    <th>Female</th>
                    <th>Unknown Sex</th>
                    <th>Black</th>
                    <th>Hispanic</th>
                    <th>White</th>
                    <th>Other Race</th>
                    <th>Total</th>
                    <th>%</th>
                </tr>
            </thead>
            <tbody>
            {
                voterData.map((item, key) => {
                    return (
                        <tr key={key}>
                            <td>{item.ward}</td>
                            <td>{item.dem}</td>
                            <td>{item.rep}</td>
                            <td>{item.other_party}</td>
                            <td>{item.male}</td>
                            <td>{item.female}</td>
                            <td>{item.unknown_sex}</td>
                            <td>{item.black}</td>
                            <td>{item.hispanic}</td>
                            <td>{item.white}</td>
                            <td>{item.other_race}</td>
                            <td>{item.total}</td>
                            <td>TBD</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}