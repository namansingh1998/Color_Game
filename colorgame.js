var h1=document.querySelector("h1");
var a=document.getElementsByClassName("block");
var easy=document.getElementById("e");
var ta=document.getElementById("ta");
var hard=document.getElementById("h");
var newcolors=document.getElementById("newcolor");
var head=document.getElementsByClassName("head");
var hi=document.getElementsByClassName("hi");
var color=[];
function gotta(){
	if(this.style.backgroundColor==h1.textContent)
	{
		for(var i=0;i<color.length;i++)
		{
			a[i].style.backgroundColor=h1.textContent;
			a[i].classList.remove("hide");
			a[i].classList.add("show");
		}
		ta.textContent="you got it";
		ta.style.visibility="visible";
		head[0].style.backgroundColor=h1.textContent;
		newcolors.textContent="Play Again..";
	}
	else{
		ta.style.visibility="visible";
		this.classList.add("hide");
	}
}
//normal
for(var i=0;i<6;i++)
{
	color.push("rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")");
	a[i].style.backgroundColor=color[i];
}
h1.textContent=color[Math.floor(Math.random()*6)];
for(var i=0;i<6;i++)
{
	a[i].addEventListener("click",gotta);
}
//easy
function ee(){
	newcolors.textContent="New Colors";
	ta.textContent="Try Again";
	ta.style.visibility="hidden";
	a[3].style.visibility="hidden";
	a[4].style.visibility="hidden";
	a[5].style.visibility="hidden";
	color=[];
for(var i=0;i<3;i++)
{
	color.push("rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")");
	a[i].style.backgroundColor=color[i];
}
h1.textContent=color[Math.floor(Math.random()*3)];
}
easy.addEventListener("click",ee);
//hard
function hh(){
	newcolors.textContent="New Colors";
	ta.textContent="Try Again";
	ta.style.visibility="hidden";
	a[3].style.visibility="visible";
	a[4].style.visibility="visible";
	a[5].style.visibility="visible";
	color=[];
for(var i=0;i<6;i++)
{
	color.push("rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")");
	a[i].style.backgroundColor=color[i];
}
h1.textContent=color[Math.floor(Math.random()*6)];
}
hard.addEventListener("click",hh);
//newcolors
function ne(){
	newcolors.textContent="New Colors";
	ta.textContent="Try Again";
	ta.style.visibility="hidden";
	if(color.length==3)
	{
		color=[];
		for(var i=0;i<3;i++)
		{
			color.push("rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")");
			a[i].style.backgroundColor=color[i];
		}
		h1.textContent=color[Math.floor(Math.random()*3)];
	}
	else{
		color=[];
		for(var i=0;i<6;i++)
		{
			color.push("rgb("+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+", "+Math.floor(Math.random()*255)+")");
			a[i].style.backgroundColor=color[i];
		}
		h1.textContent=color[Math.floor(Math.random()*6)];
	}
}
newcolors.addEventListener("click",ne);
//hover
function ho(){
	this.style.color="white";
	this.style.backgroundColor=head[0].style.backgroundColor;
}
for(var i=0;i<hi.length;i++)
{hi[i].addEventListener("mouseover",ho);
hi[i].addEventListener("mouseout",hoo);}
function hoo(){
	this.style.color="blue";
	this.style.backgroundColor="white";
}