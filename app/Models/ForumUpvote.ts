import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import ForumThread from 'App/Models/ForumThread'
import EditHistory from 'App/Models/EditHistory'

export default class ForumUpvote extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public threadID: number

  @column()
  public userID: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(()=> EditHistory, {
    foreignKey: 'threadID'
  })
  public editHistories:

  @belongsTo(() => ForumThread, {
    foreignKey: 'threadID',
  })
  public thread: BelongsTo<typeof ForumThread>
}
