function TennisGame() {
  const scoreSrting = ['Love' , 'Fifteen' , 'Thirty','Forthy']
  this.playerAScore = 0

  this.reset = () =>{
    this.playerAScore = 0
  }

  this.echo = () => {
    return `${scoreSrting[this.playerAScore]} - Love`
  }

  this.playerAGetScore = () => {
    this.playerAScore++
  }
}

test('Echo "Love - Love" when game start',()=>{
  //Arrange
  let app = new TennisGame()

  //Act
  app.reset()
  let result = app.echo()

  // Assert
  expect(result).toBe('Love - Love');



})
