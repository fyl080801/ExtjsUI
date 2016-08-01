/**
 * Created by fyl08 on 2016/3/11.
 */
Ext.define('CACS.controller.Logging', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'logging/list': 'logList'
        }
    },

    views: [
        'logging.Details',
        'logging.List'
    ],

    models: [
        'logging.LogModel'
    ],

    stores: [
        'logging.LogStore'
    ],

    /**
     * Called when the view is created
     */
    init: function () {

    },

    logList: function () {
        this.tabAction({
            view: 'logging.List'
        });
    }
});