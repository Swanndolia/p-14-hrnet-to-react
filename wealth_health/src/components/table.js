import { useState, useEffect, useRef } from 'react';

const Table = ({ data, showHeader, showFooter, tableHead }) => {
    const [columns, setColumns] = useState([]);
    const [sortedData, setSortedData] = useState(data);
    const [sortOrder, setSortOrder] = useState({ column: '', ascending: true });
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        if (sortedData.length > 0) {
            setColumns(Object.keys(sortedData[0]));
        }
    }, [sortedData]);

    useEffect(() => {
        const searchQueryParts = searchQuery.toLowerCase().split(' ');
        const filteredDataCopy = sortedData.filter((employee) =>
            searchQueryParts.every((part) =>
                Object.values(employee).some((value) =>
                    value.toString().toLowerCase().includes(part)
                )
            )
        );
        setFilteredData(filteredDataCopy);
    }, [searchQuery, sortedData]);



    const Header = () => {
        const searchInputRef = useRef(null);

        useEffect(() => {
            searchInputRef.current.focus();
        });

        if (showHeader) {
            return (
                <header>
                    <span>
                        Show
                        <select>
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        entries
                    </span>
                    <span>
                        Search:<input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} ref={searchInputRef} />
                    </span>
                </header>
            );
        }
    };


    const Footer = () => {
        if (showFooter) {
            return (
                <footer>
                    <span>Showing</span>
                    <div>
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </footer>
            );
        }
    };

    function handleSort(index) {
        const column = Object.keys(sortedData[0])[index];
        let ascending = sortOrder.column === column ? !sortOrder.ascending : true;
        const sortedDataCopy = [...sortedData].sort((a, b) =>
            ascending ? (a[column] < b[column] ? -1 : 1) : a[column] > b[column] ? -1 : 1
        );
        setSortedData(sortedDataCopy);
        setSortOrder({ column, ascending });
        setSearchQuery('');
    };

    return (
        <>
            <Header />
            <table id="employee-list">
                <thead>
                    <tr>
                        {tableHead.map((column, index) => (
                            <th onClick={() => {if(sortedData[0]){handleSort(index)}}} key={index}>
                                {column}

                                {sortedData[0] && sortOrder.column === Object.keys(sortedData[0])[index] && (
                                    sortOrder.ascending ? ' 🔼' : ' 🔽'
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((employee, index) => (
                        <tr key={index}>
                            {columns.map((column, index) => (
                                <td key={index}>{employee[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
        </>
    );
};

export default Table;
