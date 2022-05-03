import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
    name: 'map',
    initialState: {
      value: [{data: [[0, 0], [0, 0], [0, 0] , [0, 0], [0, 0], [0, 0], [0, 0] , [0, 0]]}],
    },
    reducers: {
      setMapData: (state, action) => {
        state.value = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setMapData } = mapSlice.actions
  
  export default mapSlice.reducer