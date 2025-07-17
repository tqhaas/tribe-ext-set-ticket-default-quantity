;(function ($) {
    var container = $('.tribe-events-tickets');
    var block_container = $('form#tribe-tickets');
    var v2Container = $('.tribe-tickets__tickets-form');

    var Tribe_Ticket_Qty = {
        init: function () {
            var $inputs = $();

            if (container.length) {
                $inputs = $inputs.add(container.find('input.tribe-tickets-quantity, .woocommerce .quantity input.qty, .edd.quantity input.edd-input'));
            }

            if (block_container.length) {
                $inputs = $inputs.add(block_container.find('input.tribe-tickets-quantity'));
            }

            if ($inputs.length === 1) {
                $inputs.val(1).trigger('change');
            }

            // Trigger click only if exactly one Ticket V2 container is found
            if (v2Container.length === 1) {
                $('.tribe-tickets__tickets-item-quantity-add').trigger('click');
            }
        },
    };

    $(function () {
        Tribe_Ticket_Qty.init();
    });
})(jQuery);
