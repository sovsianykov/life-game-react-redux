 export  const fieldCreator = (n, m ) => {
       let field = []
    for ( let i = 0 ; i < n ; i++ ) {
        for ( let j = 0 ; j < m ; j++ ) {
             field.push({ x : i, y : j, value : 0  })
        }
    }
    return field;
}
