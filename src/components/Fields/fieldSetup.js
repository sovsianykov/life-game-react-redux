const fieldCreator = (n, m ) => {
       let field = []
    for ( let i = 0 ; i < n ; i++ ) {
        for ( let j = 0 ; j < m ; j++ ) {
             field.push({ y : i, x : j, value : 0 , isLive : false })
        }
    }
    return field;
}
export const fieldSetup = fieldCreator( 20, 20);
