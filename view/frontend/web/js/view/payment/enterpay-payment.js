/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: 'enterpay',
                component: 'Solteq_Enterpay/js/view/payment/method-renderer/enterpay-method'
            }
        );
        return Component.extend({});
    }
);
