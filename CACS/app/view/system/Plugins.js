/**
 * Created by fyl08 on 2016/1/14.
 */
Ext.define('CACS.view.system.Plugins', {
    extend: 'Ext.grid.Panel',

    requires: [
        'CACS.view.system.PluginsController',
        'CACS.view.system.PluginsModel',
        'Ext.button.Button',
        'Ext.grid.column.Column',
        'Ext.toolbar.Fill'
    ],

    controller: 'systemplugins',

    viewModel: 'systemplugins',

    title: '插件管理',

    iconCls: 'plugin',

    bodyBorder: true,

    width: 800,

    height: 600,

    store: 'system.Plugins',

    autoLoad: true,

    selModel: {
        mode: 'SINGLE',
        allowDeselect: true
    },

    bind: {
        selection: '{selection}'
    },

    columns: [
        {
            xtype: 'gridcolumn',
            dataIndex: 'PluginName',
            text: '插件名',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'Version',
            text: '版本',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'Tags',
            text: '标签',
            flex: 2
        },
        {
            xtype: 'gridcolumn',
            dataIndex: 'Installed',
            text: '状态',
            flex: 1,
            renderer: function (value, metaData, record, rowIndex) {
                return value ? '已安装' : '未安装';
            }
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: 'button',
                    text: '上传',
                    iconCls: 'folder_up'
                },
                '->',
                {
                    xtype: 'button',
                    text: '安装',
                    iconCls: 'disk',
                    hrefTarget: '_self',
                    bind: {
                        disabled: '{!selection}',
                        hidden: '{selection.Installed}',
                        href: '#plugin/install/{selection.EncodeId}'
                    }
                },
                {
                    xtype: 'button',
                    text: '卸载',
                    iconCls: 'plugin_delete',
                    hrefTarget: '_self',
                    bind: {
                        disabled: '{!selection}',
                        hidden: '{!selection.Installed}',
                        href: '#plugin/uninstall/{selection.EncodeId}'
                    }
                }
            ]
        }
    ]
});