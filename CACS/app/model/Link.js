/**
 * Created by fyl08 on 2016/1/13.
 */
Ext.define('CACS.model.Link', {
    extend: 'Ext.data.TreeModel',

    requires: [
        'CACS.util.Authorize'
    ],

    fields: [
        {
            name: 'text',
            type: 'string'
        },
        {
            name: 'iconCls',
            type: 'string'
        },
        {
            name: 'leaf',
            type: 'boolean'
        },
        {
            name: 'href',
            type: 'string'
        },
        {
            name: 'hrefTarget',
            type: 'string',
            defaultValue: '_self'
        },
        {
            name: 'authorize'
        }
    ],

    constructor: function () {
        this.callParent(arguments);
        var children = this.get('children');
        if (Ext.isArray(children) && children.length > 0) {
            var visible = false;
            for (var index in children) {
                if (CACS.util.Authorize.isAuthorize(children[index].authorize)) {
                    visible = true;
                    break;
                }
            }
            this.set('visible', visible);
        } else {
            this.set('visible', CACS.util.Authorize.isAuthorize(this.get('authorize')));
        }
    }
});