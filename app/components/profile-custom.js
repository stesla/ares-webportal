import Component from '@ember/component';
import { observer } from '@ember/object';
import { inject as service } from '@ember/service';
import Swiping from 'ares-webportal/mixins/swiping';

export default Component.extend(Swiping, {
  tagName: '',

  didInsertElement: function() {
    this._super(...arguments);
    this.updateDater();
  },

  updateDatingInfo: function(match, swipe) {
    this.set('dating.match', match);
    this.set('dating.swipe', swipe);
  },

  actions: {
    daterChanged: function(dater) {
      this.set('dating.swiping_with', dater);
      this.gameApi.requestOne('matchFor', { id: this.char.id, dater: dater.name })
      .then( (response) => {
        if (response.error) {
          return
        }
        this.updateDatingInfo(response.match, response.swipe);
      });
    },
  },
});
