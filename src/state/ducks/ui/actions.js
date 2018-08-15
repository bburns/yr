// actions
// these are action creators, which return action objects.
// action objects are just plain js objects that have a type and some other payload.

import types from './types';


//. just handle these with react state? unless need to share with several components?
export const clearFilters = (optionKey) => ({ type: types.CLEAR_FILTERS, payload: optionKey });
export const hideSpinner = () => ({ type: types.HIDE_SPINNER });
export const setAreaType = (areaType) => ({ type: types.SET_AREA_TYPE, payload: areaType });
export const setSelectedTab = (selectedTab) => ({ type: types.SET_SELECTED_TAB, payload: selectedTab });
export const setShowDetails = (show) => ({ type: types.SET_SHOW_DETAILS, payload: show });
export const setShowSidebar = (show) => ({ type: types.SET_SHOW_SIDEBAR, payload: show });
export const setShowTabs = (show) => ({ type: types.SET_SHOW_TABS, payload: show });
export const showSpinner = () => ({ type: types.SHOW_SPINNER });
export const toggleCombineFilters = () => ({ type: types.TOGGLE_COMBINE_FILTERS });
export const toggleFavorite = (placeId) => ({ type: types.TOGGLE_FAVORITE, payload: placeId });
export const toggleFavorites = () => ({ type: types.TOGGLE_FAVORITES });
export const toggleFilter = (filterKey) => ({ type: types.TOGGLE_FILTER, payload: filterKey });
export const toggleSidebar = () => ({ type: types.TOGGLE_SIDEBAR });
export const toggleTable = () => ({ type: types.TOGGLE_TABLE });
export const updateMapView = (mapView) => ({ type: types.UPDATE_MAP_VIEW, payload: mapView });
export const windowResize = (dims) => ({ type: types.WINDOW_RESIZE, payload: dims });

// export const addCommute = (addressRaw) => ({ type: types.ADD_COMMUTE, payload: Factories.createCommutePlace(addressRaw) });
// export const deleteCommute = (address) => ({ type: types.DELETE_COMMUTE, payload: address });
// export const updateRentRange = (rentRange) => ({ type: types.UPDATE_RENT_RANGE, payload: rentRange });
// export const updateSchoolRange = (schoolRange) => ({ type: types.UPDATE_SCHOOL_RANGE, payload: schoolRange });


// import api from 'state/api'; //. will move

//. see https://stackoverflow.com/questions/35069212/return-promise-from-store-after-redux-thunk-dispatch

// // a thunk
// export const fetchDetails = (placeId) => {
//   return dispatch => {
//     // dispatch(fetchDetailsLoading(true));
//     // return api.fetchPlace(placeId).then(place => {
//     //   dispatch(fetchPictures(place));
//     // }).then(place => {
//     //   dispatch(fetchDetailsSuccess(place));
//     // }).catch(error => {
//     //   dispatch(fetchDetailsFailed(error));
//     // });
//   };
// };
// export const fetchDetailsLoading = () => ({ type: types.DETAILS_FETCH_LOADING });
// export const fetchDetailsFailed = (error) => ({ type: types.DETAILS_FETCH_FAILED, payload: error });
// export const fetchDetailsSuccess = (place) => ({ type: types.DETAILS_FETCH_SUCCESS, payload: place });

// // a thunk
// export const fetchPictures = (place) => {
//   return dispatch => {
//     return api.fetchPictures(place);
//     // // dispatch(fetchPicturesLoading(true));
//     // return api.fetchPictures(place).then(placeWithPics => {
//     //   console.log('fetchpics', placeWithPics);
//     //   dispatch(fetchPicturesSuccess(placeWithPics));
//     // }).catch(error => {
//     //   // dispatch(fetchPicturesFailed(error));
//     //   console.error(error);
//     // });
//   };
// };
// // export const fetchPicturesLoading = () => ({ type: types.PICTURES_FETCH_LOADING });
// // export const fetchPicturesFailed = (error) => ({ type: types.PICTURES_FETCH_FAILED, payload: error });
// export const fetchPicturesSuccess = (place) => ({ type: types.PICTURES_FETCH_SUCCESS, payload: place });
