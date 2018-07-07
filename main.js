function getfile(file,callback)
{
var xhr=new XMLHttpRequest();
xhr.overrideMimeType("application/json");
xhr.open("GET",file,true);
xhr.onreadystatechange=function(){
  if(xhr.readyState === 4 && xhr.status == "200")
  {
    callback(xhr.responseText);
  }
};
xhr.send(null);
}

getfile("it.json",function(text){
  // console.log("hanuman");
  var it=JSON.parse(text);
  console.log(it);
 career(it.career);
 education(it.education);
 skills(it.skills);
})

var child2=document.querySelector(".childTwo");

function career(careerinfo){
var careerHeading=document.createElement("h3");
child2.appendChild(careerHeading);
careerHeading.textContent="careerObjective:";
var career=document.createElement("hr");
child2.appendChild(career);
var ch=document.createElement("p");
ch.textContent=careerinfo.info;
child2.appendChild(ch);
}


function education(edu){
 var eduHeading=document.createElement("h3");
 eduHeading.textContent="educationQualifications:";
 child2.appendChild(eduHeading);
 var careerHr=document.createElement("hr");
 child2.appendChild(careerHr);
 var eduTable=document.createElement("table")
 eduTable.border="1";
 var tr1="<tr><td>degree</td><td>institute</td><td>data</td></tr>"
 // eduTable.innerHTML=tr1;
   var tr2="";

   for(var i=0;i<edu.length;i++)
   {
     tr2+="</td><td>"+edu[i].degree+"</td><td>"+edu[i].institution+"</td><td>"+edu[i].data+"</td></tr>"
   }
     eduTable.innerHTML=tr1+tr2;
     child2.appendChild(eduTable);
}

// skills

function skills(skil){
  var careerHeading=document.createElement("h3");
  child2.appendChild(careerHeading);
  careerHeading.textContent="Skill set";
  var career=document.createElement("hr");
  child2.appendChild(career);
  var ul =document.createElement("ul");
  child2.appendChild(ul);
  for(var i=0; i<skil.length; i++){
    var li=document.createElement("li");
    li.textContent=skil[i].title+":"+skil[i].content;
    ul.appendChild(li);
  }
}
