import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: '',
  gameApi: service(),
  flashMessages: service(),
  
  actions: { 
      reloadChar() {
          this.reloadChar();
      },

      swipe(name, type) {
        this.gameApi.requestOne('swipeFor', { target: name, type: type }, null)
        .then( (response) => {
          if (response.error) {
            return;
          }
          if (response.match)
            this.flashMessages.success("You matched!");
          else
            this.flashMessages.success("Swiped!");
          this.reloadChar();
        });
      },
  }
});
