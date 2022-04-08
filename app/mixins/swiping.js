import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
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
        this.reloadChar();
     });
    },
  },
});
