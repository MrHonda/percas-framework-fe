export default function (context) {
  context.store.dispatch('setPageDataByLink', context.route.path);
}
