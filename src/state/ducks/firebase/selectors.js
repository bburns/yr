// selectors

export default {
  getUser: (state) => {
    return state.firebase.user;
  },
  getUserProfile: (state) => {
    return state.firebase.userProfile;
  },
};

