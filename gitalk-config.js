var gitalk = new Gitalk({
  "clientID": "Iv1.bf9c066c74b8d356",
  "clientSecret": "392862763d5b541b74726459d0522061535a0ac1",
  "repo": "iwiniwin.github.io/GitTalk",
  "owner": "iwiniwin",
  "admin": ["iwiniwin"],
  "id": location.pathname,      
  "distractionFreeMode": false  
});
gitalk.render("gitalk-container");
