const capitalize = (str) => {
    if (typeof(str) === 'string') {
        if (str.length > 0) {
            return str.slice(0,1).toUpperCase() + str.slice(1)
        }
        return ''
    }
    return str
}

export default capitalize