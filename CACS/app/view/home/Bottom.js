/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.home.Bottom', {
    extend: 'Ext.Container',
    alias: 'widget.homebottom',

    requires: [
        'CACS.component.task.Windowbar',
        'CACS.view.home.BottomController',
        'CACS.view.home.Start',
        'Ext.button.Button',
        'Ext.layout.container.HBox',
        'Ext.menu.Menu',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'homebottom',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    glyph: 'xf17a@FontAwesome',
                    text: '开始',
                    arrowVisible: false,
                    menu: {
                        xtype: 'menu',
                        items: [
                            {
                                xtype: 'homestart'
                            }
                        ],
                        listeners: {
                            show: 'onMenuShow'
                        }
                    }
                }
            ]
        },
        {
            xtype: 'windowbar',
            itemId: 'maintaskbar',
            reference: 'maintaskbar',
            flex: 1,
            listeners: {
                render: 'onWindowbarRender'
            }
        },
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'layers',
                    handler: 'onDesktopClick'
                }
            ]
        }
    ]
});