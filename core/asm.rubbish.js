
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