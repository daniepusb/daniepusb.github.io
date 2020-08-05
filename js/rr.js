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
                                "<h5 class='text-center mb-0 card-title'>"+ data.data[i].name +"</h5>"+
                                "<div id='collapse"+i+"' class='accordion-body collapse mt-2 "+flag_see_more+"'>"+
                                    "<div class='accordion-inner'>"+
                                    "<p class='card-text text-monospace'>'" + data.data[i].description +"'</p>"+
                                    "</div>"+
                                "</div>"+
                                "<a class='"+flag_see_more+"font-weight-lighter btn btn-link float-left pl-0'"+
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


/* Esta funcion sirve para identificar 
*/ 
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