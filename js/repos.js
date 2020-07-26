$(()=> {

    const el = document.querySelector('#btnRepos');

    el.addEventListener("click", function() {



        $('.side.right-side.hide').removeClass('hide')

        const url = 'https://api.github.com/users/daniepusb/repos';
        
        axios.get(url)
        .then(function (data) {

            var flag_see_more = '';
            for(var i in data.data ) {



                if (empty(data.data[i].description)) { 
                    data.data[i].description = '';
                    flag_see_more = 'hide';
                }else {
                    flag_see_more = '';
                }
                $("#repos__content").append(
                    "<div class='col-xs-12 col-sm-4 col-md-4 col-lg-3'>"+
                        "<div class='card mb-4 shadow-sm'>"+
                            "<div class='card-body'>"+ 
                                "<h5 class='text-left mb-0 card-title'>"+ data.data[i].name +"</h5>"+
                                "<div id='collapse"+i+"' class='accordion-body collapse mt-2 "+flag_see_more+"'>"+
                                    "<div class='accordion-inner'>"+
                                    "<p class='card-text text-monospace'>'" + data.data[i].description +"'</p>"+
                                    "</div>"+
                                "</div>"+
                                "<a class='"+flag_see_more+" font-weight-lighter btn btn-link float-left pl-0'"+
                                "type='button' data-toggle='collapse' data-target='#collapse"+i+"' aria-expanded='true' aria-controls='collapseOne'>"+
                                "<small class='text-info'>ver descripción</small>"+
                                "</a> "+
                                "<a href='" + data.data[i].html_url + "' target='_blank'>" +
                                    "<button type='button' class='btn btn-sm btn-outline-secondary'>Ver en GitHub</button>"+
                                "</a>"+
                            "</div>"+
                        "</div>"+
                    "</div>"
                );
            }

        })
        .catch(function (error) {
            console.log(error);
        });
    });

})


/* Esta funcion sirve para identificar si el valor es vacio */ 
function empty(data) {
      if(typeof(data) == 'number' || typeof(data) == 'boolean')
      { 
        return false; 
      }
      if(typeof(data) == 'undefined' || data === null)
      {
        return true; 
      }
      if(typeof(data.length) != 'undefined')
      {
        return data.length == 0;
      }
      var count = 0;
      for(var i in data)
      {
        if(data.hasOwnProperty(i))
        {
          count ++;
        }
      }
      return count == 0;
}


/*
An example of what we will recive 

{
    "id": 280626498,
    "node_id": "MDEwOlJlcG9zaXRvcnkyODA2MjY0OTg=",
    "name": "daniepusb.github.io",
    "full_name": "daniepusb/daniepusb.github.io",
    "private": false,
    "owner": {
      "login": "daniepusb",
      "id": 591252,
      "node_id": "MDQ6VXNlcjU5MTI1Mg==",
      "avatar_url": "https://avatars0.githubusercontent.com/u/591252?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/daniepusb",
      "html_url": "https://github.com/daniepusb",
      "followers_url": "https://api.github.com/users/daniepusb/followers",
      "following_url": "https://api.github.com/users/daniepusb/following{/other_user}",
      "gists_url": "https://api.github.com/users/daniepusb/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/daniepusb/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/daniepusb/subscriptions",
      "organizations_url": "https://api.github.com/users/daniepusb/orgs",
      "repos_url": "https://api.github.com/users/daniepusb/repos",
      "events_url": "https://api.github.com/users/daniepusb/events{/privacy}",
      "received_events_url": "https://api.github.com/users/daniepusb/received_events",
      "type": "User",
      "site_admin": false
    },
    "html_url": "https://github.com/daniepusb/daniepusb.github.io",
    "description": "CV Portafolio",
    "fork": false,
    "url": "https://api.github.com/repos/daniepusb/daniepusb.github.io",
    "forks_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/forks",
    "keys_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/teams",
    "hooks_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/hooks",
    "issue_events_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/issues/events{/number}",
    "events_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/events",
    "assignees_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/assignees{/user}",
    "branches_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/branches{/branch}",
    "tags_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/tags",
    "blobs_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/languages",
    "stargazers_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/stargazers",
    "contributors_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/contributors",
    "subscribers_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/subscribers",
    "subscription_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/subscription",
    "commits_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/contents/{+path}",
    "compare_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/merges",
    "archive_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/downloads",
    "issues_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/issues{/number}",
    "pulls_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/labels{/name}",
    "releases_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/releases{/id}",
    "deployments_url": "https://api.github.com/repos/daniepusb/daniepusb.github.io/deployments",
    "created_at": "2020-07-18T09:44:23Z",
    "updated_at": "2020-07-18T09:57:29Z",
    "pushed_at": "2020-07-18T09:56:50Z",
    "git_url": "git://github.com/daniepusb/daniepusb.github.io.git",
    "ssh_url": "git@github.com:daniepusb/daniepusb.github.io.git",
    "clone_url": "https://github.com/daniepusb/daniepusb.github.io.git",
    "svn_url": "https://github.com/daniepusb/daniepusb.github.io",
    "homepage": "https://daniepusb.github.io/",
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": "HTML",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master"
  },

  */