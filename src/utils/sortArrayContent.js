// Sort Array Content: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
function compare( a, b ) {
    if ( a.pushed_at < b.pushed_at ){
        return 1;
    }
    if ( a.pushed_at > b.pushed_at ){
        return -1;
    }
    return 0;
}

export default compare