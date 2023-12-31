import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  fetchAddressInternal,
);

const initialState = {
  username: '',
  status: 'idle',
  position: {},
  address: '',
  error: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, _) => {
        state.status = 'loading';
      })
      .addCase(fetchAddress.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.address = payload.address;
        state.position = payload.position;
      })
      .addCase(fetchAddress.rejected, (state, { error }) => {
        state.status = 'error';
        state.error = error.message;
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;

////////// THUNKS ///////// THUNKS /////////////////////////////////// THUNKS //
// THUNKS /////////////////////////////////////// THUNKS ///////////////////////
//////////// THUNKS ////////////// THUNKS ////////////////// THUNKS ////////////

function getPosition() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject),
  );
}

async function fetchAddressInternal() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  // Payload of fulfilled state.
  return { position, address };
}
