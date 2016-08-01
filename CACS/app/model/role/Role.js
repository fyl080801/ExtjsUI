/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.model.role.Role', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    idProperty: 'Id',

    fields: [
        {
            type: 'string',
            name: 'Id'
        },
        {
            type: 'string',
            name: 'RoleName'
        },
        {
            type: 'string',
            allowNull: true,
            name: 'Description'
        }
    ],

    proxy: {
        type: 'ajax',
        url: '/Role/Details',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});