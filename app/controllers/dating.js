import Controller from '@ember/controller';
import Swiping from 'ares-webportal/mixins/swiping';
import AuthenticatedController from 'ares-webportal/mixins/authenticated-controller';

export default Controller.extend(Swiping, AuthenticatedController, {
  queryParams: ['dater'],

  dater: null,

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
      this.set('dater', dater.name);
    },
  },
});
