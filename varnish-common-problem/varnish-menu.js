(function (varnishMenuParams) {
  if (varnishMenuParams.currentLocationId) {
    var menuItem = document.getElementById(varnishMenuParams.currentLocationId);
    menuItem.className = 'active';
  }
})(varnishMenuParams || {});
