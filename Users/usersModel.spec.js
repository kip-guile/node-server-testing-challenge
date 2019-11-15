const Users = require('./usersModel')
const db = require('../data/db-config')

beforeEach(async () => {
   await db('users').truncate()
})
// beforeAll()
// afterAll()
// afterEach()

describe('Users model', () => {
  describe('insert function', () => {
    let users
    test('should insert a user', async () => {
      await Users.insert({ name: 'sam' })
      await Users.insert({ name: 'pippin' })

      users = await db('users')
      expect(users).toHaveLength(2)

      await Users.insert({ name: 'frodo' })

      users = await db('users')
      expect(users).toHaveLength(3)
    })
  })
  describe('delete function', () => {
      let users
      test('should delete a user', async () => {
        await Users.insert({ name: 'sam' })
        await Users.insert({ name: 'pippin' })

          await Users.remove(2)

          users = await db('users')
          expect(users).toHaveLength(1)
      })
  })
})