import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getIfOpen, getSelected, setSelected, toggleOpen } from '../redux/dropdownSlice';

const Dropdown = ({ dropdownId, options }) => {

    const dispatch = useDispatch()
    const isOpen = useSelector(state => getIfOpen(state, dropdownId))
    const selected = useSelector(state => getSelected(state, dropdownId))

    const DropdownList = () => {
        if (isOpen) {
            return (
                <div className='dropdown-content'>
                    {options.map((option, id) => (
                        <span onClick={() => dispatch(setSelected({id, dropdownId}))} key={option.name}>
                            {option.name}
                        </span>
                    ))}
                </div>
            )
        }
    }

    return (
        <span id={dropdownId} onClick={() => dispatch(toggleOpen(dropdownId))} className='dropdown'>
            {options[selected].name}
            <DropdownList />
        </span>
    )
}

export default Dropdown;
