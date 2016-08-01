/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.controller.System', {
    extend: 'Ext.app.Controller',

    requires: [
        'CACS.data.AjaxOption',
        'Ext.util.History'
    ],

    config: {
        routes: {
            'system/about': 'showAbout',
            'system/plugins': 'pluginList',
            'plugin/install/:id': 'installPlugin',
            'plugin/uninstall/:id': 'uninstallPlugin'
        }
    },

    views: [
        'system.About',
        'system.Plugins'
    ],

    stores: [
        'system.Plugins'
    ],

    models: [
        'system.Plugin'
    ],

    init: function () {

    },

    showAbout: function () {
        this.windowAction({
            view: 'system.About',
            minimizable: true
        });
    },

    pluginList: function () {
        this.windowAction({
            view: 'system.Plugins',
            minimizable: false,
            modal: true
        });
    },

    installPlugin: function (id) {
        Ext.Ajax.request({
            url: '/Plugin/Install/' + id,
            method: 'GET',
            success: function () {
                location.reload(true);
            }
        });
        Ext.History.add('');
    },

    uninstallPlugin: function (id) {
        this.confirmAction({
            title: "卸载",
            content: "是否卸载插件？",
            callback: function (btn) {
                if (btn === 'yes') {
                    Ext.Ajax.request(Ext.create('CACS.data.AjaxOption', {
                        url: '/Plugin/Uninstall/' + id,
                        method: 'GET',
                        success: function (options, success) {
                            location.reload(true);
                        }
                    }));
                }
            }
        });
    }
});