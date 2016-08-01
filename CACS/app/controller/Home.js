/**
 * Created by fyl08 on 2015/12/19.
 */
Ext.define('CACS.controller.Home', {
    extend: 'Ext.app.Controller',

    views: [
        'home.Index',
        'home.Start',
        'home.Main',
        'home.Bottom',
        'home.Top'
    ],

    config: {
        refs: [
            {
                ref: 'mainCenter',
                selector: '#maincenter'
            },
            {
                ref: 'mainIndex',
                selector: '#homeindex'
            },
            {
                ref: 'mainTaskbar',
                selector: '#maintaskbar'
            }
        ]
    },


    /**
     * Called when the view is created
     */
    init: function () {

    }
});