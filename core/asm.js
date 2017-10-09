
/* 
  requires topojson
 */

asm = typeof asm !== 'undefined' ? asm : {}

asm.copy = function(obj) { var c; if (null == obj || 'object' != typeof obj) return obj; if (obj instanceof Date) { c = new Date(); c.setTime(obj.getTime()); return c }; if (obj instanceof Array) { c = []; for (var i=0;i<obj.length;i++) { c[i] = asm.copy(obj[i]) }; return c }; if (obj instanceof Object) { c = {}; for (var attr in obj) { if (obj.hasOwnProperty(attr)) { c[attr] = asm.copy(obj[attr]) } }; return c }; throw new Error('Unable to copy obj! Type not supported.'); }

asm.drawpoint = function(context, transform, coordinates) {
  var c = context
  var p = coordinates
  var r = transform
  var radius = opt_hoverRadius
  
  p[0] *= opt_unitWidth
  p[1] *= opt_unitHeight
  p = r.apply(p)
  c.closePath()
  c.beginPath()
  c.moveTo( p[0], p[1])
  c.arc( p[0], p[1], radius, 0, 2 * Math.PI )
  c.fillStyle = 'rgba( 190, 100,  55, 1)'
  c.fill()
  c.closePath()
}

asm.drawtype = function(context,path,data,objt,fill) {
  var fill = fill || 'rgba(155,155,155,0.75)'
  var c = context
  c.closePath()
  c.beginPath()
  var f = topojson.feature( data, data.objects[objt] ).features
  for (var i=0; i < f.length; i++) { path( f[i].geometry ) }
  c.lineWidth = 3
  c.stroke()
  c.fillStyle = fill
  c.fill()
  c.closePath()
}

asm.grid = function(context,zoom) {
  var c  = context
  var r  = zoom
  var n  = opt_gridnum || 445
  var uh = opt_unitHeight || 7
  var uw = opt_unitWidth  || 4

  c.beginPath()
  var fr = 1
  switch (true) {
    case (r.k < 0.05): fr = 100; break;
    case (r.k < 0.15): fr =  50; break;
    case (r.k < 0.35): fr =  20; break;
    case (r.k < 0.80): fr =  10; break;
    case (r.k < 2.00): fr =   5; break;
    default: fr = 1; break; }

  var belowMe = Math.floor(uh / 2)
  for (var DTU=0; DTU>-n; DTU -= (uh * fr)) {
    var j = DTU + belowMe
    var a = r.apply([ -n, j])
    var b = r.apply([  n, j])
    c.moveTo( a[0], a[1] )
    c.lineTo( b[0], b[1] ) }
  for (var UTD=0; UTD<n; UTD += (uh * fr)) {
    var j = UTD + belowMe
    var a = r.apply([ -n, j])
    var b = r.apply([  n, j])
    c.moveTo( a[0], a[1] )
    c.lineTo( b[0], b[1] ) }
  var leftOfMe = Math.floor(uw / 2)
  for (var LTR=0; LTR<n; LTR += (uw * fr)) {
    var j = LTR - leftOfMe
    var a = r.apply([ j, -n])
    var b = r.apply([ j,  n])
    c.moveTo( a[0], a[1] )
    c.lineTo( b[0], b[1] ) }
  for (var RTL=0; RTL>-n; RTL -= (uw * fr)) {
    var j = RTL - leftOfMe
    var a = r.apply([ j, -n])
    var b = r.apply([ j,  n])
    c.moveTo( a[0], a[1] )
    c.lineTo( b[0], b[1] ) }
  c.lineWidth = 1;
  c.strokeStyle='rgba(155,155,155,0.85)';
  c.strokeStyle='rgba( 15, 35, 75,0.45)';
  c.stroke();
}

