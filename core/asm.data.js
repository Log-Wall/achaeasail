
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

asm.data.tradeColours = {
 armaments : 'rgba( 122, 121,  85,  1)',
 ceramics  : 'rgba( 105,  45, 180,  1)',
 cotton    : 'rgba( 191, 191, 185,  1)',
 fruits    : 'rgba( 193, 188,  36,  1)',
 fur       : 'rgba( 148, 167, 240,  1)',
 gems      : 'rgba( 222, 222, 222,  1)',
 glass     : 'rgba( 150, 180, 230,  1)',
 grain     : 'rgba( 201, 155, 185,  1)',
 granite   : 'rgba( 178, 155,  95,  1)',
 hemp      : 'rgba(  64, 161,  78,  1)',
 incense   : 'rgba( 205,  45, 100,  1)',
 kawhe     : 'rgba( 115,  91,  75,  1)',
 ore       : 'rgba( 120,  94, 104,  1)',
 perfume   : 'rgba( 125,  25, 162,  1)',
 porcelain : 'rgba( 205, 245, 240,  1)',
 spices    : 'rgba( 242,  45, 157,  1)',
 tea       : 'rgba(  90, 110, 160,  1)',
 terracotta: 'rgba( 122,  84,  63,  1)',
 sandstone : 'rgba( 130, 100,  85,  1)',
 silk      : 'rgba( 136, 185, 160,  1)',
 sovereigns: 'rgba( 200, 150,  50,  1)',
 sugar     : 'rgba( 205, 193, 185,  1)',
 tabac     : 'rgba(   1,   1,   1,  1)',
 wine      : 'rgba( 140,  55,  60,  1)',
 wool      : 'rgba(  90,  90,  80,  1)',
}
  
asm.data.poi = {
 ['Aalen']        : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [  53,  84], type: 'harbour',
 },
 ['Ashtan']        : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [  32, 338], type: 'harbour',
 },
 ['Eastern Shore'] : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 366, 180], type: 'harbour',
 },
 ['Mhaldor']       : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [-123, 288], type: 'harbour',
 },
 ['Mysia']         : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 461, 112], type: 'harbour',
  trades: {
   ceramics    : [
    { cost: 'silk',       lose: 3,    receive: 2, }, 
    { cost: 'porcelain',  lose: 4,    receive: 3, }, ],
   tabac       : [
    { cost: 'silk',       lose: 3,    receive: 2, }, 
    { cost: 'porcelain',  lose: 4,    receive: 3, }, ],
  },
 },
 ['New Hope']      : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 282,  38], type: 'harbour',
 },
 ['Phereklos']     : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [  46, 486], type: 'harbour',
 },
 ['Polyargos']     : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ -25,  61], type: 'harbour',
 },
 ['Rheodad']       : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ -98, 412], type: 'harbour',
 },
 ['Sea Lion Cove'] : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 173,  14], type: 'harbour',
 },
 ['Shala-Khulia']  : { paletteR: 190, paletteG: 100, paletteB: 55, paletteA: 1,
  coordinates: [   0,   0], type: 'harbour',
  trades: {
   incense: [
    { cost: 'glass',      lose: 3,    receive: 2, }, ],
  },
 },
 ['Shastaan']      : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 364, 139], type: 'harbour',
  trades: {
   cotton    : [
    { cost: 'sovereigns', lose: 1000, receive: 1, }, ], 
   gems      : [
    { cost: 'perfume',    lose: 2,    receive: 1, }, ], 
   hemp      : [
    { cost: 'fur',        lose: 4,    receive: 3, }, ], 
   sandstone : [
    { cost: 'sovereigns', lose: 1000, receive: 1, }, ], 
   wine      : [
    { cost: 'perfume',     lose: 3,   receive: 2, }, ], 
  },
 },
 ['Targossas']     : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 376, 234], type: 'harbour',
 },
 ["Tasur'ke"]      : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 344, 356], type: 'harbour',
  trades: {
   granite   : [
    { cost: 'sandstone',  lose: 4,    receive: 3, }, ], 
   kawhe     : [
    { cost: 'sugar',      lose: 3,    receive: 2, }, ], 
   wool      : [
    { cost: 'sovereigns', lose: 1000, receive: 1, }, ], 
  },
 },
 ['Tenwat']       : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 215, 579], type: 'harbour',
 },
 ['Thraasi']      : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ -15, 204], type: 'harbour',
  trades: {
   armaments : [
    { cost: 'spices',     lose: 2,    receive: 1, }, ], 
   glass     : [
    { cost: 'fruits',     lose: 3,    receive: 2, }, ], 
   grain     : [
    { cost: 'sovereigns', lose: 1000, receive: 1, }, ], 
   ore       : [
    { cost: 'sovereigns', lose: 1000, receive: 1, }, ], 
  },
 },
 ['Ulangi']      : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 402, 163], type: 'harbour',
 },
 ['Valho']       : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 299, 645], type: 'harbour',
 },
 ['Zanzibaar']    : { paletteR: 145, paletteG:  60, paletteB: 55, paletteA: 1,
  coordinates: [ 479,  49], type: 'harbour',
  trades: {
   fruits    : [
    { cost: 'ore',        lose: 4,    receive: 3, }, ], 
   incense   : [
    { cost: 'armaments',  lose: 2,    receive: 3, }, ], 
   perfume   : [
    { cost: 'gems',       lose: 1,    receive: 2, }, ], 
   spices    : [
    { cost: 'armaments',  lose: 2,    receive: 1, }, ], 
   tea       : [
    { cost: 'terracotta', lose: 3,    receive: 2, }, ], 
  },
 },
}

asm.data.topoj = {
   type: 'Topology',
   transform: { scale: [0,0], translate: [0,0], }, // This will be overwritten later
   arcs: [
     [[-0.5,-0.5],[0,1],[1,0],[0,-1],[-1,0]],
     [[42.5,-5.5],[0,1],[1,0],[0,-1],[-1,0]], // Sea Lion Cove
   ],
   objects: {
    ports:  {
     type: 'GeometryCollection',
     geometries: [
      {type: 'Polygon',arcs:[[0]],id:'SK',properties:{name:'Shala-Khulia',},},
      {type: 'Polygon',arcs:[[1]],id:'SL',properties:{name:'Sea Lion Cove',},},
     ],
    },
    marsh:  {
     type: 'GeometryCollection',
     geometries: [
      // {type: 'Polygon',arcs:[[5,6,7]],id:'MP-SK'}, /* DON'T DELETE, Sample
     ],
    },
    chops:  {
     type: 'GeometryCollection',
     geometries: [], },
    grass:   {
     type: 'GeometryCollection',
     geometries: [], },
    mount: {
     type: 'GeometryCollection',
     geometries: [], },
    reefs:  {
     type: 'GeometryCollection',
     geometries: [], },
    roughs: {
     type: 'GeometryCollection',
     geometries: [], },
   },
  }

asm.data.put({id: 'Shala-Khulia', objt: 'reefs', arcs: [
     [[ 1.5,-0.5],[0,2],[1,0],[0,1],[1,0],[0,1],[5,0],
      [0,1],[6,0],[0,-1],[1,0],[0,-2],[1,0],[0,-2],[1,0],[0,-1],[1,0],[0,-1],
      [2,0],[0,-1],[1,0],[0,-2],[1,0],
      [0,-12],[-1,0],[0,-7],[1,0],[0,-5],[1,0],[0,-6],[-1,0],[0,-2],[1,0],[0,-5],[-1,0],
      [0,-5],[-1,0],[0,-2],[-1,0],[0,-1],[-1,0],[0,-1],[-2,0],[0,-1],[-2,0],[0,1],[-2,0],
      [0,1],[-1,0],[0,-1],[-2,0],[0,1],[-2,0],[0,1],[-1,0],[0,2],[-1,0],[0,3],[1,0],
      [0,2],[1,0],[0,4],[-1,0],[0,2],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-2,0],[0,1],[-1,0],[0,2],
      [-1,0],[0,2],[-1,0],[0,1],[-1,0],[0,1],[-2,0],[0,-1],[-4,0],[0,1],[-1,0],[0,1],
      [-1,0],[0,3],[1,0],[0,2],[-1,0],[0,1],[-1,0],[0,1],[-4,0],[0,1],[-1,0],[0,1],
      [-1,0],[0,1],[-1,0],[0,4],[1,0],[0,1],[2,0],[0,1],[1,0],[0,3],[-1,0],[0,4],[1,0],[0,1],
      [ 3,0],[0,1],[ 2,0],[0,1],[ 1,0],[0,1],[ 2,0],[0,1],[ 1,0],[0,2],[1,0],[0,1],[2,0],
      [ 0,1],[3,0],[0,-3],
      [-1,0],[0,-2],[-1,0],[0,1],[-1,0],[0,-1],[1,0],[0,-1],[-2,0],
     ],
     [[-0.5, 0.5],[-2,0],[0,-1],[-1,0],[0,-2],[-1,0],[0,-1],[-1,0],
      [0,-3],[-1,0],[0,-1],[-1,0],[0,-2],[-1,0],
      [0,-4],[1,0],[0,-1],[1,0],[0,-2],[1,0],[0,-1],[2,0],[0,-1],[1,0],
      [0,-2],[1,0],[0,-1],[1,0],[0,-1],[2,0],[0,-1],[1,0],[0,-2],[5,0],
      [0,1],[6,0],[0,1],[1,0],
      // bridge for now
      [1,0],[1,0], // end bridge
      [0,2],[1,0],[0,1],[1,0],[0,6],[1,0],[0,6],
      [-1,0],[0,3],[-2,0],[0,1],[-1,0],[0,1],[-2,0],[0,1],[-2,0],[0,1],[-2,0],
      // bridge for now
      [-1,0], [-2,0], // end bridge
     ],
     [[ 6.5,-1.5],[-1,0], // end bridge
      [0,-1],[-1,0],[0,-1],[-2,0],[0,1],[-2,0],[0,2],[1,0],],
]})
asm.data.put({id: 'Shala-Khulia', objt: 'marsh', arcs: [
     [[ 0.5,-0.5],[0,1],[1,0],[0,-1],[-1,0]],
     [[ 0.5,-0.5],[0,-2],[2,0],[0,-1],[2,0],[0,1],[1,0],[0,1],[1,0],],
     [[ 6.5,-1.5],[0,-2],[-1,0],[0,-1],[-2,0],[0,-1],[-3,0],[0,1],[-1,0],[0,2],[-1,0],[0,2],[2,0],],
]})
asm.data.put({id: 'Shala-Khulia', objt: 'grass', arcs: [
     [[-0.5,-0.5],[-1,0],[0,-2],[1,0],[0,-2],[1,0],[0,-1],[3,0],[0,1],[2,0],[0,1],
      [1,0],[0,2],[5,0],[0,-1],[2,0],[0,-1],[2,0],[0,-1],[1,0],[0,-1],[2,0],[0,-3],[1,0],[0,-6],
      [-1,0],[0,-6],[-1,0],[0,-1],[-1,0],[0,-2],[-3,0],[0,-1],[-6,0],[0,-1],[-5,0],
      [0,2],[-1,0],[0,1],[-2,0],[0,1],[-1,0],[0,1],[-1,0],[0,2],[-1,0],[0,1],
      [-2,0],[0,1],[-1,0],[0,2],[-1,0],[0,1],[-1,0],[0,4],[1,0],[0,2],[1,0],[0,1],[1,0],
      [0,3],[1,0],[0,1],[1,0],[0,2],[1,0],[0,1],[2,0],[0,1],
      ],
]})
asm.data.put({id: 'Polyargos', objt: 'reefs', arcs: [
     [[-32.5, -50.5], [1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-3],[5,0],[0,-3],[-1,0],
      [0,-2],[1,0],[0,1],[1,0],[0,2],[2,0],[0,1],[1,0],[0,1],[5,0],[0,-1],[1,0],[0,-1],[1,0],
      [0,-5],[-1,0],[0,-1],[-1,0],[0,-1],[-2,0],[0,-1],[-1,0],[0,-1],[1,0],[0,-1],[1,0],[0,-1],
      [1,0],[0,-6],[-1,0],[0,-2],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-2],[-2,0],[0,-2],[-2,0],[0,-1],
      [-1,0],[0,-1],[-2,0],[0,-1],[-4,0],[0,-1],[-4,0],[0,-3],[-1,0],[0,-2],[-2,0],[0,-1],
      [-4,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],],
     [[-43.5, -89.5],[-5,0],[0,1],[-1,0],[0,5],[1,0],[0,1],[-1,0],
      [0,1],[-2,0],[0,1],[-2,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],[0,3],[-1,0],[0,3],[-1,0],
      [0,2],[-1,0],[0,4],[1,0],[0,1],[1,0],[0,1],[1,0],[0,-1],[2,0],[0,2],[-1,0],
      [0,1],[1,0],[0,2],[1,0],[0,1],[1,0],[0,1],[4,0],[0,1],[2,0],
      [0,1],[2,0],[0,1],[2,0],[0,1],[3,0],[0,1],[2,0],[0,1],[4,0],[0,1],[1,0],],
]})
asm.data.put({id: 'Left of Shala-Khulia', objt: 'reefs', arcs: [
     [[-25.5,-16.5],[0,-1],[1,0],[0,-3],[1,0],[0,-3],[1,0],[0,-1],[1,0],[0,-1],[3,0],
      [0,-1],[1,0],[0,-1],[1,0],[0,-3],[1,0],[0,-5],[-1,0],[0,-1],[-3,0],[0,-1],[-2,0],
      [0,-1],[-7,0],[0,1],[-2,0],[0,1],[-3,0],[0,1],[-1,0],[0,1],[-1,0],[0,1],[-1,0],
      [0,5],[1,0],[0,1],[1,0],[0,1],[1,0],[0,1],[1,0],[0,2],[1,0],[0,2],[1,0],[0,2],
      [1,0],[0,1],[1,0],[0,1],[1,0],[0,1],[2,0],
     ],
]})
asm.data.put({id: 'Left of Shala-Khulia', objt: 'marsh', arcs: [
     [[-26.5,-18.5],[0,-1],[1,0],[0,-4],[1,0],[0,-3],[1,0],[0,-1],[2,0],[0,-1],[1,0],[0,-1],[2,0],
      [0,-2],[1,0],[0,-3],[-2,0],[0,-1],[-1,0],[0,-1],[-2,0],[0,1],[-1,0],[0,-1],[-4,0],
      [0,1],[-3,0],[0,1],[-2,0],[0,1],[-1,0],[0,1],[-1,0],[0,3],[2,0],[0,1],[1,0],
      [0,1],[1,0],[0,1],[1,0],[0,2],[-1,0],[0,1],[1,0],[0,2],[1,0],[0,1],[1,0],[0,2],[1,0],
     ],
]})

asm.data.put({id: 'Polyargos', objt: 'mount', arcs: [
     [[-35.5, -55.5], [0,-2],[2,0],[0,-2],[1,0],[0,-1],[2,0],[0,-1],[2,0],
      [0,-1],[2,0],[0,-1],[1,0],[0,1],[1,0],[0,-1],[1,0],[0,-4],[1,0],[0,-2],[1,0],[0,-5],[-1,0],[0,-2],[-1,0],
      [0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-1,0],[0,-1],[-2,0],[0,-1],[-2,0],
      [0,-1],[-10,0],[0,1],[-1,0],[0,2],[3,0],[0,1],[1,0],[0,2],[-1,0],[0,1],[-2,0],[0,1],
      [-9,0],[0,1],[-1,0],[0,2],[-1,0],[0,5],[1,0],[0,2],[1,0],[0,1],[1,0],[0,1],[2,0],[0,1],[1,0],
      [0,1],[1,0],[0,1],[2,0],[0,1],[2,0],[0,1],[2,0],[0,1],[2,0],[0,1],[1,0],[0,1],[1,0],
     ],
]})

asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-32.5,-57.5], [0,-1],[1,0],[0,-1],[5,0],[0,-2],[1,0],[0,1],[1,0],[0,-2],
      [-1,0],[0,-1],[-1,0],[0,1],[-2,0],[0,1],[-2,0],[0,1],[-2,0],[0,1],[-1,0],[0,2],[1,0],
     ],
]})
asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-34.5,-54.5], [1,0],[0,-1],[-1,0],[0,1],
     ],
]})
asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-18.5,-59.5], [1,0],[0,-1],[-1,0],[0,1],
     ],
]})
asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-22.5,-62.5], [1,0],[0,-1],[-1,0],[0,1],
     ],
]})
asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-20.5,-70.5], [2,0],[0,-2],[-1,0],[0,1],[-1,0],[0,1],
     ],
]})
asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-40.5,-87.5], [1,0],[0,-1],[-1,0],[0,1],
     ],
]})
asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-52.5,-72.5], [1,0],[0,-1],[-1,0],[0,1],
     ],
]})
asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-50.5,-60.5], [1,0],[0,-1],[-1,0],[0,1],
     ],
]})
asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-56.5,-67.5], [2,0],[0,-2],[-1,0],[0,1],[-1,0],[0,1],
     ],
]})
asm.data.put({id: 'Polyargos', objt: 'marsh', arcs: [
     [[-50.5, -74.5], [0,-1],[9,0],[0,-1],[2,0],[0,-1],[1,0],[0,-2],[-1,0],[0,-1],
      [-2,0],[0,2],[-1,0],[0,1],[-1,0],[0,-1],[-3,0],[0,1],[-4,0],[0,1],[-1,0],[0,2],[1,0],
     ],
]})

