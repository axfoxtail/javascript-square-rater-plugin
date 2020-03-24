document.addEventListener('DOMContentLoaded', function(){
    var raters = document.getElementsByClassName('square-rater');
    if (raters) {
        for (var i = 0; i < raters.length; i++) {
            renderSquareRater(raters[i]);
        }
    }
});

function renderSquareRater(rater) {
    var _max = rater.getAttribute('data-max') ? rater.getAttribute('data-max') : 5;
    var _value = rater.getAttribute('data-value') ? rater.getAttribute('data-value') : 0;
    var _direction = rater.getAttribute('data-direction') ? rater.getAttribute('data-direction') : "ltr";
    
    if (_direction == "rtl") {
        for (var i = 0; i < _max; i++) {
            var rate_node = document.createElement('div');
            if (i < _value) {
                rate_node.className='rate-node rated';
            } else {
                rate_node.className='rate-node';
            }
            rater.appendChild(rate_node);
        }
    } else {
        for (var i = _max - 1; i >= 0; i--) {
            var rate_node = document.createElement('div');
            if (i < _value) {
                rate_node.className='rate-node rated';
            } else {
                rate_node.className='rate-node';
            }
            rater.appendChild(rate_node);
        }
    }

    
}