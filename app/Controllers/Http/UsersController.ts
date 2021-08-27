import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserValidator from 'App/Validators/UserValidator'

export default class UsersController {
    public async register({request, auth, response}: HttpContextContract){
      if (auth.isLoggedIn) {
        return response.forbidden("You're logged in already.")
      }
		    const body = await request.validate(UserValidator)
        await User.create(body)
        return {
          message: 'Account succesfully generated.'
        }
        
    }
    public async isLoggedIn({auth}: HttpContextContract){
        await auth.use('api')
        return auth.use('api').isAuthenticated
    }
  public async login({ request, auth }: HttpContextContract) {
    const body = request.body()

    const username = body['username'] || body.username
    if (!username) return { error: true, message: 'No username found.' }

    const password = body['password'] || body.password
    if (!password) return { error: true, message: 'No password found.' }

    try {
      const token = await auth.use('api').attempt(username, password)
      return { 
          error: false, 
          message: 'Logged in succesfully.', 
          token: token 
        }
    } catch (error) {
      return {
        error: true,
        message: 'Authentication failed!',
      }
    }
  }
}
