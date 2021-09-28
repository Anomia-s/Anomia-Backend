import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Anime extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: number

  @column()
  public series: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public likeCount: number

  @column()
  public episodeCount: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
