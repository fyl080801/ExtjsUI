/**
 * Created by fyl08 on 2016/1/14.
 */
Ext.define('CACS.view.role.CreateController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rolecreate',

    /**
     * Called when the view is created
     */
    init: function () {

    },

    onSubmitClick: function () {
        var me = this;
        var store = CACS.app.getController('Role').getStore('role.Roles');
        var form = this.getReferences().form;
        var view = this.getView();
        if (!form.isValid())
            return;
        form.submit({
            success: function (form, action) {
                store.load();
                //CACS.app.redirectTo('role/details/' + action.result.data);
                view.destroy();
            }
        });
    },

    onCancelClick: function () {
        this.getView().destroy();
    }
});