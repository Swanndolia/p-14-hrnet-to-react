import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from '../components/table';

const Employee = () => {
    const employees = useSelector((state) => state.users.list);
    const tableHead = ["First Name", "Last Name", "Start Date", "Date of Birth", "Department", "Street", "City", "State", "Zip Code"]
    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <Table data={employees} showFooter={true} showHeader={true} tableHead={tableHead} />
            <Link to="/home">Home</Link>
        </div>
    );
};

export default Employee;