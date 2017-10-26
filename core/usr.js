

usr = typeof usr !== 'undefined' ? usr : {}

/*
  Pseudo Code
   on reload
     check for _achaeasail_
     
     if _achaeasail_
       try loading
       error >> wipe & retry with defaults
   
     else
       use defaults
       save
   
   on change tabs
     save
   on option changes
     save
   on minimisation of settings
     save
       
 */

usr.prep = function() {
  // log(localStorage)
  // usr.wipe()

  if (usr.previous()) { // returning user
    log('Loading preferences...')
    usr.load()
  } else {
    log('New user...')
    usr.save() // saving the defaults
  }
}

usr.previous = function() {
  var lget = (k) => window.localStorage.getItem(k) // https://stackoverflow.com/a/41126225/6881999
  var prev = lget('_achaeasail_')
  if (prev === null) { return false }
  return true
}

usr.load = function() {
  var lget = (k) => window.localStorage.getItem(k)
  var c = lget('_achaeasail_cord')
  var z = lget('_achaeasail_zoom')
  var p = lget('_achaeasail_pind')
  var t = lget('_achaeasail_ctab')
  
  if (c !== null) { var__cord = JSON.parse(c) }
  if (z !== null) { var__zoom = Number(z)     }
  if (p !== null) {  var_pind = (p == 'true') }
  if (t !== null) {  var_tabd = t             }
  
  // checking validity
  if (typeof var__cord !== 'object')  { log('Error >> Coordinates saved not in array form.') }
  if (typeof var__zoom !== 'number')  { log('Error >> Zoom saved not numerical.'); var__zoom = 0; }
  if (typeof var_pind  !== 'boolean') { log('Error >> Pinned not saved as boolean.'); var_pind = false }
}

usr.save = function() {
  var r = d3.zoomTransform(d3.select('canvas').node())
  var z = r.k
  log('Saving preferences...')
  var lset = (k,v) => window.localStorage.setItem(k,v)
  lset('_achaeasail_',       true)
  lset('_achaeasail_cord',   JSON.stringify( var__cord ))
  lset('_achaeasail_zoom',   z)
  lset('_achaeasail_pind',   var_pind)
  lset('_achaeasail_ctab',   var_tabd)
}

usr.wipe = function() {
  var lrem = (k) => window.localStorage.removeItem(k)
  lrem('_achaeasail_'    )
  lrem('_achaeasail_cord')
  lrem('_achaeasail_zoom')
  lrem('_achaeasail_pind')
  lrem('_achaeasail_ctab')
}
