// var greet = require('./greet')

describe('greet a person in different languages', function(){

  it('should greet Joe or Bob in english', function(){
    assert.equal(greet('Joe', 'english'), 'Hello, Joe');
    assert.equal(greet('Bob', 'english'), 'Hello, Bob');
  });

  it('should greet Joe or Bob in Afrikaans', function(){
    assert.equal(greet('Joe', 'Afrikaans'), 'Goeie Dag, Joe');
    assert.equal(greet('Bob', 'Afrikaans'), 'Goeie Dag, Bob');
  });

  it('should greet Joe or Bob in Columbian', function(){
    assert.equal(greet('Joe', 'Columbian'), 'Buenos Dias, Joe');
    assert.equal(greet('Bob', 'Columbian'), 'Buenos Dias, Bob');
  });


});
