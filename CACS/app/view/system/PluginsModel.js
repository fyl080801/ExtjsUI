/**
 * Created by fyl08 on 2016/1/21.
 */
Ext.define('CACS.view.system.PluginsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.systemplugins',

    data: {
        selection: null
    }//,

    //formulas: {
    //    encodeId: function (get) {
    //        var sel = get('selection');
    //        if (sel) {
    //            return encodeURI(sel.PluginId);
    //        }
    //    }
    //}
});