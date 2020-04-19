export default function (context) {
  context.store.dispatch('setActiveModuleAndApplicationLink', context.route.path);
}
