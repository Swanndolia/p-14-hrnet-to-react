import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleOpen } from "../redux/modalSlice";
import { addUser } from "../redux/usersSlice";

import Modal from "../components/modal";
import * as dropdownOptions from "../utils/dropdownOptions";
import Dropdown from "../components/dropdown";

const Home = () => {

    const dispatch = useDispatch();

    function saveEmployee() {
        const employee = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            dateOfBirth: document.getElementById('date-of-birth').value,
            startDate: document.getElementById('start-date').value,
            department: document.getElementById('department').textContent,
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').textContent,
            zipCode: document.getElementById('zip-code').value
        };
        dispatch(addUser(employee))
        dispatch(toggleOpen())
    }

    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/employee">View Current Employees</Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="date" />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="date" />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <Dropdown options={dropdownOptions.states} dropdownId={"state"} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <Dropdown options={dropdownOptions.department} dropdownId={"department"} />
                </form>
                <button className="save-btn" onClick={saveEmployee}>Save</button>
            </div>
            <Modal content={
                <>Employee Created!
                    <button onClick={() => dispatch(toggleOpen())} className="close-modal">Close</button>
                </>
            } />
        </>

    )
};

export default Home;
