import Controller from '@ember/controller';
import Swiping from 'ares-webportal/mixins/swiping';

export default Controller.extend(Swiping, {
  reloadChar() {
    this.send('reloadModel');
  },

  actions: {
    showOrHideAltMatches: function(option) {
      this.gameApi.requestOne('showOrHideAltMatches', { option: option }, null)
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
