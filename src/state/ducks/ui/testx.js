
// // import { call, put, takeEvery } from 'redux-saga/effects';
// import sagaHelper from 'redux-saga-testing';

// import ui from './index';


// describe("ui saga", () => {

//   // sagahelper extends 'it' to pull values from the saga generator in succession
//   const it = sagaHelper(ui.sagas.fetchDetails(action));

//   it("fetchDetails", result => {
//     // expect(result).toEqual(put(ui.actions.showSpinner()));
//   });
//   it("fetchDetails", result => {
//     // console.log(result);
//     // expect(result).toEqual(call(details.actions.fetchAll, action));
//   });
// });


// // describe("ui", () => {
// //   it("select a place in autozoom mode", () => {
// //     const place = { id: 'Neighborhood:Downtown' };
// //     //. move this state to ui module
// //     const initialState = {
// //       selectedFilters: ['Areas:General:Autozoom'],
// //       zoom: 10,
// //     };
// //     const action = ui.actions.setSelectedPlace(place);
// //     const actualState = ui.reducer(initialState, action);
// //     //. should figure out to zoom in till reach the neighborhood level
// //     //  which will require walking over the lookup table.
// //     const expectedState = {
// //       selectedFilters: ['Areas:General:Autozoom'],
// //       zoom: 12,
// //     };
// //     expect(actualState).toEqual(expectedState);
// //   });
// // });


// // a baby test
// describe("actions", () => {
//   it("should create an action to toggle a favorite", () => {
//     const placeId = 'Austin';
//     const actual = ui.actions.toggleFavorite(placeId);
//     const expected = {
//       type: ui.actionTypes.TOGGLE_FAVORITE,
//       payload: placeId,
//     };
//     expect(actual).toEqual(expected);
//   });
// });


// describe("reducer", () => {

//   it("should add a favorite", () => {
//     const placeId = 'Austin';
//     //. use deepfreeze
//     const state = {
//       favorites: ['Houston'],
//     };
//     const action = {
//       type: ui.actionTypes.TOGGLE_FAVORITE,
//       payload: placeId,
//     };
//     const nextState = ui.reducer(state, action);
//     const expected = {
//       favorites: ['Austin', 'Houston'],
//     };
//     expect(nextState.favorites.sort()).toEqual(expected.favorites.sort());
//   });

//   it("should remove a favorite", () => {
//     const placeId = 'Austin';
//     //. use deepfreeze
//     const state = {
//       favorites: ['Austin', 'Dallas'],
//     };
//     const action = {
//       type: ui.actionTypes.TOGGLE_FAVORITE,
//       payload: placeId,
//     };
//     const nextState = ui.reducer(state, action);
//     const expected = {
//       favorites: ['Dallas'],
//     };
//     expect(nextState).toEqual(expected);
//   });

// });


// // test('redux/ui/toggleFilter', assert => {
// //   const message = 'togglefilter';
// //   const expected = ['Apartment', 'Listing'];
// //   const initialState = {
// //     selectedFilters: ['Apartment'],
// //   };
// //   const filter = { name: 'Listing' };
// //   const action = ui.actions.toggleFilter(filter);
// //   const newState = ui.reducer(initialState, action);
// //   const actual = newState.selectedFilters;
// //   assert.deepEqual(actual, expected, message);
// //   assert.end();
// // });

// // test('redux/search', assert => {
// //   const message = '';
// //   const expected = 'search';
// //   const actual = search.search();
// //   assert.deepEqual(actual, expected, message);
// //   assert.end();
// // });


// // test('Assertions with tape.', (assert) => {
// //   const message = 'Given two mismatched values, .equal() should produce a nice bug report';
// //   const expected = 'something to test';
// //   const actual = 'something to test';
// //   assert.equal(actual, expected, message);
// //   assert.end();
// // });

// // test('iuhiuh', assert => {
// //   const message = 'hbjhbjhb';
// //   const expected = 3;
// //   const actual = 4;
// //   assert.equal(actual, expected, message);
// //   assert.end();
// // });



