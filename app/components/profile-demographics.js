import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  showDatingSection: computed('dating', function() {
    var dating = this.get('dating');
    return dating.match || dating.swipe;
  }),

});
