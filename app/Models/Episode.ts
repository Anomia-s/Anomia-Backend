import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Provider from 'App/Models/Provider'
import Anime from 'App/Models/Anime'

export default class Episode extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @belongsTo(() => Anime)
  public anime: BelongsTo<typeof Anime>

  @column()
  public episodeNumber: number

  @belongsTo(() => Provider, {
    foreignKey: 'id',
  })
  public provider: BelongsTo<typeof Provider>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
