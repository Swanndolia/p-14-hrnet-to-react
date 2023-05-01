import { useState, useEffect } from 'react';

const Table = ({ employees }) => {
    const [columns, setColumns] = useState([]);
    const tableHead = ["First Name", "Last Name", "Start Date", "Date of Birth", "Department", "Street", "City", "State", "Zip Code"]
    useEffect(() => {
        if (employees.length > 0) {
            setColumns(Object.keys(employees[0]));
        }
    }, [employees]);
    //need add logic under for sorting by different thead + css + convert to redux + show no data if no data but last paret needx rework actual logic and am fcking lazy
    return (
        <table id="employee-list">
            <thead>
                <tr>
                    {tableHead.map((table, index) => (
                        <th key={index}>{table}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={index}>
                        {columns.map((column, index) => (
                            <td key={index}>{employee[column]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
