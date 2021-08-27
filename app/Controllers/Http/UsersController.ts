import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public register({request}: HttpContextContract){
        const body = request.body()
        const [
            username, 
            email, 
            password, 
            passwordRep
        
        ] = [
            body.username || body['username'],
            body.email || body['email'],
            body.password || body['password'],
            body.passwordRep || body['passwordRep']
        ]

        if(password != passwordRep) return {
            error: true,
            message: 'Anon, the passwords dont match! '
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
