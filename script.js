function buttonclick(val)
{
  console.log
  document.getElementById("screen").value=document.getElementById("screen").value+val; 
}

function cleardisplay()
{
    document.getElementById("screen").value=""
}

function equalClick()
{
   var text=document.getElementById("screen").value
   var result =eval(text)
   document.getElementById("screen").value=result
}