/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.view.account.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.accountlogin',

    stores: {
        /*
         A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
         store configuration. For example:

         users: {
         model: 'Login',
         autoLoad: true
         }
         */
    },

    data: {
        username: '',
        password: '',
        remember: false
    }
});