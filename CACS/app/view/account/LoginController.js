/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.account.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.accountlogin',

    requires: [
        'CACS.data.AjaxOption'
    ],

    init: function () {

    },

    onLoginRender: function (component, eOpts) {
        //var button = component.up('systemlogin').down('button');
        //var fields = component.items.items;
        //for (var field in fields) {
        //    fields[field].addListener('specialkey', this.onLoginClick, this);
        //}
    },

    onLoginClick: function (button, e, eOpts) {
        var win = this.getView();
        var loginform = this.getReferences().form;
        if (!loginform.isValid())
            return;
        loginform.submit(Ext.create('CACS.data.AjaxOption', {
            url: '/Account/Login',
            method: 'POST',
            disabledInterceptors: 'CACS.interceptor.Session',
            success: function (form, action) {
                location.reload();
                //win.destroy();
                //setTimeout(CACS.app.bootProcess(), 250);
            }
        }));
    }
});