var clickBtn = function (t) {
  document.querySelector(".type").innerHTML = t;
  document.querySelector(".showhref").innerHTML = window.top.location.href;
  if (window.top.location.href) {
    if (window.top.location.href.indexOf("192.168.232.137") + 1) {
      document.querySelector(".isHasHref").innerHTML = "域名一致";
    } else {
      document.querySelector(".isHasHref").innerHTML = "域名不一致";
    }
  }
  setTimeout(function() {
    window.top.location.href = `http://192.168.232.137/${t}/index.html`;
  }, 6000);
}