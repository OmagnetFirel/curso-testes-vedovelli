// * posso passar uma função para o map
const keyValueToString = ([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) throw new Error('Objects are not allowed as values');
    return `${key}=${value}`
}

// * formas enxutas de retornar arrow functions !dahora
module.exports.querystring = (obj) => Object.entries(obj)
    .map(keyValueToString)
    .join('&');