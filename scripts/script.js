/* eslint-env jquery */

$( "#url-form" ).submit(function( event ) {
  event.preventDefault();

  var urlInput = document.getElementById('url');
  var shortUrl = document.getElementById('short-url');
  var longUrl = document.getElementById('long-url');
  var shortLinkPop = document.getElementById('url-list');  

  shortLinkPop.style.display = 'flex';
  longUrl.innerHTML = urlInput.value;
  longUrl.href = urlInput.value;

  var posting = $.post("scripts/get_data.php",
  {
    hash : urlInput.value
  });
  
  posting.done(function( data ) {
    shortUrl.innerHTML = data;
    shortUrl.href = data;
    urlInput.value = "";
  });
});

function copyUrl() { // eslint-disable-line no-unused-vars

  // Create an auxiliary hidden input
  var aux = document.createElement("input");

  // Get the text from the element passed into the input
  aux.setAttribute("value", document.getElementById('short-url').innerHTML);

  // Append the aux input to the body
  document.body.appendChild(aux);

  // Highlight the content
  aux.select();

  // Execute the copy command
  document.execCommand("copy");

  // Remove the input from the body
  document.body.removeChild(aux);

  document.getElementById('copy-button').classList.add('btn--active');
  document.getElementById('copy-button').innerHTML = 'Copied!';

}