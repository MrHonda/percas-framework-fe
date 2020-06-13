export const state = () => ({
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
  nuxtServerInit({dispatch}, {request}) {
    dispatch('initialize', request);
  },
  initialize(context, request) {
    const payload = {};

    payload.modules = {
      'home': {
        key: 'home',
        name: 'Home',
        icon: 'mdi-home',
        link: '/home',
      },
      'system': {
        key: 'system',
        name: 'System',
        icon: 'mdi-key',
        link: '/system',
      }
    };

    payload.applications = {
      'home': {},
      'system': {
        'system': {
          'key': 'system',
          'name': 'System',
          'apps': {
            'modules': {
              key: 'modules',
              name: 'Modules',
              icon: 'mdi-table',
              link: '/system/modules',
            },
          }
        }
      }
    };

    context.commit('initialize', payload);
  },
  setPageDataByLink({commit, state}, link) {
    const pathParts = _.trim(link, '/').split('/');
    const payload = {
      module: null,
      application: null
    };

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
    return state.currentModule !== null ? state.applications[state.currentModule.key] : {};
  }
}
