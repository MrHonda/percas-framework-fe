export const state = () => ({
  user: {},
  modules: [],
  applications: [],
  currentModule: null,
  currentApplication: null,
});

export const mutations = {
  initialize(context, {modules, applications}) {
    context.modules = modules;
    context.applications = applications;
  },
  setPageDataByLink(context, {module, application}) {
    context.currentModule = module;
    context.currentApplication = application;
  }
}

export const actions = {
  nuxtServerInit({dispatch}) {
    dispatch('initialize');
  },
  initialize(context) {
    const payload = {};

    payload.modules = {
      'home': {
        name: 'home',
        title: 'Home',
        icon: 'mdi-home',
        link: '/home',
      },
      'system': {
        name: 'system',
        title: 'System',
        icon: 'mdi-key',
        link: '/system',
      }
    };

    payload.applications = {
      'home': {},
      'system': {
        'modules': {
          name: 'modules',
          title: 'Modules',
          icon: 'mdi-table',
          link: '/system/modules',
        },
        'users': {
          name: 'users',
          title: 'Users',
          icon: 'mdi-account',
          link: '/system/users',
        }
      }
    };

    context.commit('initialize', payload);
  },
  setPageDataByLink({commit, state}, link) {
    const pathParts = _.trim(link, '/').split('/');
    // console.log(pathParts);

    const payload = {
        module: null,
        application: null
      }
    ;

    if (pathParts.length > 0) {
      if (state.modules[pathParts[0]]) {
        payload.module = state.modules[pathParts[0]];

        if (pathParts[1] && state.applications[pathParts[0]][pathParts[1]]) {
          payload.application = state.applications[pathParts[0]][pathParts[1]];
        }
      }
      commit('setPageDataByLink', payload);
    }

  }
}

export const getters = {
  moduleApplications(state) {
    return state.currentModule !== null ? state.applications[state.currentModule.name] : {};
  }
}
