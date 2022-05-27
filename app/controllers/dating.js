import Controller from '@ember/controller';
import Swiping from 'ares-webportal/mixins/swiping';

export default Controller.extend(Swiping, {
  actions: {
    showOrHideAlts: function(option) {
      this.gameApi.requestOne('showOrHideAlts', { option: option }, null)
      .then( (response) => {
        if (response.error) {
          return;
        }
        this.flashMessages.success(response.message);
        this.send('reloadModel');
      });
    },

    daterChanged: function(dater) {
      this.gameApi.requestOne('swipeWith', { char: dater.name })
      .then( (response) => {
        if (response.error) {
          return;
        }
        this.send('reloadModel');
      });
    },
  },
});
