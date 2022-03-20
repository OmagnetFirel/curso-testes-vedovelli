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

    it('should create a valid query string even when a array is provided', () => {
        //* typeof de um [](array) é um object!!! 
        const obj = {
            name: 'Victor',
            abilities: ["JavaScript", "NodeJS", "ReactJS", "TDD"]
        }
        expect(querystring(obj)).toBe(
            'name=Victor&abilities=JavaScript,NodeJS,ReactJS,TDD'
        )
    })

    it('should throw an error when a object is passed as a value', () => {
        // * typeof de um objeto é object!!!
        const obj = {
            name: 'Victor',
            abilities: {
                first: 'JS',
                second: 'NodeJS'
            }
        }
        expect(() => querystring(obj)).toThrowError();
    })
});