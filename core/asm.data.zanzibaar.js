

asm = typeof asm !== 'undefined' ? asm : {}
asm.data = typeof asm.data !== 'undefined' ? asm.data : {}

asm.data.put = function(opt,dataset) { // I'd prefer to split this out, but knowing how shit doesn't work, better to define locally
 var arcs = opt.arcs || []
 var type = opt.type || 'Polygon'
 var objt = opt.objt || 'undefined'
 var   id = opt.id   || ''
 
 var data = dataset  || asm.data.topoj
 data.objects[objt] = data.objects[objt] || {}
 data.objects[objt].type = data.objects[objt].type || 'GeometryCollection'
 data.objects[objt].geometries = data.objects[objt].geometries || []
 var t = {}
 t.type = type
 t.id   = id
 t.arcs = t.arcs || []
 var initialLength = data.arcs.length
 var n = []
 for (var i=0;i<arcs.length;i++) {
  n.push(initialLength+i)
  data.arcs.push(arcs[i])
 }
 t.arcs.push(n)
 data.objects[objt].geometries.push(t)
 return dataset
}


asm.data.put({id: 'Zanzibaar', objt: 'reefs', arcs: [
     // 412 22
     [[414.5,-22.5], 
      [0,-1],[2,0],[0,-1],[2,0],[0,-1],
      
      [4,0],[0,-1],[2,0],[0,-1],[2,0],[0,-1],[1,0],[0,-6],
      [1,0],[0,-2],[2,0],[0,-1],[1,0],[0,-1],[2,0],[0,-1],[1,0],[0,-2],[3,0],
      [0,1],[1,0],[0,1],[4,0],[0,-1],[9,0],
      [0,-1],[1,0],[0,-1],[2,0],[0,-1],[3,0],[0,1],[5,0],[0,1],[7,0],
      [0,-1],[2,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[2,0],[0,-1],[1,0],
      [0,-1],[1,0],[0,-1],[2,0],[0,1],[1,0],[0,2],[1,0],[0,3],
      [-1,0],[0,5],[1,0],[0,1],[1,0],[0,1],[2,0],[0,1],[7,0],
      [0,-1],[2,0],[0,-1],[1,0],[0,-1],[1,0],
      [0,-1],[2,0],[0,-2],[-1,0],[0,-4],[-2,0],[0,-13],
      [-1,0],[0,-2],[-2,0],[0,-1],[-1,0],[0,-2],[-1,0],[0,-1],[-1,0],[0,-1],[-2,0],
      [0,-1],[-2,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-3,0],[0,-1],[-2,0],[0,-1],
      [-12,0],[0,1],[-6,0],[0,-1],[-6,0],[0,1],[-3,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],
      [-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,2],[-1,0],[0,1],[-6,0],[0,1],[-4,0],[0,1],
      [-1,0],[0,1],[-2,0],[0,1],[-1,0],[0,1],[-5,0],[0,1],[-2,0],[0,1],[-1,0],[0,1],
      [-2,0],[0,2],[-2,0],[0,2],[-1,0],[0,6],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],
      [-1,0],[0,2],[-1,0],[0,3],[-1,0],[0,2],[-1,0],[0,2],[-1,0],[0,1],[-1,0],
      [0,1],[1,0],[0,3],[1,0],[0,3],[2,0],[0,1],[2,0],[0,-1],[2,0],
      /*
      */
     ],
]})


asm.data.put({id: 'Zanzibaar', objt: 'grass', arcs: [
     // 412 22
     [[485.5,-37.5], 
      [5,0],[0,-1],[2,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-5,0],[0,1],[-1,0],[0,1],[-1,0],
      [0,2],[1,0],[0,1],
     ],
]})

asm.data.put({id: 'Zanzibaar', objt: 'grass', arcs: [
     // 412 22
     [[412.5,-28.5], 
      [0,2],[2,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],[-2,0],[0,2],[-1,0],
     ],
]})

asm.data.put({id: 'Zanzibaar', objt: 'grass', arcs: [
     // 412 22
     [[416.5,-36.5], 
      [3,0],[0,1],[3,0],[0,-1],[1,0],[0,-2],[-1,0],[0,-1],[-2,0],[0,-1],[-2,0],[0,1],[-2,0],[0,1],
      [-1,0],[0,1],[1,0],[0,1],
     ],
]})

asm.data.put({id: 'Zanzibaar', objt: 'grass', arcs: [
     // 412 22
     [[425.5,-41.5], 
      [4,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[2,0],[0,-1],[2,0],[0,-1],[4,0],[0,1],[1,0],[0,1],[1,0],[0,1],
      [2,0],[-1,0],[0,-1],[1,0],[0,-1],[2,0],[0,-1],[8,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],[2,0],[0,1],[1,0],
      [0,2],[1,0],[0,1],[12,0],[0,-2],[2,0],[0,-1],[1,0],[0,-1],[5,0],[0,1],[4,0],[0,2],[2,0],[0,1],[4,0],[0,-1],
      [1,0],[0,-1],[1,0],[0,-7],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-2],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],
      [0,-1],[-1,0],[0,-1],[-2,0],[0,-1],[-2,0],[0,-1],[-2,0],[0,-1],[-1,0],[0,-1],[-3,0],[0,-1],[-6,0],[0,1],
      [-2,0],[0,1],[-6,0],[0,-1],[-6,0],[0,1],[-2,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],
      [-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-2,0],[0,1],[-6,0],[0,1],[-3,0],[0,1],[-1,0],[0,1],[-2,0],
      [0,1],[-5,0],[0,1],
      [-1,0],[0,1],[-2,0],[0,1],[-1,0],[0,1],[-1,0],[0,3],[1,0],[0,1],[1,0],[0,1],[2,0],[0,2],
     ],
]})

asm.data.put({id: 'Zanzibaar', objt: '##ylw', arcs: [
     // 412 22
     [[442.5,-43.5], 
      [6,0],[0,-1],[2,0],[0,-1],[1,0],[0,-1],[-6,0],[0,1],[-2,0],[0,1],[-1,0],[0,1],
     ],
]})