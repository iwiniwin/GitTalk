var gitalk = new Gitalk({
  "clientID": "267fb8efbb1d0244e095",
  "clientSecret": "769dd0cc63a535b08920f1ef342ac51a58c24d83",
  "repo": "cooee.github.io",
  "owner": "cooee",
  "admin": ["cooee"],
  "id": location.pathname,      
  "distractionFreeMode": false  
});
gitalk.render("gitalk-container");
