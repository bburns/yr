import types from './types';

export const setUser = (user) => ({ type: types.SET_USER, payload: user });
export const setUserProfile = (userProfile) => ({ type: types.SET_USER_PROFILE, payload: userProfile });
