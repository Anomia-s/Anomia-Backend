import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ReplyHistory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public forumThreadID: number

  @column()
  public reply: string

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  @column()
  userID: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
