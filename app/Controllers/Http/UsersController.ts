import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Ban from 'App/Models/Ban'
import RegisterValidator from '../../Validators/RegisterValidator'

export default class UsersController {
  // TODO Switch to policies

  public async ban({ request }: HttpContextContract) {
    const body = request.body()
    const [userId, reason, banType, lenght, socialCredit, admin] = [
      body.userId,
      body.reason,
      body.banType,
      body.lenght,
      body.socialCredit,
      body.admin,
    ]

    try {
      const user = await User.findOrFail(userId)
      user.isBanned = 1
      user.socialCredit = user.socialCredit - socialCredit
      await user.save()

      const banLog = new Ban()
      banLog.userId = userId
      banLog.banType = banType
      banLog.lenght = lenght
      banLog.socialCredit = socialCredit
      banLog.reason = reason
      banLog.adminId = admin
      await banLog.save()
    } catch (err) {
      return {
        error: true,
        message: 'There was an unexpected error!',
        errorMessage: err,
      }
    }

    return {
      error: false,
      message: `Succesfully banned user with id ${userId}.`,
    }
  }

  public async register({ request, auth, response }: HttpContextContract) {
    if (auth.isLoggedIn) {
      return response.forbidden("You're logged in already.")
    }
    const body = await request.validate(RegisterValidator)
    User.create({ ...body })
    return {
      message: 'Account succesfully generated.',
    }
  }

  /**
   * Controller to check the user status in the website..
   *
   * @returns Token
   */
  public async isLoggedIn({ auth }: HttpContextContract) {
    await auth.use('api')
    return auth.use('api').isAuthenticated
  }

  /**
   * Controller to log the user in.
   *
   * @returns Token
   */
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
        token: token,
      }
    } catch (error) {
      return {
        error: true,
        message: 'Authentication failed!',
      }
    }
  }
}
