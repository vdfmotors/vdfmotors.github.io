function(run){
for (i=0;i<frames.length; i++) {
var f1 = document.getElementsByTagName('iframe')[i];
if(!f1 && window.addEventListener && !run){
document.addEventListener('DOMContentLoaded', arguments.callee, false);
return;
}
if(!f1){setTimeout(arguments.callee, 300); return;}
f2 = f1.cloneNode(false);
f1.src = 'about: blank';
f2.frameBorder = '0';
f2.allowTransparency = 'yes';
f2.scrolling = 'no';
f1.parentNode.replaceChild(f2, f1);
}
})();