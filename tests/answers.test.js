const supertest = require('supertest')
const app = require('../app')

jest.mock('https', () => {
  const EventEmitter = require('events')
  const answersJSON = require('./fixtures/answers.json')

  return {
    get(url, callback) {
      const event = new EventEmitter()

      // este callback configurará los eventos a escuchar
      callback(event)
      
      // activa el callback configurado para el evento "data"
      event.emit("data", answersJSON)

       // activa el callback configurado para el evento "end"
      event.emit("end")
    }
  }
})

describe("/answers Endpoint", () => {

  it("GET /answers", async () => {

    const response = await supertest(app)
      .get('/answers')
    
    expect(response.status).toBe(200)
    expect(response.body).toEqual()
  })

})