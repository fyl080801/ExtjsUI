/**
 * Created by fyl08 on 2016/1/21.
 */
Ext.define('CACS.view.system.PluginsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.systemplugins',

    init: function () {

    },

    onInstallClick: function () {
        var plugin = this.getViewModel().get('selection');
        if (!plugin)
            return;
        Ext.Ajax.request({
            url: '/Plugin/Install/' + plugin.get('PluginId'),
            method: 'GET',
            callback: function (options, success) {
                if (success)
                    location.reload(true);
            }
        });
    },

    onUninstallClick: function () {
        var plugin = this.getViewModel().get('selection');
        if (!plugin)
            return;
        Ext.MessageBox.confirm('卸载', '是否卸载', function (btn) {
            if (btn === 'yes') {
                Ext.Ajax.request({
                    url: '/Plugin/Uninstall/' + plugin.get('PluginId'),
                    callback: function (options, success) {
                        if (success)
                            location.reload(true);
                    }
                });
            }
        });
    }
});