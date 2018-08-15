// selectors


const selectors = {

  // // get geojson filepath for map depending on the selected area type and map zoom level.
  // // can return null if no areatype selected.
  // getAreaTypeFilepath: (state) => {
  //   // const areaType = selectors.getSelectedAreaType(state); // eg 'Areas:Cities:Autozoom'
  //   const areaType = selectors.getSelectedAreaType(state); // eg 'areas/cities/autozoom'
  //   const mapView = selectors.getMapView(state);
  //   const zoom = mapView.zoom;
  //   const filepath = options.getAreaTypeFilepath(areaType, zoom);
  //   console.log(areaType, zoom, filepath);
  //   return filepath;
  // },

  // // get the styleset for the map geojson based on the currently selected tab and filters.
  // // eg when showing the heatmap grid, just show outlines of the areas, else fill with random colors.
  // getAreaTypeStylesetName: (state) => {
  //   let stylesetName = tabToStylesetName[state.ui.selectedTab]; // will be 'Filled' or 'Outline'
  //   // if no filters selected, set to Filled
  //   let filters = selectors.getSelectedFilters(state);
  //   filters = filters.filter(filter => filter.indexOf('Listing') === -1); // ignore listing filters
  //   console.log(filters);
  //   if (filters.length === 0) {
  //     stylesetName = 'Filled';
  //   }
  //   return stylesetName;
  // },

  // getCombineFilters: (state) => state.ui.combineFilters,
  // getCustomFilters: (state) => state.ui.customFilters,

  // // getSelectedAreaType: (state) => state.ui.selectedAreaType, // eg 'Areas:Cities:Autozoom'
  // getSelectedAreaType: (state) => state.ui.selectedAreaType, // eg 'areas/city/autozoom'
  // getSelectedFilters: (state) => state.ui.selectedFilters,
  // getSelectedTab: (state) => state.ui.selectedTab,

  // getShowAbout: (state) => state.ui.showAbout,
  // getShowDetails: (state) => state.ui.showDetails,
  // getShowFavorites: (state) => state.ui.showFavorites,
  // getShowSidebar: (state) => state.ui.showSidebar,
  // getShowSpinner: (state) => (state.ui.spinnerCount > 0),
  // getShowTable: (state) => state.ui.showTable,
  // getShowTabs: (state) => state.ui.showTabs,

  // getFeatureSets: (state) => state.ui.featureSets,
  // getFeatureFlags: (state) => {
  //   let flags = {};
  //   const sets = selectors.getFeatureSets(state);
  //   Object.keys(sets).forEach(set => {
  //     const setFlags = params.featureFlags[set];
  //     flags = { ...flags, ...setFlags };
  //   });
  //   return flags;
  // },
  // getMapView: (state) => state.ui.mapView,

  // // getShowSidebar: (state) => {
  // //   const { width, height } = state.ui.windowDimensions;
  // //   const showSidebar = (width > 600) && state.ui.showSidebar;
  // //   return showSidebar;
  // // },
  // // getShowDetails: (state) => {
  // //   const { width, height } = state.ui.windowDimensions;
  // //   // const showDetails = (width > 600);
  // //   const showDetails = (width > 600) && state.ui.showDetails;
  // //   return showDetails;
  // // },

  // getRentRange: (state) => state.ui.rentRange,
  // getSchoolRange: (state) => state.ui.schoolRange,
  // getCommutes: (state) => state.ui.commutes,
  // getFavorites: (state) => state.ui.favorites,
};

export default selectors;
