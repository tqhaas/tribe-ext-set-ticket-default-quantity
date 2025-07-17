jQuery(document).ready(function($) {
    var ticketSet = false;

    // Ticket Views V2
    $('.tribe-tickets__tickets-item').each(function() {
        var $ticket = $(this);
        var $qtyInput = $ticket.find('input[type="number"]');
        var $availableSpan = $ticket.find('.tribe-tickets__tickets-item-extra-available-quantity');
        var available = parseInt($availableSpan.text().trim(), 10);

        if (
            !ticketSet &&
            $qtyInput.length &&
            !$qtyInput.prop('disabled') &&
            available > 0 &&
            (parseInt($qtyInput.val(), 10) === 0 || $qtyInput.val() === "")
        ) {
            $qtyInput.val(1).trigger('change');
            ticketSet = true;
            return false;
        }
    });

    // Classic Tickets (WooCommerce, EDD)
    if (!ticketSet) {
        $('input.tribe-tickets-quantity, .woocommerce .quantity input.qty, .edd.quantity input.edd-input').each(function() {
            var $input = $(this);
            if (
                !$input.prop('disabled') &&
                (parseInt($input.val(), 10) === 0 || $input.val() === "")
            ) {
                $input.val(1).trigger('change');
                ticketSet = true;
                return false;
            }
        });
    }

    // RSVP Tickets
    if (!ticketSet) {
        $('.tribe-rsvp input[type="number"]').each(function() {
            var $input = $(this);
            if (
                !$input.prop('disabled') &&
                (parseInt($input.val(), 10) === 0 || $input.val() === "")
            ) {
                $input.val(1).trigger('change');
                return false;
            }
        });
    }
});
