var clickBtn = function (t) {
  window.top.location.href = window.top.location.href.split("index.html")[0] + `${t}/index.html`
}

var goback = function (t) {
  window.top.location.href = window.top.location.href.split(t+"/").join("")
};