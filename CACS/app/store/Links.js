/**
 * Created by fyl08 on 2016/1/6.
 */
Ext.define('CACS.store.Links', {
    extend: 'Ext.data.TreeStore',

    model: 'CACS.model.Link',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    },

    rootVisible: false,

    root: {},

    listeners: {
        nodebeforeappend: function () {

        }
    }
});