/**
 * Created by fyl08 on 2015/12/24.
 */
Ext.define('CACS.view.role.Create', {
    extend: 'Ext.panel.Panel',

    requires: [
        'CACS.view.role.CreateController',
        'CACS.view.role.Form',
        'Ext.button.Button',
        'Ext.toolbar.Fill'
    ],

    controller: 'rolecreate',

    width: 640,

    iconCls: 'add',

    title: '创建角色',

    bodyBorder: true,

    items: [
        {
            xtype: 'roleform',
            reference: 'form',
            url: '/Role/Create'
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
                    iconCls: 'accept',
                    handler: 'onSubmitClick'//,
                    //bind: {
                    //    disabled: '{!form.valid}'
                    //}
                },
                {
                    xtype: 'button',
                    text: '取消',
                    iconCls: 'cancel',
                    handler: 'onCancelClick'
                }
            ]
        }
    ]
});