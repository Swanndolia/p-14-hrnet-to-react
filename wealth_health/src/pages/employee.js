import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Table from '../components/table';
import Dropdown from "../components/dropdown"
import * as dropdownOptions from "../utils/dropdownOptions";

const Employee = () => {
    const employees = useSelector((state) => state.users.list);
    console.log(employees)

    return (
        <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <header>
                <span>
                    Show
                    <Dropdown options={dropdownOptions.entryAmmount} dropdownId={"entryAmmount"} /> //add state to make it work
                    entries
                </span>
                <span>
                    Search:<input></input> //add reducer to make it work
                </span>
            </header>
            <Table employees={employees} />
            <footer>
                <span>Showing</span>
            </footer>
            <Link to="/home">Home</Link>
        </div>
    );
};

export default Employee;