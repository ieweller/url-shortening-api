document.getElementById("url-submit").addEventListener("click", function(event){
  event.preventDefault();
  submitForm();
});

document.getElementById("url").addEventListener("keyup", function(event){
  if (event.keyCode === 13) {
    event.preventDefault();
    submitForm();
  }
});[]

function submitForm() {
  var urlInput = document.getElementById('url');
  var shortUrl = document.getElementById('short-url');
  var longUrl = document.getElementById('long-url');

  $.post("https://rel.ink/api/links/",
  {
    url : urlInput.value
  },
  function(data) {
    document.getElementById('url-list').style.display = 'flex';
    shortUrl.innerHTML = 'https://rel.ink/' + data.hashid;
    shortUrl.href = 'https://rel.ink/' + data.hashid;
    longUrl.innerHTML = data.url;
    urlInput.value = "";
  });
}

function copyUrl() {

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