export function ensureStartWith(stringToCheck, startsWith) {
    return stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`
}

export function createUrl(pathName, params) {
    
    const paramsString = params.toString()
    const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

    return `${pathName}${queryString}`
}