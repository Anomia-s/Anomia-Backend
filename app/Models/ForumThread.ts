import { DateTime } from 'luxon'
import { BaseModel, HasMany, BelongsTo, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ForumUpvote from 'App/Models/ForumUpvote'
import User from 'App/Models/User'
import EditHistory from 'App/Models/EditHistory'

export default class ForumThread extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => User, {
    foreignKey: 'userID',
  })
  public userID: BelongsTo<typeof User>

  @column()
  public threadTitle: string

  @column()
  public threadDescription: string

  @hasMany(() => EditHistory, {
    foreignKey: 'threadID',
  })
  public editHistory: HasMany<typeof EditHistory>

  @hasMany(() => ForumUpvote, {
    foreignKey: 'threadID',
  })
  public upvotes: HasMany<typeof ForumUpvote>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
