const reverse = (str) => {
    if (typeof(str) === 'string') {
        if (str.length > 0) {
            let remainingStr = str
            let reversed = ''

            while (remainingStr.length > 0) {
                reversed += remainingStr.slice(-1);
                remainingStr = remainingStr.slice(0,-1);
            }

            return reversed
        }
        return ''
    }
    return str
}

export default reverse