export default function (context) {
  context.store.dispatch('setActiveModuleAndApplicationByLink', context.route.path);
}
