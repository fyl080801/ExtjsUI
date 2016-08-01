/**
 * Created by fyl08 on 2015/12/24.
 */
Ext.define('CACS.view.role.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.role',

    stores: {
        /*
         A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
         store configuration. For example:

         users: {
         model: 'Role',
         autoLoad: true
         }
         */
    },

    data: {
        selection: null
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
    }
});