/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.home.StartController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.homestart',

    init: function () {

    },

    onLogoutClick: function () {
        this.redirectTo('account/logout');
    },

    onButtonRender: function (component) {
        component.el.on('mousedown', function (e) {
            e.preventDefault();
            //e.stopPropagation();
        });
    },

    onTreepanelRender: function (component) {
        var menu = component.up('menu');

        //menu.el.on('mousedown', function (e) {
        //    e.preventDefault();
        //    e.stopPropagation();
        //});
    },

    onHistoryItemClick: function (component, record, item, index, e, eOpts) {
        var href = record.get('href');
        this.redirectTo(href);
        var linkHistory = CACS.app.getStore('LinkHistory');
        var oldIndex = linkHistory.find('href', href);
        if (oldIndex >= 0) {
            linkHistory.removeAt(oldIndex);
        }
        linkHistory.insert(0, {
            href: href,
            iconCls: record.get('iconCls'),
            text: record.get('text')
        });
        linkHistory.load();
    },

    onTreepanelItemClick: function (dataview, record, item, index, e, eOpts) {
        var href = record.get('href');
        if (!Ext.isEmpty(href)) {
            this.redirectTo(href);
            var linkHistory = CACS.app.getStore('LinkHistory');
            var oldIndex = linkHistory.find('href', href);
            if (oldIndex < 0)
                linkHistory.insert(0, {
                    href: href,
                    iconCls: record.get('iconCls'),
                    text: record.get('text')
                });
            linkHistory.load();
        }
    },

    onAllFunctionClick: function (button) {
        this.getViewModel().set('cardIndex', 1);
    },

    onBackClick: function (button) {
        this.getViewModel().set('cardIndex', 0);
    }
});