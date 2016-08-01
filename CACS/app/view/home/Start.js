/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.home.Start', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.homestart',

    requires: [
        'CACS.view.home.StartController',
        'CACS.view.home.StartModel',
        'Ext.button.Button',
        'Ext.container.Container',
        'Ext.grid.Panel',
        'Ext.grid.column.Action',
        'Ext.grid.column.Column',
        'Ext.layout.container.Card',
        'Ext.toolbar.Fill',
        'Ext.toolbar.Separator',
        'Ext.tree.Panel'
    ],

    /*
     Uncomment to give this component an xtype
     xtype: 'start',
     */

    viewModel: {
        type: 'homestart'
    },

    controller: 'homestart',

    bind: {
        activeItem: '{cardIndex}'
    },

    defaults: {
        width: 250,
        hideHeaders: true,
        bodyBorder: true
    },

    height: 600,

    layout: 'card',

    bodyBorder: true,

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'right',
            vertical: true,
            items: [
                {
                    xtype: 'container',
                    items: [
                        {
                            xtype: 'button',
                            glyph: 'xf007@FontAwesome',
                            scale: 'large'
                        }
                    ]
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'tbseparator'
                },
                {
                    xtype: 'container',
                    frame: false,
                    items: [
                        {
                            xtype: 'button',
                            glyph: 'xf08b@FontAwesome',
                            text: '退出',
                            listeners: {
                                click: 'onLogoutClick'
                            }
                        }
                    ]
                }
            ]
        }
    ],

    items: [
        {
            xtype: 'gridpanel',
            title: '常用功能',
            store: 'LinkHistory',
            autoLoad: true,
            disableSelection: true,
            columns: [
                {
                    xtype: 'actioncolumn',
                    width: 40,
                    dataIndex: 'iconCls',
                    items: [
                        {
                            getClass: function (v) {
                                return v;
                            }
                        }
                    ]
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'text',
                    flex: 1
                },
                {
                    xtype: 'actioncolumn',
                    width: 40,
                    items: [
                        {
                            iconCls: 'delete',
                            handler: function (view, rowIndex, colIndex, item, record) {
                                CACS.app.getStore('LinkHistory').remove(record.record);
                            }
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            flex: 1,
                            text: '所有功能',
                            listeners: {
                                click: 'onAllFunctionClick',
                                render: 'onButtonRender'
                            }
                        }
                    ]
                }
            ],
            listeners: {
                rowclick: 'onHistoryItemClick'
            }
        },
        {
            xtype: 'treepanel',
            title: '所有功能',
            disableSelection: true,
            store: 'Links',
            rootVisible: false,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'button',
                            flex: 1,
                            text: '返回',
                            listeners: {
                                click: 'onBackClick',
                                render: 'onButtonRender'
                            }
                        }
                    ]
                }
            ],
            listeners: {
                itemclick: 'onTreepanelItemClick',
                render: 'onTreepanelRender'
            }
        }
    ]
});