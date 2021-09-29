import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class EditHistory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public forumThread: number

  @column()
  public oldTitle: string

  @column()
  public oldDescription: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
