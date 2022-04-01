import Controller from '@ember/controller';
import AuthenticatedController from 'ares-webportal/mixins/authenticated-controller';
import { inject as service } from '@ember/service';

export default Controller.extend(AuthenticatedController, {
  gameApi: service(),
  flashMessages: service(),
  router: service(),

  actions: {
    swipe: function(name, type) {
      this.gameApi.requestOne('swipeFor', { target: name, type: type }, null)
      .then( (response) => {
        console.log(response.error);
        if (response.error) {
          return;
        }
        window.location.reload(true);
      });
    },
  },
});
