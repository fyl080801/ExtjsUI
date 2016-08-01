/**
 * Created by fyl08 on 2015/12/24.
 */
Ext.define('CACS.view.role.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.role',

    /**
     * Called when the view is created
     */
    init: function () {

    },

    onRoleDetails: function (grid, record, tr, rowIndex, e, eOpts) {
        this.redirectTo('role/details/' + record.get('Id'));
    }
});