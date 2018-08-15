// reducer
// handle actions and update state


import types from './types';
import initialState from './initialState';

// keep alphabetized!
//. rename to SPINNER_HIDE, SPINNER_SHOW etc so group together

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.CLEAR_FILTERS: {
      let newState = { ...state };
      newState.selectedFilters = state.selectedFilters.filter(key => !key.startsWith('Filters:'));
      return newState;
    }

    // case types.DETAILS_FETCH_SUCCESS: {
    //   return { ...state, selectedPlace: action.payload };
    // }

    case types.HIDE_SPINNER: {
      let newCount = state.spinnerCount - 1;
      if (newCount < 0) newCount = 0; // just in case something goes wrong
      return { ...state, spinnerCount: newCount };
    }

    // case types.PICTURES_FETCH_SUCCESS: {
    //   return { ...state, selectedPlace: action.payload };
    // }

    case types.SET_AREA_TYPE: {
      const areaType = action.payload; // eg 'Areas:Cities:Autozoom'
      console.log('setareatype', areaType);
      return { ...state, selectedAreaType: areaType };
    }

    case types.SET_SELECTED_TAB: {
      const selectedTab = action.payload;
      return { ...state, selectedTab };
    }

    case types.SET_SHOW_DETAILS: {
      const show = action.payload;
      return { ...state, showDetails: show };
    }

    case types.SET_SHOW_SIDEBAR: {
      const show = action.payload;
      return { ...state, showSidebar: show };
    }

    case types.SHOW_SPINNER: {
      return { ...state, spinnerCount: state.spinnerCount + 1 };
    }

    case types.SET_SHOW_TABS: {
      const show = action.payload;
      return { ...state, showTabs: show };
    }

    case types.TOGGLE_COMBINE_FILTERS: {
      // return { ...state, combineFilters: !state.combineFilters };
      let newState = { ...state };
      newState.combineFilters = !state.combineFilters;
      // if turning combine filters off, clear all selected filters
      if (!newState.combineFilters) {
        newState.selectedFilters = state.selectedFilters.filter(key => !key.startsWith('Filters:'));
      }
      return newState;
    }

    case types.TOGGLE_FAVORITE: {
      const placeId = action.payload;
      const i = state.favorites.indexOf(placeId); // linear search, but should be small enough
      let newFavorites;
      if (i === -1) {
        newFavorites = [...state.favorites, placeId]; // add
      } else {
        newFavorites = [...state.favorites.splice(0, i), ...state.favorites.splice(i + 1)]; // remove
      }
      return { ...state, favorites: newFavorites };
    }

    case types.TOGGLE_FAVORITES: {
      // show/hide favorites page
      return { ...state, showFavorites: !state.showFavorites };
    }

    // // this works but we've ditched combineFilters, so can simplify
    // case types.TOGGLE_FILTER: {
    //   const optionKey = action.payload; // eg 'Filters:HouseValue:500k'
    //   let newSelectedFilters = [...state.selectedFilters]; // list of such option keys
    //   const isSelected = newSelectedFilters.indexOf(optionKey) !== -1;
    //   const keys = optionKey.split(':');
    //   const typeKey = keys[0];
    //   const typeObj = getOption(typeKey); // eg Filters (used to also possibly be Areas)
    //   const combineFilters = state.combineFilters && !typeObj.mutex; // can we combine filters?
    //   // if combine filters is off, turn off all other filters
    //   if (!combineFilters) {
    //     newSelectedFilters = newSelectedFilters.filter(key => !key.startsWith(typeKey));
    //     if (!isSelected) {
    //       newSelectedFilters.push(optionKey);
    //     }
    //   } else {
    //     // turn on or off the specified option
    //     const i = newSelectedFilters.indexOf(optionKey); // linear search - ok
    //     if (i === -1) {
    //       newSelectedFilters.push(optionKey); // on
    //     } else {
    //       newSelectedFilters.splice(i, 1); // off - delete it
    //     }
    //   }
    //   return { ...state, selectedFilters: newSelectedFilters };
    // }

    case types.TOGGLE_FILTER: {
      const optionKey = action.payload; // eg 'Filters:HouseValue:500k' or 'Filters:Crime:Lowest!'
      let newSelectedFilters = [...state.selectedFilters]; // list of such option keys
      const isInverse = optionKey.endsWith('!');
      const oppositeKey = isInverse ? optionKey.slice(0, -1) : optionKey + '!'; // tack on a '!'
      // turn on or off the specified option
      const i = newSelectedFilters.indexOf(optionKey); // linear search - ok
      if (i === -1) {
        newSelectedFilters.push(optionKey); // on
        // make sure opposite key is off
        newSelectedFilters = newSelectedFilters.filter(key => key !== oppositeKey);
      } else {
        newSelectedFilters.splice(i, 1); // off - delete it
      }
      return { ...state, selectedFilters: newSelectedFilters };
    }

    case types.TOGGLE_SIDEBAR: {
      return { ...state, showSidebar: !state.showSidebar };
    }

    case types.TOGGLE_TABLE: {
      return { ...state, showTable: !state.showTable };
    }

    case types.UPDATE_SELECTED_PLACE: {
      const { place } = action.payload;
      console.log('usp', place);
      return { ...state, selectedPlace: place };
    }

    case types.UPDATE_MAP_VIEW: {
      const mapView = action.payload;
      return { ...state, mapView };
    }

    // reset sidebar visibility on resize
    case types.WINDOW_RESIZE: {
      const dims = action.payload;
      // return { ...state, windowDimensions: dims };
      const { width } = dims;
      const showSidebar = (width > 600);
      const showDetails = (width > 600);
      return { ...state, showSidebar, showDetails };
    }

    // case types.ADD_COMMUTE: {
    //   const commute = action.payload;
    //   const newCommutes = [...state.commutes, commute];
    //   return { ...state, commutes: newCommutes };
    // }

    // case types.DELETE_COMMUTE: {
    //   const address = action.payload;
    //   const i = state.commutes.findIndex(commute => commute.address === address);
    //   const newCommutes = [...state.commutes.splice(0, i), ...state.commutes.splice(i + 1)];
    //   return { ...state, commutes: newCommutes };
    // }

    // case types.UPDATE_RENT_RANGE: {
    //   const rentRange = action.payload;
    //   return { ...state, rentRange };
    // }

    // case types.UPDATE_SCHOOL_RANGE: {
    //   const schoolRange = action.payload;
    //   return { ...state, schoolRange };
    // }

    default: {
      return state;
    }
  }
};

export default reducer;
