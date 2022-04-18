import Controller from '@ember/controller';
import Swiping from 'ares-webportal/mixins/swiping';

export default Controller.extend(Swiping, {
  reloadChar() {
    this.send('reloadModel');
  },

  actions: {
    showOrHideAlts: function(option) {
      this.gameApi.requestOne('showOrHideAlts', { option: option }, null)
      .then( (response) => {
        if (response.error) {
          return;
        }
        this.flashMessages.success(response.message);
        this.reloadChar();
      });
    },
  },
});
