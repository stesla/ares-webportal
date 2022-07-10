import EmberObject from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import AuthenticatedRoute from 'ares-webportal/mixins/authenticated-route';
import DefaultRoute from 'ares-webportal/mixins/default-route';
import ReloadableRoute from 'ares-webportal/mixins/reloadable-route';

export default Route.extend(DefaultRoute, ReloadableRoute, AuthenticatedRoute, {
  gameApi: service(),

  queryParams: {
    dater: {
      replace: true,
    },
  },

  model: function(params) {
    let api = this.gameApi;
    return api.requestOne('datingApp', { dater: params['dater'] });
  },
});
