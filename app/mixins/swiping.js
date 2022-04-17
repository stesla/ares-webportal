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
        this.flashMessages.success(response.message);
        this.reloadChar();
     });
    },
  },
});
