function mergeArrays(a, b) {
  let c = [];
  let i = 0;
  while ( i < a.length && i < b.length) {
    c.push( a[ i ] )
    c.push( b[ i ] )
    i++
  }
  if ( b.length > a.length ) {
    while ( i < b.length) {
      c.push( b[ i ] )
      i++
    }
  }
  if ( a.length > b.length) {
    while ( i < a.length) {
      c.push( a[ i ] )
      i++
    }
  }
  return c
}
