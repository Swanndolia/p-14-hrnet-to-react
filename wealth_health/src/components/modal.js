import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getIfOpen, toggleOpen } from '../redux/modalSlice';

const Modal = ({ content }) => {

    const dispatch = useDispatch()
    const isOpen = useSelector(getIfOpen)

    if (isOpen) {
        return (
            <div className='blocker' onClick={(e) => { if (e.target === e.currentTarget) dispatch(toggleOpen()) }}>
                <div id="confirmation" className="modal">
                    {content}
                </div>
            </div>
        );
    }
}

export default Modal;