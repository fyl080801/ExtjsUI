/**
 * Created by fyl08 on 2016/1/26.
 */
Ext.define('CACS.controller.Message', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'message/list': 'messageList'
        }
    },

    views: [
        'message.List'
    ],

    init: function () {

    },

    messageList: function () {
        this.tabAction({
            view: 'message.List'
        });
    }
});