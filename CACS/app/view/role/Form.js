/**
 * Created by fyl08 on 2015/12/24.
 */
Ext.define('CACS.view.role.Form', {
    extend: 'Ext.form.Panel',
    alias: 'widget.roleform',

    requires: [
        'Ext.form.field.Hidden',
        'Ext.form.field.Text'
    ],

    padding: 10,

    items: [
        {
            xtype: 'hiddenfield',
            name: 'Id',
            value: -1
        },
        {
            xtype: 'textfield',
            fieldLabel: '名称',
            blankText: '输入名称',
            allowBlank: false,
            name: 'RoleName'
        },
        {
            xtype: 'textfield',
            fieldLabel: '描述',
            blankText: '输入描述',
            width: '100%',
            name: 'Description'
        }
    ]
});