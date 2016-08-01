/**
 * Created by fyl08 on 2016/1/21.
 */
Ext.define('CACS.model.system.Plugin', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'PluginId',
            type: 'string'
        },
        {
            name: 'PluginName',
            type: 'string'
        },
        {
            name: 'Description',
            type: 'string'
        },
        {
            name: 'DependentOn',
            type: 'string'
        },
        {
            name: 'Version',
            type: 'string'
        },
        {
            name: 'Tags',
            type: 'string'
        },
        {
            name: 'Installed',
            type: 'boolean'
        },
        {
            name: 'EncodeId',
            convert: function (v, record) {
                return encodeURI(record.get('PluginId'));
            }
        }
    ],

    idProperty: 'PluginId'
});