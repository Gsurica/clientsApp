import { createSlice } from "@reduxjs/toolkit";

interface IAsideMenu {
    isOpen: boolean;
}

const initialState: IAsideMenu = {
    isOpen: false
}

const AsideMenuSlice = createSlice({
    name: "AsideMenu",
    initialState,
    reducers: {
        openHandle: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export default AsideMenuSlice.reducer;
export const { openHandle } = AsideMenuSlice.actions;