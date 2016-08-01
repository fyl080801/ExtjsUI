/**
 * Created by fyl08 on 2015/12/24.
 */
Ext.define('CACS.model.ViewItem', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'Action',
            type: 'string'
        },
        {
            name: 'FrameId',
            type: 'string'
        },
        {
            name: 'ViewType',
            type: 'string'
        },
        {
            name: 'Component',
            type: 'string'
        },
        {
            name: 'Instance'
        }
    ],

    idProperty: 'FrameId'
});

//Action: action,
//    FrameId: viewInstance.frameId,
//    Component: viewInstance.self.getName(),
//    Instance: viewInstance