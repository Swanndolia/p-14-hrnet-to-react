import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    state: {  //this name suck but whatever it's inline with the project tho
        isOpen: false,
        selected: 0
      },
      department: {
        isOpen: false,
        selected: 0
      },
      entryAmmount: {
        isOpen: false,
        selected: 0
      }
}

export const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState,
    reducers: {
        toggleOpen: (state, action) =>{
            state[action.payload].isOpen = !state[action.payload].isOpen
        },
        setSelected: (state, action) =>{
            state[action.payload.dropdownId].selected = action.payload.id;
        }
    },
});

export const { toggleOpen, setSelected } = dropdownSlice.actions;

export const getIfOpen = (state, dropdownId) => state.dropdown[dropdownId].isOpen;
export const getSelected = (state, dropdownId) => state.dropdown[dropdownId].selected;

export default dropdownSlice.reducer;