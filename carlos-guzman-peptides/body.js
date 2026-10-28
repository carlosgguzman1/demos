/* Lámina anatómica interactiva (vista anterior) — Carlos Guzmán Peptides
   Requiere window.FM = {areas, counts, pick(k), getArea()} */
(function(){
'use strict';
var stage=document.getElementById('stage');
if(!stage||!window.FM)return;
var NS='http://www.w3.org/2000/svg',CX=380;

/* ---------- silueta: mitad derecha (dx desde el eje), de arriba hacia abajo ---------- */
var R=[[0,24],[28,30],[46,48],[54,76],[52,104],[47,124],[39,142],[27,156],[15,165],
[17,172],[19,190],[40,203],[72,212],[98,222],[114,236],[122,256],
[125,282],[128,316],[131,350],[134,380],[140,412],[147,446],[154,478],[158,496],
[166,510],[173,530],[176,556],[172,578],[163,594],[152,598],[145,588],[143,566],[140,546],[139,524],[141,506],
[137,486],[130,452],[122,420],[116,392],[112,362],[108,330],[103,298],[96,272],
[94,300],[90,334],[84,366],[82,392],[88,420],[98,450],[104,480],[106,506],
[104,540],[100,580],[96,622],[91,662],[90,690],[91,720],[86,760],[78,800],[70,836],
[70,852],[80,866],[92,879],[88,890],[60,893],[44,889],[40,873],[42,852],
[40,820],[40,780],[36,740],[32,704],[30,672],[28,640],[24,600],[18,562],[10,532],[0,524]];
function contour(){var right=R.map(function(p){return [CX+p[0],p[1]]});
  var left=R.slice(1,-1).reverse().map(function(p){return [CX-p[0],p[1]]});return right.concat(left)}
function smooth(pts,closed){var n=pts.length,d='M'+pts[0][0]+','+pts[0][1];
  for(var i=0;i<(closed?n:n-1);i++){var p0=pts[(i-1+n)%n],p1=pts[i],p2=pts[(i+1)%n],p3=pts[(i+2)%n],t=0.5;
    var c1=[p1[0]+(p2[0]-p0[0])*t/3,p1[1]+(p2[1]-p0[1])*t/3],c2=[p2[0]-(p3[0]-p1[0])*t/3,p2[1]-(p3[1]-p1[1])*t/3];
    d+='C'+c1[0].toFixed(1)+','+c1[1].toFixed(1)+' '+c2[0].toFixed(1)+','+c2[1].toFixed(1)+' '+p2[0]+','+p2[1]}
  return d+(closed?'Z':'')}
function mx(d){return d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g,function(_,x,y){return (2*CX-parseFloat(x)).toFixed(1)+','+y})}

/* ---------- órganos (coordenadas absolutas, vista anterior) ---------- */
var C={cerebro:'#e9a9b4',hormonas:'#7fb8da',corazon:'#c9505a',pulmon:'#efc3c0',higado:'#a8684f',estomago:'#e8a865',intestino:'#ebbd8c',bazo:'#9d84d8',inmune:'#9d84d8',sexual:'#de94bb',hueso:'#e3dac6'};
var lungL='M368,236 C346,228 322,246 314,282 C306,318 309,350 318,363 C334,370 356,362 370,350 C374,320 374,268 368,236Z';
var lungR='M392,236 C414,228 438,246 446,282 C454,318 451,350 442,363 C428,370 410,362 400,354 C406,336 400,320 393,308 C391,282 390,258 392,236Z';
var gyri='M352,62 C360,54 372,58 378,52 M384,50 C394,56 404,52 410,62 M346,80 C356,74 366,82 376,76 M386,76 C396,82 406,74 414,82 M352,96 C362,90 372,98 380,94 M384,94 C394,100 402,92 410,98 M380,46 L380,104';
var ribs=(function(){var s='';for(var i=0;i<6;i++){var y=246+i*20,w=58+i*6;s+='M378,'+(y)+' C'+(378-w*0.4)+','+(y-6)+' '+(378-w)+','+(y+4)+' '+(378-w-6)+','+(y+22)+' ';}return s})();
var smallInt='M356,424 C368,416 380,430 392,422 C402,416 410,428 404,436 C396,444 382,434 370,442 C358,450 350,440 356,452 C362,462 378,452 390,458 C402,464 410,454 404,466 C396,476 380,466 368,472';
var ORG={
 cerebro:[['path',{d:'M380,44 C352,42 336,58 336,78 C336,96 350,108 366,108 L394,108 C410,108 424,96 424,78 C424,58 408,42 380,44Z',fill:C.cerebro}],['path',{d:gyri,fill:'none',stroke:'#c98793','stroke-width':2,'stroke-linecap':'round',opacity:.7}]],
 hormonas:[['path',{d:'M372,184 C362,182 358,194 362,202 C366,208 374,206 377,198 L383,198 C386,206 394,208 398,202 C402,194 398,182 388,184 C384,186 382,190 380,192 C378,190 376,186 372,184Z',fill:C.hormonas}],
   ['path',{d:'M384,398 C398,392 420,394 432,400 C424,408 404,410 386,406Z',fill:C.hormonas,opacity:.9}]],
 corazon:[['path',{d:lungL,fill:C.pulmon,opacity:.85}],['path',{d:lungR,fill:C.pulmon,opacity:.85}],
   ['path',{d:'M376,290 C382,278 404,280 410,292 C418,308 412,330 394,346 C380,338 368,322 370,306 C370,298 372,294 376,290Z',fill:C.corazon}],
   ['path',{d:'M384,286 C384,268 392,258 402,258 C410,258 412,266 408,272',fill:'none',stroke:C.corazon,'stroke-width':6,'stroke-linecap':'round'}]],
 inmune:[['path',{d:'M372,244 C366,252 368,268 376,272 C380,266 380,256 384,272 C392,268 394,252 388,244 C384,240 376,240 372,244Z',fill:C.inmune}],
   ['ellipse',{cx:450,cy:378,rx:8,ry:16,transform:'rotate(18 450 378)',fill:C.bazo}],
   ['circle',{cx:286,cy:282,r:5,fill:C.inmune}],['circle',{cx:474,cy:282,r:5,fill:C.inmune}],['circle',{cx:364,cy:178,r:4,fill:C.inmune}],['circle',{cx:396,cy:178,r:4,fill:C.inmune}],['circle',{cx:338,cy:514,r:5,fill:C.inmune}],['circle',{cx:422,cy:514,r:5,fill:C.inmune}]],
 digestivo:[['path',{d:'M318,364 C342,356 386,360 406,368 C398,386 372,400 338,400 C322,398 312,384 318,364Z',fill:C.higado}],
   ['path',{d:'M410,366 C430,360 446,372 442,394 C438,412 420,418 404,412 C394,406 398,394 410,392 C418,388 418,378 410,376Z',fill:C.estomago}],
   ['path',{d:'M340,474 L340,424 C340,414 348,408 358,408 L402,408 C412,408 420,414 420,424 L420,474 C420,484 410,488 398,488',fill:'none',stroke:C.intestino,'stroke-width':13,'stroke-linecap':'round','stroke-linejoin':'round'}],
   ['path',{d:smallInt,fill:'none',stroke:'#e4ab76','stroke-width':6,'stroke-linecap':'round'}]],
 sexual:[['path',{d:'M366,496 C366,486 394,486 394,496 C394,508 386,514 380,514 C374,514 366,508 366,496Z',fill:C.sexual}]],
 huesos:[['path',{d:ribs+mx(ribs),fill:'none',stroke:'#cfc5ad','stroke-width':2.2,opacity:.55}],
   ['path',{d:'M338,454 C328,476 344,500 368,508 L392,508 C416,500 432,476 422,454 C412,466 398,470 380,470 C362,470 348,466 338,454Z',fill:C.hueso,stroke:'#cfc5ad','stroke-width':1.5}],
   ['path',{d:'M316,512 C318,560 320,610 322,650',fill:'none',stroke:C.hueso,'stroke-width':11,'stroke-linecap':'round'}],
   ['path',{d:mx('M316,512 C318,560 320,610 322,650'),fill:'none',stroke:C.hueso,'stroke-width':11,'stroke-linecap':'round'}],
   ['circle',{cx:322,cy:664,r:8,fill:C.hueso,stroke:'#cfc5ad','stroke-width':1.5}],['circle',{cx:438,cy:664,r:8,fill:C.hueso,stroke:'#cfc5ad','stroke-width':1.5}],
   ['path',{d:'M323,680 C324,730 325,780 326,830',fill:'none',stroke:C.hueso,'stroke-width':8,'stroke-linecap':'round'}],
   ['path',{d:mx('M323,680 C324,730 325,780 326,830'),fill:'none',stroke:C.hueso,'stroke-width':8,'stroke-linecap':'round'}]]
};
/* anclas y etiquetas: lado y altura de la etiqueta */
var ANCH={cerebro:[380,72,'L',72],hormonas:[370,194,'L',184],inmune:[286,282,'L',290],digestivo:[340,440,'L',430],huesos:[322,664,'L',664],
          corazon:[396,312,'R',306],piel:[526,462,'R',446],sexual:[392,500,'R',520]};

function el(tag,attrs,parent){var e=document.createElementNS(NS,tag);for(var a in attrs)e.setAttribute(a,attrs[a]);if(parent)parent.appendChild(e);return e}

var svg=el('svg',{viewBox:'0 0 760 920',role:'img','aria-label':'Lámina anatómica, vista anterior. Toca un sistema para filtrar los péptidos.',class:'anat'});
var defs=el('defs',{},svg);
var lg=el('linearGradient',{id:'skinG',x1:'0',x2:'1',y1:'0',y2:'0'},defs);
[['0','#d9e2e6'],['0.3','#eef3f5'],['0.5','#f8fafb'],['0.7','#eef3f5'],['1','#d9e2e6']].forEach(function(s){el('stop',{offset:s[0],'stop-color':s[1]},lg)});
var rg=el('radialGradient',{id:'torsoG',cx:'0.5',cy:'0.36',r:'0.5'},defs);
el('stop',{offset:'0','stop-color':'#ffffff','stop-opacity':'.7'},rg);el('stop',{offset:'1','stop-color':'#ffffff','stop-opacity':'0'},rg);
var f=el('filter',{id:'glow',x:'-30%',y:'-30%',width:'160%',height:'160%'},defs);
el('feDropShadow',{dx:'0',dy:'0',stdDeviation:'6','flood-color':'#0f6b5c','flood-opacity':'.45'},f);
var sh=el('filter',{id:'soft',x:'-10%',y:'-10%',width:'120%',height:'120%'},defs);
el('feDropShadow',{dx:'0',dy:'10',stdDeviation:'14','flood-color':'#13221e','flood-opacity':'.10'},sh);

/* piso */
el('ellipse',{cx:380,cy:896,rx:120,ry:12,fill:'#13221e',opacity:.06},svg);
/* cuerpo */
var bodyD=smooth(contour(),true);
var gBody=el('g',{class:'bodyg','data-k':'piel'},svg);
el('path',{d:bodyD,fill:'url(#skinG)',stroke:'#b9c6cb','stroke-width':1.6,filter:'url(#soft)',class:'skin'},gBody);
el('path',{d:bodyD,fill:'url(#torsoG)',stroke:'none','pointer-events':'none'},gBody);
/* trazos anatómicos sutiles */
var lines='M334,216 C352,224 366,222 376,218 '+mx('M334,216 C352,224 366,222 376,218')+
 ' M338,300 C352,318 368,316 377,304 '+mx('M338,300 C352,318 368,316 377,304')+
 ' M380,226 L380,300 M380,372 L380,428 M370,170 C372,178 372,186 370,192 '+mx('M370,170 C372,178 372,186 370,192')+
 ' M312,656 C318,662 326,662 332,656 '+mx('M312,656 C318,662 326,662 332,656')+
 ' M352,516 C362,528 372,532 380,532 '+mx('M352,516 C362,528 372,532 380,532');
el('path',{d:lines,fill:'none',stroke:'#aebcc2','stroke-width':1.2,'stroke-linecap':'round',opacity:.55,'pointer-events':'none'},gBody);
el('ellipse',{cx:380,cy:440,rx:2.5,ry:3.5,fill:'#aebcc2','pointer-events':'none'},gBody);

/* órganos */
var groups={};
['huesos','corazon','digestivo','hormonas','inmune','sexual','cerebro'].forEach(function(k){
  var g=el('g',{class:'org','data-k':k,tabindex:'-1'},svg);
  ORG[k].forEach(function(s){el(s[0],s[1],g)});groups[k]=g});
groups.piel=gBody;

/* etiquetas con línea guía */
var callouts={};
Object.keys(ANCH).forEach(function(k){
  var a=ANCH[k],side=a[2],ly=a[3],g=el('g',{class:'cl','data-k':k,role:'button',tabindex:'0','aria-label':FM.areas[k].n},svg);
  var lx=side==='L'?232:528;
  var path=side==='L'?'M'+lx+','+ly+' L'+(a[0]-24)+','+ly+' L'+a[0]+','+a[1]:'M'+lx+','+ly+' L'+(a[0]+24)+','+ly+' L'+a[0]+','+a[1];
  el('path',{d:path,class:'lead'},g);
  el('circle',{cx:a[0],cy:a[1],r:5.5,class:'adot'},g);
  var pill=el('g',{class:'pill'},g);
  var rect=el('rect',{x:0,y:ly-20,height:40,rx:20,class:'prect'},pill);
  var t=el('text',{x:0,y:ly+6,class:'ptext'},pill);t.textContent=FM.areas[k].n;
  var c=el('text',{x:0,y:ly+6,class:'pcount'},pill);c.textContent=String(FM.counts[k]||0);
  callouts[k]={g:g,rect:rect,t:t,c:c,side:side,lx:lx};
  g.addEventListener('click',function(){FM.pick(k)});
  g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();FM.pick(k)}});
  g.addEventListener('mouseenter',function(){hov(k,true)});g.addEventListener('mouseleave',function(){hov(k,false)});
});
Object.keys(groups).forEach(function(k){var g=groups[k];
  g.addEventListener('click',function(){FM.pick(k)});
  g.addEventListener('mouseenter',function(){hov(k,true)});g.addEventListener('mouseleave',function(){hov(k,false)})});

document.getElementById('stageCanvas').appendChild(svg);
function layoutPills(){Object.keys(callouts).forEach(function(k){var o=callouts[k];
  var tw=o.t.getComputedTextLength?o.t.getComputedTextLength():o.t.textContent.length*7.5,cw=o.c.getComputedTextLength?o.c.getComputedTextLength():14;
  var w=tw+cw+44,x0=o.side==='L'?o.lx-w:o.lx;
  o.rect.setAttribute('x',x0);o.rect.setAttribute('width',w);
  o.t.setAttribute('x',x0+18);o.c.setAttribute('x',x0+18+tw+8)})}
layoutPills();
if(document.fonts&&document.fonts.ready)document.fonts.ready.then(layoutPills);

function hov(k,on){stage.classList.toggle('hovering',on);
  if(groups[k])groups[k].classList.toggle('hov',on);if(callouts[k])callouts[k].g.classList.toggle('hov',on)}

/* compacto en pantallas angostas: solo la figura */
function fit(){var w=stage.clientWidth;var compact=w<560;stage.classList.toggle('compact',compact);
  svg.setAttribute('viewBox',compact?'200 14 360 900':'0 0 760 920')}
if(window.ResizeObserver)new ResizeObserver(fit).observe(stage);else window.addEventListener('resize',fit);fit();

var cap=document.getElementById('stageCap');
function setActive(k){var a=k||null;stage.classList.toggle('has-active',!!a);
  Object.keys(groups).forEach(function(x){groups[x].classList.toggle('on',x===a)});
  Object.keys(callouts).forEach(function(x){callouts[x].g.classList.toggle('on',x===a)});
  if(cap)cap.textContent=a?FM.areas[a].n+' · '+(FM.counts[a]||0)+' péptidos':'Vista anterior · toca un sistema'}
setActive(FM.getArea());
window.Body3D={setActive:setActive};
stage.classList.add('ready');
})();
