/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.account.Login', {
    extend: 'Ext.window.Window',

    requires: [
        'CACS.view.account.LoginController',
        'CACS.view.account.LoginModel',
        'Ext.button.Button',
        'Ext.form.Panel',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.layout.container.Fit',
        'Ext.toolbar.Fill'
    ],

    viewModel: {
        type: 'accountlogin'
    },

    controller: 'accountlogin',

    autoShow: true,

    draggable: false,

    resizable: false,

    width: 400,

    layout: 'fit',

    closable: false,

    title: '登陆',

    items: [
        {
            xtype: 'form',
            reference: 'form',
            border: false,
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    name: 'Username',
                    anchor: '100%',
                    fieldLabel: '用户名',
                    allowBlank: false,
                    allowOnlyWhitespace: false,
                    bind: {
                        value: '{username}'
                    }
                },
                {
                    xtype: 'textfield',
                    name: 'Password',
                    anchor: '100%',
                    fieldLabel: '密码',
                    inputType: 'password',
                    allowBlank: false,
                    allowOnlyWhitespace: false,
                    bind: {
                        value: '{password}'
                    }
                },
                {
                    xtype: 'checkboxfield',
                    name: 'Remember',
                    anchor: '100%',
                    fieldLabel: ' ',
                    labelSeparator: '     ',
                    boxLabel: '记住用户',
                    bind: {
                        value: '{remember}'
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
                    xtype: 'tbfill'
                },
                {
                    xtype: 'button',
                    glyph: 'xf090@FontAwesome',
                    text: '登陆',
                    listeners: {
                        click: 'onLoginClick'
                    }
                }
            ]
        }
    ]
});