import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Episode extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public animeID: number

  @column()
  public episodeNumber: number

  @column()
  public providerID: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
