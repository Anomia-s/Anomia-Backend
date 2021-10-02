import { DateTime } from 'luxon'
import {BaseModel, belongsTo, column} from '@ioc:Adonis/Lucid/Orm'
import ForumThread from "App/Models/ForumThread";

export default class Reply extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(()=> ForumThread)
  public forumThread: number

  @column()
  public reply: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
