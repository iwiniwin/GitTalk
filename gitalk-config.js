var gitalk = new Gitalk({
  "clientID": "0d890289e8f2218d34d2",
  "clientSecret": "e52587e99df3f189e1daf5dfd1417a131af41792",
  "repo": "iwiniwin.github.io/GitTalk",
  "owner": "iwiniwin",
  "admin": ["iwiniwin"],
  "id": location.pathname,      
  "distractionFreeMode": false  
});
gitalk.render("gitalk-container");
