/**
 * Created by fyl08 on 2016/1/26.
 */
Ext.define('CACS.view.home.TopController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.hometop',

    requires: [
        'CACS.data.AjaxOption'
    ],

    init: function () {

    },

    onSaveTabClick: function (component) {
        var saves = [];
        var viewStore = CACS.app.getStore('Views');
        var maincenter = CACS.app.getController('Home').getMainCenter();
        maincenter.items.each(function (item, index, len) {
            var frame = viewStore.getById(item.frameId);
            if (frame) {
                saves.push({
                    Action: frame.get('Action'),
                    Component: frame.get('Component'),
                    FrameId: frame.get('FrameId'),
                    ViewType: frame.get('ViewType'),
                    Order: index
                });
            }
        });
        Ext.Ajax.request({
            url: '/UI/SaveTabSettings',
            method: 'POST',
            jsonData: Ext.JSON.encode({
                settings: saves
            }),
            callback: function (options, success, response) {

            }
        });
    }
});