/**
 * Created by fyl08 on 2016/1/21.
 */
Ext.define('CACS.view.home.BottomController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.homebottom',

    init: function () {

    },

    onMenuShow: function (component) {
        component.down('homestart').getViewModel().set('cardIndex', 0);
        //CACS.app.getStore('LinkHistory').load();
    },

    onWindowbarRender: function (component) {
        var viewStore = CACS.app.getStore('Views');
        viewStore.each(function (record) {
            if (record.get('ViewType') === 'CACS.mvc.result.WindowResult') {
                var instance = record.get('Instance');
                component.add(instance);//.doActive();
            }
        });
    },

    onDesktopClick: function (component) {
        var maintaskbar = CACS.app.getController('Home').getMainTaskbar();
        var vis = maintaskbar.items.findBy(function (item) {
            return !item.taskWindow.isHidden();
        });
        if (!vis) {
            maintaskbar.items.each(function (item) {
                item.taskWindow.show();
            });
        } else {
            maintaskbar.items.each(function (item) {
                item.taskWindow.hide();
            });
        }
    }
});