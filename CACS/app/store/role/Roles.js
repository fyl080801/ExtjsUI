/**
 * Created by fyl08 on 2016/1/13.
 */
Ext.define('CACS.store.role.Roles', {
    extend: 'Ext.data.Store',

    requires: [
        'CACS.model.role.Role'
    ],

    model: 'CACS.model.role.Role',

    proxy: {
        type: 'ajax',
        api: {
            create: '/Role/Create',
            read: '/Role/List',
            update: '/Role/Update',
            destroy: '/Role/Delete'
        },
        //url: '/Role/List',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }//,
        //writer: {
        //    type: 'json',
        //    writeAllFields: false
        //}
    }
    /*
     Uncomment to use a specific model class
     model: 'User',
     */

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