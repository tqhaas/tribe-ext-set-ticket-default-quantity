;(function ($) {
    var container = $('.tribe-events-tickets');
    var block_container = $('form#tribe-tickets');
    var v2Container = $('.tribe-tickets__tickets-form');

    var Tribe_Ticket_Qty = {
        init: function () {
            var $inputs = $(); // Start with empty jQuery object

            if (container.length) {
                $inputs = $inputs.add(container.find('input.tribe-tickets-quantity, .woocommerce .quantity input.qty, .edd.quantity input.edd-input'));
            }

            if (block_container.length) {
                $inputs = $inputs.add(block_container.find('input.tribe-tickets-quantity'));
            }

            // Only set value if exactly one input is found across all containers
            if ($inputs.length === 1) {
                $inputs.val(1).trigger('change');
            }

            if (v2Container.length) {
                $('.tribe-tickets__tickets-item-quantity-add').trigger('click');
            }
        },
    };

    $(function () {
        Tribe_Ticket_Qty.init();
    });
})(jQuery);
