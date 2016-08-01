/**
 * Created by fyl08 on 2016/1/14.
 */
Ext.define('CACS.view.system.About', {
    extend: 'Ext.panel.Panel',

    requires: [
        'Ext.form.field.Display',
        'Ext.layout.container.Form'
    ],

    title: '关于',

    iconCls: 'help',

    width: 640,

    height: 480,

    layout: 'form',

    items: [
        {
            xtype: 'displayfield',
            fieldLabel: '说明',
            value: '完成基本功能的实现'
        },
        {
            xtype: 'displayfield',
            fieldLabel: '时间',
            value: '2016年1月30日'
        }
    ]
});