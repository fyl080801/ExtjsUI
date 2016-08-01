/**
 * Created by fyl08 on 2015/12/24.
 */
Ext.define('CACS.store.Views', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.reader.Array'
    ],

    storeId: 'Views',

    model: 'CACS.model.ViewItem',

    proxy: {
        type: 'memory',
        reader: 'array'
    }
});