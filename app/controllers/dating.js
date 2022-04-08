import Controller from '@ember/controller';
import Swiping from 'ares-webportal/mixins/swiping';

export default Controller.extend(Swiping, {
  reloadChar() {
    this.send('reloadModel');
  },
});
