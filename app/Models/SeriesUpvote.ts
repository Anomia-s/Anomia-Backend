import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Series from 'App/Models/Series'

export default class SeriesUpvote extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userID: number

  @column()
  public seriesID: number

  @belongsTo(() => Series, {
    foreignKey: 'seriesID',
  })
  public series: BelongsTo<typeof Series>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
