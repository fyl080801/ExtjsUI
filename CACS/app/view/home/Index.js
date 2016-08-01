/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.home.Index', {
    extend: 'Ext.Container',
    alias: 'widget.homeindex',

    requires: [
        'CACS.view.home.Bottom',
        'CACS.view.home.Top',
        'CACS.view.home.IndexController',
        'CACS.view.home.IndexModel',
        'CACS.view.home.Main',
        'Ext.layout.container.Border',
        'Ext.tab.Panel',
        'Ext.ux.TabCloseMenu',
        'Ext.ux.TabReorderer'
    ],

    viewModel: {
        type: 'homeindex'
    },

    controller: 'homeindex',

    itemId: 'homeindex',

    layout: 'border',

    items: [
        {
            xtype: 'tabpanel',
            itemId: 'maincenter',
            region: 'center',
            margin: '0 4 4 4',
            activeTab: 0,
            minTabWidth: 115,
            plugins: [
                {
                    ptype: 'tabclosemenu',
                    closeTabText: '关闭',
                    closeOthersTabsText: '关闭其他',
                    closeAllTabsText: '关闭所有'
                },
                {
                    ptype: 'tabreorderer'
                }
            ],

            defaults: {
                closable: true
            },

            items: [
                {
                    xtype: 'homemain',
                    closable: false,
                    reorderable: false
                }
            ],

            listeners: {
                render: 'onCenterRender',
                tabchange: 'onCenterChanged'
            }
        },
        {
            xtype: 'hometop',
            region: 'north',
            margin: 4
        },
        {
            xtype: 'homebottom',
            region: 'south',
            margin: '0 4 4 4'
        }
    ]
});