import React from 'react';
import { Table } from 'react-bootstrap'; // Import Bootstrap's Table component (if using Bootstrap)

const CabFareTable = ({ rows }) => {
    return (
        <Table cellspacing="0" cellpadding="10" className="table-stripped">
            <thead>
                <tr>
                    <th className="web-title fw-bold">Particulars</th>
                    <th className="web-title fw-bold">Fare</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr key={index}>
                        <td>{row.particulars}</td>
                        <td>{row.fare}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default CabFareTable;
