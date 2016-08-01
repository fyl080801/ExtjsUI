/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.home.Top', {
    extend: 'Ext.Container',
    alias: 'widget.hometop',

    requires: [
        'CACS.view.home.TopController',
        'Ext.button.Segmented',
        'Ext.layout.container.HBox',
        'Ext.menu.Item',
        'Ext.panel.Panel',
        'Ext.toolbar.Toolbar'
    ],

    controller: 'hometop',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'image',
            src: 'ExtjsUI/UI/Logo'
        },
        {
            xtype: 'panel',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            }
        },
        {
            xtype: 'toolbar',
            items: [
                {
                    glyph: 'xf0c7@FontAwesome',
                    scale: 'medium',
                    tooltip: '保存选项卡布局',
                    handler: 'onSaveTabClick'
                },
                {
                    xtype: 'segmentedbutton',
                    allowToggle: false,
                    items: [
                        {
                            glyph: 'xf003@FontAwesome',
                            href: '#message/list',
                            hrefTarget: '_self',
                            scale: 'medium',
                            tooltip: '消息'
                        },
                        {
                            iconCls: 'bullet_arrow_down',
                            scale: 'medium',
                            arrowVisible: false,
                            menu: {
                                items: [
                                    {
                                        xtype: 'menuitem',
                                        text: '空'
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
});