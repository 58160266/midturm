const hello = require('./hello')

test('hello',()=>{
  //Arrange
  let name = 'Yo'

  //Act
  let result = hello(name)

  //Assert
  expect(result).toBe('Hello Yo')

})
