import Controller from '@ember/controller';
import AuthenticatedController from 'ares-webportal/mixins/authenticated-controller';
import { inject as service } from '@ember/service';

export default Controller.extend(AuthenticatedController, {
  gameApi: service(),
  flashMessages: service(),

  actions: {
    swipe: function(name, type) {
      this.gameApi.requestOne('swipeFor', { target: name, type: type }, null)
      .then( (response) => {
        if (response.error) {
          return;
        }
        if (response.match)
          this.flashMessages.success("You matched!");
        else
          this.flashMessages.success("Swiped!");
        this.send('reloadModel');
     });
    },
  },
});
