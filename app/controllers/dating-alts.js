import Controller from '@ember/controller';

export default Controller.extend({
  reloadChar() {
    this.send('reloadModel');
  },

  actions: {
    showOrHideAltMatches: function(option) {
      this.gameApi.requestOne('showOrHideAltMatches', { option: option, alts: true }, null)
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
