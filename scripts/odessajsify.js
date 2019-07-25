const imgURL = browser.extension.getURL("icon/odessajs-logo.svg");
const matchedDomElements = $(":contains('Karthickeyan N')").filter(function() {
  return $(this).children().length === 0;
});

if (matchedDomElements && matchedDomElements.length > 0) {
  $(`
  <div class="new">
  <img src="${imgURL}" height="25px" />
  </div>`).insertBefore(matchedDomElements);

  browser.runtime.sendMessage({ foundMatch: true });
} else {
  browser.runtime.sendMessage({ foundMatch: false });
}
