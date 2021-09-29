import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ForumUpvote from 'App/Models/ForumUpvote'

export default class ForumThread extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userID: number

  @column()
  public threadTitle: string

  @column()
  public threadDescription: string

  @column()
  public editHistory: number

  @hasMany(() => ForumUpvote, {
    foreignKey: 'threadID',
  })
  public upvotesCount: HasMany<typeof ForumUpvote>
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
