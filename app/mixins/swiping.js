import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
  gameApi: service(),
  flashMessages: service(),

  updateDater: function() {
    if (this.dating && !this.get('dating.swiping_with')) {
      let alts = this.get('dating.dating_alts');

      if (this.get('dater')) {
        this.setSwipingName(this.get('dater'));
      }

      if (!this.get('dating.swiping_with') && this.currentUser) {
        this.setSwipingName(this.currentUser.name);
      }

      if (!this.get('dating.swiping_with')) {
        this.set('dating.swiping_with', alts[0]);
      }
    }
  },

  setSwipingName: function(name) {
    let dater = this.get('dating.dating_alts').find(a => a.name == name);
    this.set('dating.swiping_with', dater);
  },

  updateDatingInfo: function(match, swipe) {
    this.send('reloadModel');
  },

  actions: {
    swipe: function(name, type) {
      let dater = this.get('dating.swiping_with');
      this.gameApi.requestOne('swipeFor', { target: name, type: type, dater: dater.name }, null)
      .then( (response) => {
        if (response.error) {
          return;
        }
        this.flashMessages.success(response.message);
        this.updateDatingInfo(response.match, response.swipe);
     });
    },
  },
});
