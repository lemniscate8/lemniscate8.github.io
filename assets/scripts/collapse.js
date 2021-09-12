$(function() {
  $(".collapse-trigger[data-toggle-control]").each(function() {
    makeCollapsable(this);
  });
});

function makeCollapsable(element) {
  element.addEventListener("click", function() {
    const groupName = element.dataset.toggleControl;
    const targets = $(`[data-toggle-group=${groupName}]`);
    targets.each(function() {
      $(this).slideToggle('slow');
    });
  });
}
