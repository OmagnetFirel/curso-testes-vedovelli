// * posso passar uma função para o map
const keyValueToString = ([key, value]) => {
    if (typeof value === 'object' && !Array.isArray(value)) throw new Error('Objects are not allowed as values');
    return `${key}=${value}`
}

// * formas enxutas de retornar arrow functions !dahora
module.exports.querystring = (obj) => Object.entries(obj)
    .map(keyValueToString)
    .join('&');


module.exports.parse = (queryString) => {
    // *metodo simples que eu fiz :D
    // const obj = {};
    // queryString.split('&').forEach(keyValue => {
    //     const [key, value] = keyValue.split('=');
    //     obj[key] = value;
    // });
    //return obj;

    // ! metodo do vedovelli D: 
    return Object.fromEntries(
        queryString.split('&').map(item => item.split('='))
    )

};