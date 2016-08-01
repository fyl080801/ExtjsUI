/**
 * Created by fyl08 on 2015/12/24.
 */
Ext.define('CACS.view.role.List', {
    extend: 'Ext.grid.Panel',

    requires: [
        'CACS.view.role.ListController',
        'CACS.view.role.ListModel',
        'Ext.button.Button',
        'Ext.grid.column.Column',
        'Ext.toolbar.Fill'
    ],

    viewModel: {
        type: 'role'
    },

    controller: 'role',

    bodyBorder: true,

    iconCls: 'group',

    title: '角色管理',

    store: 'role.Roles',

    autoLoad: true,

    width: 800,

    height: 600,

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
            text: '名称',
            dataIndex: 'RoleName',
            flex: 1
        },
        {
            xtype: 'gridcolumn',
            text: '描述',
            dataIndex: 'Description',
            sortable: false,
            flex: 2
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                '->',
                {
                    xtype: 'button',
                    text: '新建',
                    iconCls: 'add',
                    authorize: '/Role/Create',
                    href: '#role/create',
                    hrefTarget: '_self'
                },
                {
                    xtype: 'button',
                    text: '编辑',
                    iconCls: 'note_edit',
                    authorize: '/Role/Update',
                    hrefTarget: '_self',
                    bind: {
                        disabled: '{!selection}',
                        href: '#role/edit/{selection.Id}'
                    }
                },
                {
                    xtype: 'button',
                    text: '权限',
                    iconCls: 'key',
                    authorize: '/Role/Authorize',
                    hrefTarget: '_self',
                    bind: {
                        disabled: '{!selection}',
                        href: '#role/authority/{selection.Id}'
                    }
                },
                {
                    xtype: 'button',
                    text: '成员',
                    iconCls: 'group',
                    authorize: '/Role/Members',
                    hrefTarget: '_self',
                    bind: {
                        disabled: '{!selection}',
                        href: '#role/members/{selection.Id}'
                    }
                },
                {
                    xtype: 'button',
                    text: '删除',
                    iconCls: 'delete',
                    authorize: '/Role/Delete',
                    hrefTarget: '_self',
                    bind: {
                        disabled: '{!selection}',
                        href: '#role/delete/{selection.Id}'
                    }
                }
            ]
        }
    ],

    listeners: {
        rowdblclick: 'onRoleDetails'
    }
});