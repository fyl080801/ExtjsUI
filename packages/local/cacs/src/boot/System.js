/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.boot.System', {
    extend: 'CACS.util.pipeline.AjaxNode',

    requires: [
        'CACS.util.Authorize'
    ],

    url: '/System/Information',

    method: 'GET',

    disabledInterceptors: 'CACS.interceptor.Session',

    handler: function (data) {
        if (!data || !data.Session) {
            CACS.app.getController('Account').getView('account.Login').create();
            return false;
        }
        if (data.Session.Vaild == false) {
            var loginview = CACS.app.getController('Account').getView('account.Login').create();
            var loginviewmodel = loginview.getViewModel();
            loginviewmodel.set('username', data.Session.Username);
            loginviewmodel.set('remember', data.Session.Remembered);
            return false;
        } else {
            CACS.util.Authorize.initSession(data.Session);
            Ext.Array.forEach(data.Permissions, function (item, all, index) {
                CACS.util.Authorize.add(item);
            });
        }
        return true;
    }
});