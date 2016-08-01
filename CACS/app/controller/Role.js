/**
 * Created by fyl08 on 2016/1/13.
 */
Ext.define('CACS.controller.Role', {
    extend: 'Ext.app.Controller',

    requires: [
        'CACS.data.AjaxOption',
        'Ext.util.History'
    ],

    views: [
        'role.Create',
        'role.Details',
        'role.Edit',
        'role.Form',
        'role.List',
        'role.Authority'
    ],

    models: [
        'role.Role'
    ],

    stores: [
        'role.Roles'
    ],

    config: {
        routes: {
            'role/list': 'roleList',
            'role/create': 'createRole',
            'role/details/:id': 'detailsRole',
            'role/edit/:id': 'editRole',
            'role/delete/:id': 'deleteRole',
            'role/authority/:id': 'roleAuthority'
        }
    },

    /**
     * Called when the view is created
     */
    init: function () {

    },

    roleList: function () {
        this.windowAction({
            view: 'role.List',
            minimizable: true
        });
    },

    createRole: function () {
        this.windowAction({
            view: 'role.Create',
            minimizable: true,
            modal: true
        });
    },

    editRole: function (id) {
        var me = this;
        CACS.model.role.Role.load(id, {
            success: function (response, operation) {
                var details = me.windowAction({
                    view: 'role.Edit',
                    minimizable: true,
                    modal: true,
                    frameId: 'role/edit/' + id
                });
                details.down('form').loadRecord(Ext.create('CACS.model.role.Role', response.data));
            }
        });
    },

    deleteRole: function (id) {
        var me = this;
        Ext.MessageBox.confirm('删除', '是否删除角色？', function (btn, text) {
            if (btn === 'yes') {
                Ext.Ajax.request(Ext.create('CACS.data.AjaxOption', {
                    url: '/Role/Delete/' + id,
                    callback: function (options, success, response) {
                        var result = response.realResult;
                        if (result.success) {
                            me.getStore('role.Roles').load();
                        }
                    }
                }));
            }
        });
        Ext.util.History.add('');
    },

    detailsRole: function (id) {
        var me = this;
        CACS.model.role.Role.load(id, {
            success: function (response, operation) {
                var details = me.windowAction({
                    view: 'role.Details',
                    minimizable: true,
                    modal: false,
                    frameId: 'role/details/' + id
                });
                details.loadRecord(Ext.create('CACS.model.role.Role', response.data));
            }
        });
    },

    roleAuthority: function (id) {
        var me = this;
        me.windowAction({
            view: 'role.Authority',
            minimizable: true,
            modal: true,
            frameId: 'role/authority/' + id
        });
    }
});