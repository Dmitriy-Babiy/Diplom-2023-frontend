import { ILoginData, IRegistrationData, ISessionResponse, IUpdateResponse } from '../../models/response/SessionResponse';
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { $api, API_URL } from '../../axios';
import { IUser } from '../../models/IUser';
import axios from 'axios';

export const Registration = createAsyncThunk('registration', async (registerData: IRegistrationData) => {
    const { data } = await $api.post<ISessionResponse>('registration', registerData);
    localStorage.setItem('token', data.accessToken);
    return data;
});

export const Login = createAsyncThunk('login', async (loginData: ILoginData) => {
    const { data } = await $api.post<ISessionResponse>('login', loginData);
    localStorage.setItem('token', data.accessToken);
    return data;
});

export const Logout = createAsyncThunk('logout', async () => {
    const { data } = await $api.post('logout');
    localStorage.removeItem('token');
    return data;
});

export const checkAuth = createAsyncThunk('refresh', async () => {
    const { data } = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
    localStorage.setItem('token', data.accessToken);
    return data;
});

export const updateAvatar = createAsyncThunk('updateAvatar', async (avatarData: string) => {
    const { data } = await $api.put<IUpdateResponse>('updateAvatar', {avatar: avatarData});
    return data;
});

interface ISessionState {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: IUser | null;
    
}

const initialState: ISessionState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
};

const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(Registration.fulfilled, (state, action: PayloadAction<ISessionResponse>) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        });
        
        builder.addCase(Login.fulfilled, (state, action: PayloadAction<ISessionResponse>) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        });

        builder.addCase(Login.rejected, (error) => {
            console.log(error)
        });

        builder.addCase(Logout.fulfilled, (state) => {
            state.user = null;
            state.isAuthenticated = false;
        });

        builder.addCase(checkAuth.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(checkAuth.fulfilled, (state, action: PayloadAction<ISessionResponse>) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
            state.isLoading = false;
        });
        builder.addCase(checkAuth.rejected, (state) => {
            state.isAuthenticated = false;
            state.isLoading = false;
        });
        builder.addCase(updateAvatar.fulfilled, (state, action: PayloadAction<IUpdateResponse>) => {
            state.user = action.payload.user;
        });
    },
});

export const { setAuth } = sessionSlice.actions;
export const sessionReducer = sessionSlice.reducer;
