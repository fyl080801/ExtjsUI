/**
 * Created by fyl08 on 2016/1/27.
 */
Ext.define('CACS.store.LinkHistory', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.util.Cookies'
    ],

    fields: [
        {name: 'href', type: 'string'},
        {name: 'text', type: 'string'},
        {name: 'iconCls', type: 'string'}
    ],

    data: [],

    listeners: {
        load: function (store) {
            var cookname = 'linkcookie_' + CACS.util.Authorize.session.Id;
            var linksStr = Ext.util.Cookies.get(cookname);
            var links = Ext.isEmpty(linksStr) ? {paths: []} : Ext.JSON.decode(linksStr);
            store.setData(links.paths);
        },
        remove: function (store, records, index, isMove, eOpts) {
            if (records.length < 0)
                return;
            var cookname = 'linkcookie_' + CACS.util.Authorize.session.Id;
            var record = records[0];
            var href = record.get('href');
            var linksStr = Ext.util.Cookies.get(cookname);
            var links = Ext.isEmpty(linksStr) ? {paths: []} : Ext.JSON.decode(linksStr);
            var oldlink = Ext.Array.findBy(links.paths, function (item) {
                return item.href === href;
            });
            if (oldlink)
                Ext.Array.remove(links.paths, oldlink);
            Ext.util.Cookies.set(cookname, Ext.JSON.encode(links), new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 30)));
        },
        add: function (store, records, index, eOpts) {
            if (records.length < 0)
                return;
            var cookname = 'linkcookie_' + CACS.util.Authorize.session.Id;
            var record = records[0];
            var href = record.get('href');
            var linksStr = Ext.util.Cookies.get(cookname);
            var links = Ext.isEmpty(linksStr) ? {paths: []} : Ext.JSON.decode(linksStr);
            var oldlink = Ext.Array.findBy(links.paths, function (item) {
                return item.href === href;
            });
            if (oldlink)
                Ext.Array.remove(links.paths, oldlink);
            links.paths = Ext.Array.insert(links.paths, 0, [{
                href: href,
                text: record.get('text'),
                iconCls: record.get('iconCls')
            }]);
            Ext.util.Cookies.set(cookname, Ext.JSON.encode(links), new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * 30)));
        }
    }
});