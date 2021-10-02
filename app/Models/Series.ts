import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Anime from 'App/Models/Anime'
import SeriesUpvote from 'App/Models/SeriesUpvote'
import Episode from 'App/Models/Episode'

export default class Series extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public seriesName: string

  @column()
  public animeID: number

  @column()
  public seriesDescription: string

  @column()
  public seriesThumbnail: string

  @hasMany(() => Episode)
  public episodes: HasMany<typeof Episode>

  @hasMany(() => SeriesUpvote)
  public seriesUpvotes: HasMany<typeof SeriesUpvote>

  @belongsTo(() => Anime, {
    foreignKey: 'animeID',
  })
  public anime: BelongsTo<typeof Anime>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
