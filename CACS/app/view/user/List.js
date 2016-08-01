/**
 * Created by fyl08 on 2016/1/22.
 */
Ext.define('CACS.view.user.List', {
    extend: 'Ext.grid.Panel',

    requires: [
        'CACS.view.user.ListController',
        'CACS.view.user.ListModel',
        'Ext.button.Button',
        'Ext.toolbar.Fill'
    ],

    viewModel: {
        type: 'userlist'
    },

    controller: 'userlist',

    iconCls: 'user',

    title: '用户管理',

    bodyBorder: true,

    columns: [],

    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    text: '添加',
                    authorize: '/User/List',
                    iconCls: 'add'
                }
            ]
        }
    ]
});