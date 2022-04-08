import Controller from '@ember/controller';
import AuthenticatedController from 'ares-webportal/mixins/authenticated-controller';

export default Controller.extend(AuthenticatedController, {

    actions: {
        reloadChar: function() {
            this.send('reloadModel');
        },
        fileUploaded: function(folder, file) {
          let model_folder = this.get('model.char.name').toLowerCase();
          if (folder === model_folder) {
            this.get('model.char.files').pushObject( { folder: folder, name: file, path: `/${folder}/${file}` } );
          }
        }
    }
    
});
