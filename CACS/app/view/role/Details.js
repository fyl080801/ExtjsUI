/**
 * Created by fyl08 on 2015/12/24.
 */
Ext.define('CACS.view.role.Details', {
    extend: 'Ext.form.Panel',

    requires: [
        'Ext.form.field.Display',
        'Ext.form.field.Hidden'
    ],

    width: 640,

    iconCls: 'group',

    title: '角色信息',

    bodyBorder: true,

    padding: 10,

    items: [
        {
            xtype: 'hiddenfield',
            name: 'Id',
            value: -1
        },
        {
            xtype: 'displayfield',
            fieldLabel: '名称',
            allowBlank: false,
            name: 'RoleName'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '描述',
            name: 'Description'
        }
    ]
});