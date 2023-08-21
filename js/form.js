const MAX_VAL = 2147483647;
const MAX_VAL_LEN = ('' + MAX_VAL).length;

function unhide()
{
  var form = document.getElementById('form');
  form.removeAttribute("hidden");
}


function submit(event)
{
  var form = document.getElementById("form");
  var input = form.getElementsByTagName("input");
  var data = {};
  
  for(var i=0; i<input.length; i++)
  {
    if(!(input[i].id === ""))
    {
      data[input[i].name] = input.value;
    }
  }

  document.cookie = "FNAME='"+data["FNAME"]+"'; path=/; max-age=8; samesite=strict";
  document.cookie = "LNAME='"+data["LNAME"]+"'; path=/; max-age=8; samesite=strict";
  document.cookie = "PHONE='"+data["PHONE"]+"'; path=/; max-age=8; samesite=strict";
  document.cookie = "EMAIL='"+data["EMAIL"]+"'; path=/; max-age=8; samesite=strict";
  document.cookie = "PNAME='"+data["PNAME"]+"'; path=/; max-age=8; samesite=strict";
  document.cookie = "TOTAL='"+data["TOTAL"]+"'; path=/; max-age=8; samesite=strict";
  document.cookie = "SUUID='"+data["SUUID"]+"'; path=/; max-age=8; samesite=strict";
  document.cookie = "ETIME='"+data["ETIME"]+"'; path=/; max-age=8; samesite=strict";

  event.preventDefault();
}

function init()
{
  var form = document.getElementById("form");
  
  form.addEventListener("submit", submit)
  
  var i_suuid = document.getElementById("suuid");
  var i_etime = document.getElementById("etime");

  var epoch = new Date().getTime();
  var rando = Math.ceil(Math.random() * MAX_VAL);

  epoch = ('' + epoch);
  rando = ('' + rando);

  lEpoch = epoch.length;
  lRando = rando.length;

  for(var i=0; i<(MAX_VAL_LEN - lEpoch); i++)
  {
    epoch = '0' + epoch;
  }

  for(var i=0; i<(MAX_VAL_LEN - lRando); i++)
  {
    rando = '0' + rando;
  }

  var suuid = epoch + rando;
  
  i_suuid.value = suuid;
  i_etime.value = epoch;
}

unhide();
init();
