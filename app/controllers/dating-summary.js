import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  gameApi: service(),
  flashMessages: service(),

  actions: {
    showOrHideAlts: function(option) {
      this.gameApi.requestOne('showOrHideAlts', { option: option, alts: true }, null)
      .then( (response) => {
        if (response.error) {
          return;
        }
        this.flashMessages.success(response.message);
        this.send('reloadModel');
      });
    },
  },
});
