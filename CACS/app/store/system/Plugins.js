/**
 * Created by fyl08 on 2016/1/21.
 */
Ext.define('CACS.store.system.Plugins', {
    extend: 'Ext.data.Store',

    requires: [
        'CACS.model.system.Plugin'
    ],

    model: 'CACS.model.system.Plugin',

    proxy: {
        type: 'ajax',
        url: '/Plugin/List',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
    /*
     Fields can also be declared without a model class:
     fields: [
     {name: 'firstName', type: 'string'},
     {name: 'lastName',  type: 'string'},
     {name: 'age',       type: 'int'},
     {name: 'eyeColor',  type: 'string'}
     ]
     */

    /*
     Uncomment to specify data inline
     data : [
     {firstName: 'Ed',    lastName: 'Spencer'},
     {firstName: 'Tommy', lastName: 'Maintz'},
     {firstName: 'Aaron', lastName: 'Conran'}
     ]
     */
});