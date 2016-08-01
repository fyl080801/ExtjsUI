/**
 * Created by fyl08 on 2015/12/24.
 */
Ext.define('CACS.view.role.Edit', {
    extend: 'Ext.panel.Panel',

    requires: [
        'CACS.view.role.EditController',
        'CACS.view.role.Form',
        'Ext.button.Button',
        'Ext.toolbar.Fill'
    ],

    controller: 'roleedit',

    title: '编辑角色',

    iconCls: 'note_edit',

    width: 640,

    bodyBorder: true,

    items: [
        {
            xtype: 'roleform'
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                '->',
                {
                    xtype: 'button',
                    text: '确定',
                    iconCls: 'accept'
                },
                {
                    xtype: 'button',
                    text: '取消',
                    iconCls: 'cancel',
                    handler: 'onCancel'
                }
            ]
        }
    ]
});