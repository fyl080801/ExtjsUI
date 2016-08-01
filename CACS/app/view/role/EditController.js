/**
 * Created by fyl08 on 2016/1/18.
 */
Ext.define('CACS.view.role.EditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.roleedit',

    init: function () {

    },

    onCancel: function () {
        this.getView().destroy();
    }
});