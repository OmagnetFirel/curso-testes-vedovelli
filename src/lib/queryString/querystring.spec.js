const {
    querystring
} = require('./querystring');

describe('Object to query string', () => {
    it('should create a valid query string when a object is provided', () => {
        const obj = {
            name: 'Victor',
            surname: 'Araujo',
            proffesion: 'Software Developer'
        }

        expect(querystring(obj)).toBe(
            'name=Victor&surname=Araujo&proffesion=Software Developer'
        );
    });

});