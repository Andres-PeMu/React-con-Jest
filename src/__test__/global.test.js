const text = 'Hola Mundo';
const fruists = ['mazana', 'melon', 'banana']

test('debe contener texto', () => {
    expect(text).toMatch(/Mundo/);
});

test('¿tenemos frutas?', () => {
    expect(fruists).toContain('melon');
});

test('Mayor que', () => {
    expect(10).toBeGreaterThan(9);
});

test('boolean', () => {
    expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""));
}

test('Probar un Callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    })
});

const reverseString2 = str => {
    return new Promise((resolve, reject) => {
        if (!str) {
            reject(Error('Error'));
        }
        resolve(str.split("").reverse().join(""));
    });
};

test('Promise', () => {
    return reverseString2('Hola')
        .then((str) => {
            expect(str).toBe('aloH');
        });
});

test('Probar async/wait', async () => {
    const str = await reverseString2('Hola');
    expect(str).toBe('aloH');
});

afterEach(()=>{console.log('despues de cada pruebas')});
afterAll(()=>{console.log('despues de todas las pruebas')});

beforeEach(()=>{console.log('antes de cada pruebas')});
beforeAll(()=>{console.log('antes de todas las pruebas')});