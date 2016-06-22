import Ember from 'ember';

export default Ember.Component.extend({
    didInsertElement() {
        var upl = panda.uploader.init({
            'buttonId': 'browse-files',
            'onProgress': function(file, percent) {
                debugger;
                console.log("progress", percent, "%");
            },
            'onSuccess': function(file, data) {
                
                debugger;
                /*
                $("#new_video")
                .find("[name=panda_video_id]")
                    .val(data.id)
                .end()
                .submit();
                */
            },
            'onError': function(file, message) {
                debugger;
                console.log("error", message);
            }
        });
    }
});
