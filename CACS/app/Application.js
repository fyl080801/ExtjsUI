/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */

Ext.define('CACS.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'CACS.boot.Init',
        'CACS.boot.Settings',
        'CACS.boot.System',
        'CACS.boot.UI',
        'CACS.util.pipeline.Runner'
    ],

    name: 'CACS',

    models: [
        'ViewItem',
        'Link'
    ],

    views: [
        'Root'
    ],

    controllers: [
        'Account',
        'System',
        'Home',
        'User',
        'Role',
        'Message',
        'Logging'
    ],

    stores: [
        'Views',
        'Links',
        'LinkHistory'
    ],

    launch: function () {
        this.bootProcess();
    },

    bootProcess: function () {
        var me = this;
        var root = me.getMainView();
        var boot = Ext.create('CACS.util.pipeline.Runner', {
            listeners: {
                onEnd: function () {
                    root.add(me.getController('Home').getView('home.Index').create());
                }
            }
        });
        boot.addNode(Ext.create('CACS.boot.Init'));
        boot.addNode(Ext.create('CACS.boot.System'));
        boot.addNode(Ext.create('CACS.boot.UI'));
        boot.addNode(Ext.create('CACS.boot.Settings'));
        boot.run(0);
    }
});
