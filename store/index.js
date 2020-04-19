export const state = () => ({
  user: {}
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
  }
}

export const actions = {
  setUser(context, user) {
    context.commit('setUser', user);
  }
}
