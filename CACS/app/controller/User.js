/**
 * Created by fyl08 on 2016/1/13.
 */
Ext.define('CACS.controller.User', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'user/list': 'userList'
        }
    },

    views: [
        'user.List'
    ],

    /**
     * Called when the view is created
     */
    init: function () {

    },

    userList: function () {
        this.tabAction({
            view: 'user.List'
        });
    }
});