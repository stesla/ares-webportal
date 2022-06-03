export default function setupCustomRoutes(router) {
  // Define your own custom routes here, just as you would in router.js but using 'router' instead of 'this'.
  // For example:
  // router.route('yourroute');
  
  router.route('census-birthday');
  router.route('dating');
  router.route('dating-summary', { path: '/dating/summary' });
}
