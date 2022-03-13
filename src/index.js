import './scss/app.scss';

var $ = require("jquery");
window.$ = $;
window.jQuery = $;
import "jquery";
import "popper.js";
import 'bootstrap';

$(function () {
  $('[data-toggle="popover"]').popover();
})
