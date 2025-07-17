jQuery(document).ready(function($) {
    var $ticketRows = $('.tribe-tickets__item');
    if ($ticketRows.length === 1) {
        var $qtyInput = $ticketRows.find('input[type="number"]');
        if ($qtyInput.length && $qtyInput.val() === "0") {
            $qtyInput.val(1).change();
        }
    }
});
