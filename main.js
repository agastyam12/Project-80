var namesOfPeople = [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	namesOfPeople.push(GuestName);
	console.log(GuestName);    
    console.log(namesOfPeople);
    var lenght_of_name = namesOfPeople.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=namesOfPeople.toString();
   }



function show()
{
	var i= namesOfPeople.join("<br>");
	console.log(namesOfPeople);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("show").style.display="block";
	}


function sorting()
	{
		namesOfPeople.sort();
		var i= namesOfPeople.join("<br>");
		console.log(namesOfPeople);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<namesOfPeople.length; j++)
		{
			if(s==namesOfPeople[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
