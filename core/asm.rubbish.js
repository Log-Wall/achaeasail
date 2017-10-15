
  var portList = [{name: 'Aalen',         x: -1000, y:-1000},
                  {name: 'Ageiro',        x:   -81, y:   19},
                  {name: 'Ashtan',        x: -1000, y:-1000},
                  {name: 'Colchis',       x: -1000, y:-1000},
                  {name: 'Clockwork Isle',x: -1000, y:-1000},
                  {name: 'Eastern Shore', x: -1000, y:-1000},
                  {name: 'Eirenwaar',     x: -1000, y:-1000},
                  {name: 'Harae',         x: -1000, y:-1000},
                  {name: 'Ilyrean',       x: -1000, y:-1000},
                  {name: 'Karbaz',        x: -1000, y:-1000},
                  {name: 'Lothos',        x: -1000, y:-1000},
                  {name: 'Minos',         x: -1000, y:-1000},
                  {name: 'Mysia',         x: -1000, y:-1000},
                  {name: 'New Hope',      x: -1000, y:-1000},
                  {name: 'Orilla',        x: -1000, y:-1000},
                  {name: 'Polyargos',     x: -1000, y:-1000},
                  {name: 'Prin',          x: -1000, y:-1000},
                  {name: 'Riparium',      x: -1000, y:-1000},
                  {name: 'Sea Lion Cove', x: -1000, y:-1000},
                  {name: 'Shala-Khulia',  x: -1000, y:-1000},
                  {name: 'Shastaan',      x: -1000, y:-1000},
                  {name: 'Ship Arena Island',x: -1000,y:-1000},
                  {name: 'Suliel',        x: -1000, y:-1000},
                  {name: 'Tapoa',         x: -1000, y:-1000},
                  {name: "Tasur'ke",      x: -1000, y:-1000},
                  {name: 'Thraasi',       x: -1000, y:-1000},
                  {name: 'Tuar',          x: -1000, y:-1000},
                  {name: 'Ulangi',        x: -1000, y:-1000},
                  {name: 'Umbrin',        x: -1000, y:-1000},
                  {name: 'Valho',         x: -1000, y:-1000},
                  {name: 'Zanzibaar',     x: -1000, y:-1000},
                  {name: 'Zaphar',        x: -1000, y:-1000},]
                  
  var initialLength = jsondata.objects.ports.geometries.length
  generatePort = function(name,x,y) {
    y = y * -1
    jsondata.arcs.push([[-0.5 + x,-0.5 + y],[0,1],[1,0],[0,-1],[-1,0]])
    jsondata.objects.ports.geometries.push({
      type: 'Polygon', id: name, properties: {name: name},
      arcs: [
       [(initialLength + 1)]
      ]
    })
  }
  for (var k=0;k<portList.length;k++) {
   var t = portList[k]
   //  generatePort(t.name, t.x, t.y)
  }
  
  
  
  
fnc_mousemove = function(e) {
  var s =  'Cursor position: x '+ e.clientX+', '+e.clientY
  var f = document.getElementById('map').getBoundingClientRect()
  // var n = document.getElementById('map-inner').getBoundingClientRect()
  var r = d3.zoomTransform(d3.select('canvas').node())
  if (opt_tracer) {
  $('.tracer').removeClass('hidden')
  $('#tracer-x').css('top',e.clientY)
  $('#tracer-y').css('left',e.clientX)
  // This value is static in semantic zoom
  s = s + ', #map top (orig): ' + f.top
  // regardless of zoom, this returns the pixels of the highest point on the SVG (the grid for now) from the border
  //   of the SVG
  // s = s + ', #map-inner top: ' + n.top
  // unzoomed, this tells us where zero_zero is in relation to the border
  s = s + ', (0,0) top: '+r.y
  // therefore, our untransformed y = e.clientY - f.top - r.y
  }
  var y = e.clientY - f.top - r.y;  y = Math.round(y / (opt_unitHeight * r.k)) * -1
  var x = e.clientX - f.left - r.x; x = Math.round(x / (opt_unitWidth * r.k))
  $('#text').text(' X : '+x+' | Y : '+y)
  log(s)

  //remove tooltip if not hovering over hoverable
  if (var_hovr) {
   var range = var_hvrg
   if (e.clientY < range.minY || e.clientY > range.maxY || e.clientX < range.minX || e.clientX > range.maxX) {
    var_hovr   = false
    var_hvrg = {}
    $('#tooltip').remove()
    $('canvas').css('cursor','default')
   }
  }

  // scan for hitting hoverables
  // for hitboxes in hittables do
  // calculate zz hitbox
  var range = {}
  range.minX = 0
  range.maxX = 100
  range.minY = 0
  range.minY = 100
  
  // range for Shala-Khulia being 0,0
  range.minX = r.x - opt_hoverRadius
  range.maxX = r.x + opt_hoverRadius
  range.minY = r.y - opt_hoverRadius
  range.maxY = r.y + opt_hoverRadius

  var_hvrg = copy(range)
  if (e.clientY >= range.minY && e.clientY <= range.maxY) {
   if (e.clientX >= range.minX && e.clientX <= range.maxX) {
    $('canvas').css('cursor','pointer')
    var_hovr = true
    // lookup text
    $('#tooltip').remove()
    var d = ''
    d += '<div id="tooltip" style="position: absolute; left: '+(e.clientX+15)+'px; top: '+(e.clientY-15)+'px;">'
    d += 'Shala-Khulia'
    // look up trades
    // 3 glass for 2 incense
    d += '<div class="trade" style="white-space:pre-wrap;">  <span style="color:rgba(255,255,255,1);">3</span> <span style="color:rgba(150,180,230,1);">glass</span> for <span style="color:rgba(255,255,255,1);">2</span> <span style="color:rgba(205,45,100,1);">incense</span></div>'
    d += '</div>'
    $('body').append(d)
   }
  }

  // range for Shala-Khulia being 0,0
 // mark Polyargos
 var transform = d3.zoomTransform(d3.select('canvas').node())
  var coords = [-25,-60]
  var takeX = coords[0] * opt_unitWidth + r.x / r.k
  var takeY = coords[1] * opt_unitHeight + r.y / r.k
  var take  = r.apply([takeX, takeY]) //transform.apply([takeX, takeY])
// log(r.apply(take))
// log(transform)

  range.minX = r.y - opt_hoverRadius + takeX
  range.maxX = r.y + opt_hoverRadius + takeX
  range.minY = r.y - opt_hoverRadius + takeY
  range.maxY = r.y + opt_hoverRadius + takeY

  range.minX = takeX - opt_hoverRadius
  range.maxX = takeX + opt_hoverRadius
  range.minY = takeY - opt_hoverRadius
  range.maxY = takeY + opt_hoverRadius
  var_hvrg = copy(range)
// log('Range '+range.minX+', '+range.minY)
  if (e.clientY >= range.minY && e.clientY <= range.maxY) {
   if (e.clientX >= range.minX && e.clientX <= range.maxX) {
    $('canvas').css('cursor','pointer')
    var_hovering = true
    // lookup text
    $('#tooltip').remove()
    var d = ''
    d += '<div id="tooltip" style="position: absolute; left: '+(e.clientX+15)+'px; top: '+(e.clientY-15)+'px;">'
    d += 'Polyargos'
    // look up trades
    // 3 glass for 2 incense
    d += '<div class="trade" style="white-space:pre-wrap;">  <span style="color:rgba(255,255,255,1);">3</span> <span style="color:rgba(150,180,230,1);">glass</span> for <span style="color:rgba(255,255,255,1);">2</span> <span style="color:rgba(205,45,100,1);">incense</span></div>'
    d += '</div>'
    $('body').append(d)
   }
  }

}