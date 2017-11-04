
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

// Minos
asm.data.put({id: 'Minos', objt: 'reefs', arcs: [
     [[ 253.5, -552.5], 
      [0,3],[2,0],[0,2],[2,0],[0,-2],[1,0],[0,1],[1,0],[0,1],[1,0],[0,2],[-4,0],[0,1],[2,0],[0,1],[1,0],[0,-1],[-1,0],
      [0,-1],[2,0],[0,1],[0,-2],[2,0],[0,1],[1,0],[0,1],[-2,0],[0,-1],[-1,0],[0,2],[1,0],[0,1],[1,0],[0,-1],[1,0],[0,1],
      [-1,0],[0,1],[2,0],[0,-1],[1,0],[0,-1],[2,0],[0,1],[-2,0],[0,1],[2,0],[0,1],[2,0],[0,1],[3,0],[0,-1],[-3,0],[0,-2],
      [1,0],[0,1],[2,0],[0,1],[2,0],[0,1],[1,0],[0,-1],[-1,0],[0,-1],[-2,0],[0,-1],[-1,0],[0,-1],[2,0],[0,1],[2,0],[0,1],
      [1,0],[0,2],[2,0],[0,-1],[1,0],[0,-1],[1,0],[0,-3],[1,0],[0,-2],[-1,0],[0,1],[-1,0],[0,3],[-2,0],[0,1],[-1,0],[0,-1],
      [1,0],[0,-1],[1,0],[0,-3],[1,0],[0,-1],[3,0],[0,1],[1,0],[0,-1],[-2,0],[0,-1],[3,0],[0,1],[1,0],[0,1],[1,0],[0,-1],
      [-1,0],[0,-2],[-3,0],[0,-1],[6,0],[0,1],[-1,0],[0,1],[1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-3],[-1,0],[0,1],[-1,0],
      [0,2],[-1,0],[0,-2],[-1,0],[0,-1],[2,0],[0,-1],[-2,0],[0,-1],[1,0],[0,1],[1,0],[0,-2],[1,0],[0,2],[1,0],[0,-3],
      [-2,0],[0,1],[-1,0],[0,-2],[-1,0],[0,-3],[-1,0],[0,-2],[-1,0],[0,2],[-3,0],[0,-1],[1,0],[0,-1],[-1,0],[0,-1],
      [-1,0],[0,-1],[-2,0],[0,2],[-2,0],[0,-1],[1,0],[0,-1],[-1,0],[0,1],[-1,0],[0,-2],[-1,0],[0,-1],[-1,0],[0,1],
      [-1,0],[0,-1],[-1,0],[0,1],[-1,0],[0,-1],[-1,0],[0,2],[-2,0],[0,-1],[-1,0],[0,1],[1,0],[0,2],[1,0],[0,1],[-2,0],
      [0,-2],[-1,0],[0,-3],[-1,0],[0,1],[-1,0],[0,2],[-2,0],[0,-1],[-2,0],[0,1],[-1,0],[0,1],[1,0],[0,-1],[2,0],[0,2],
      [1,0],[0,-1],[2,0],[0,-1],[1,0],[0,1],[-1,0],[0,2],[1,0],[0,-1],[1,0],[0,1],[1,0],[0,1],[1,0],[0,-1],[1,0],[0,-2],
      [1,0],[0,1],[1,0],[0,1],[-2,0],[0,2],[1,0],[0,1],[-1,0],[0,1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,1],[-1,0],[0,-1],
      [-2,0],[0,-2],[-1,0],[0,1],[-2,0],[0,-1],[-1,0],[0,1],[1,0],[0,3],[-1,0],[0,-2],[-1,0],[0,2],[1,0],[0,1],[-1,0],[0,1],
      [-2,0],[0,-1],[1,0],[0,-1],[-3,0],[0,2],[1,0],[0,2],[1,0],[0,4],[-1,0],[0,-1],[-1,0],[0,-1],[1,0],[0,-1],[-2,0],[0,1],
     ],
]})