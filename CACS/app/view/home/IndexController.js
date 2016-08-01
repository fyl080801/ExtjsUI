/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.home.IndexController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.homeindex',

    requires: [
        'Ext.util.History'
    ],

    /**
     * Called when the view is created
     */
    init: function () {

    },

    onCenterRender: function (component, eOpts) {
        var viewStore = CACS.app.getStore('Views');
        viewStore.each(function (record) {
            if (record.get('ViewType') === 'CACS.mvc.result.TabResult') {
                var instance = record.get('Instance');
                if (Ext.isEmpty(instance))
                    instance = Ext.create(record.get('Component'));
                component.add(instance);
            }
        });
    },

    onCenterChanged: function (tabPanel, newCard, oldCard, eOpts) {
        var viewStore = CACS.app.getStore('Views');
        var frame = viewStore.getById(newCard.frameId);
        if (frame) {
            Ext.util.History.add(frame.get('Action'));
        } else {
            Ext.util.History.add('');
        }
    }
});