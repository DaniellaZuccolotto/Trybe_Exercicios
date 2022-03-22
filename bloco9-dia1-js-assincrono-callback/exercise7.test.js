const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando se todas as letras estão maiusculas', (done) => {
  uppercase('Daniella', result => {
    try {
      expect(result).toBe('DANIELLA');
      done();
    } catch (error) {
      done(error);
    }
  });
}); 