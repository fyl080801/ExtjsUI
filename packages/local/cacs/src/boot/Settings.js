/**
 * Created by fyl08 on 2016/1/25.
 */
Ext.define('CACS.boot.Settings', {
    extend: 'CACS.util.pipeline.AjaxNode',

    url: '/ExtjsUI/UI/Settings',

    method: 'GET',

    handler: function (data) {
        var store = CACS.app.getStore('Views');
        Ext.Array.each(data.ViewSettings, function (item) {
            var existIndex = store.find('FrameId', item.FrameId);
            //if (existIndex >= 0) {
            //    store.removeAt(existIndex);
            //}
            if (existIndex < 0) {
                var viewResult = Ext.create(item.ViewType, {
                    view: item.Component,
                    frameId: item.FrameId,
                    action: item.Action
                });
                viewResult.execute();
            }
        });
        return true;
    }
});