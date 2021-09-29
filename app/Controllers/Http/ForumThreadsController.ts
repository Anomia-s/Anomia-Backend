import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ForumValidator from 'App/Validators/ForumValidator'
import ForumThread from 'App/Models/ForumThread'
import ForumUpvote from 'App/Models/ForumUpvote'

export default class ForumThreadsController {
  public async index({}: HttpContextContract) {}

  public async create({ auth, request }: HttpContextContract) {
    const payload = request.body()
    const user = auth.user?.id
    const body = await request.validate(ForumValidator)



    const createPayload = await ForumThread.create({
      threadTitle: body.title,
      threadDescription: body.body,
      userID: user,
    })

  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
