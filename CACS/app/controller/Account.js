/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.controller.Account', {
    extend: 'Ext.app.Controller',

    requires: [
        'CACS.data.AjaxOption'
    ],

    config: {
        routes: {
            'account/login': 'showLogin',
            'account/relogin': 'reLogin',
            'account/logout': 'logout'
        }
    },

    views: [
        'account.Login'
    ],

    /**
     * Called when the view is created
     */
    init: function () {

    },

    showLogin: function () {
        var login = this.showAction({
            view: 'account.Login'
        });
        login.getViewModel().set('username', '');
        login.getViewModel().set('remember', '');
    },

    reLogin: function () {
        Ext.MessageBox.show({
            title: '登录超时',
            message: ''
        });
    },

    logout: function () {
        var me = this;
        me.confirmAction({
            title: '退出',
            content: '是否退出？',
            callback: function (btn, text) {
                if (btn !== 'yes') return;
                Ext.Ajax.request(Ext.create('CACS.data.AjaxOption', {
                    url: '/Account/Logout',
                    method: 'POST',
                    disabledInterceptors: 'CACS.interceptor.Session',
                    success: function (response, opts) {
                        var result = Ext.JSON.decode(response.responseText);
                        if (result.success) {
                            var indexview = CACS.app.getController('Home').getMainIndex();
                            if (indexview)
                                indexview.destroy();
                            var loginview = me.getView('account.Login').create();
                            var loginviewmodel = loginview.getViewModel();
                            loginviewmodel.set('username', result.data.Username);
                            loginviewmodel.set('remember', result.data.Remembered);
                        }
                    }
                }));
            }
        });
    }
});