/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.mvc.result.TabResult', {
    extend: 'CACS.mvc.result.ViewResult',

    requires: [
        'Ext.util.History'
    ],

    /**
     *
     * @param {Ext.app.Controller} controller
     * @returns {Ext.Component}
     */
    execute: function (controller) {
        var viewInstance = this.callParent([controller]);
        var frameId = Ext.isEmpty(this.frameId) ? viewInstance.frameId : this.frameId;
        var maincenter = CACS.app.getController('Home').getMainCenter();
        if (maincenter) {
            var added = maincenter.items.findBy(function (item, key) {
                return item.frameId === frameId;
            });
            if (!added) {
                maincenter.add(viewInstance);
            }
            maincenter.setActiveItem(viewInstance);
        } else {
            Ext.util.History.add('');
        }
        return viewInstance;
    }
});