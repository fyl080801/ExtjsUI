/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.home.Main', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.homemain',

    requires: [
        'CACS.view.home.MainModel',
        'CACS.view.home.MainController'
    ],

    /*
     Uncomment to give this component an xtype
     xtype: 'main',
     */

    viewModel: {
        type: 'homemain'
    },

    controller: 'homemain',

    title: '首页',

    items: [
        /* include child components here */
    ]
});