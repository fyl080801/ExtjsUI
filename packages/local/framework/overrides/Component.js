/**
 * Created by fyl08 on 2016/1/25.
 */
Ext.define('CACS.overrides.Component', {
    override: 'Ext.Component',

    requires: [
        'CACS.util.Authorize'
    ],

    authorize: [],

    listeners: {
        render: function (component) {
            CACS.util.Authorize.componentAuthorize(component);
        }
    }
});