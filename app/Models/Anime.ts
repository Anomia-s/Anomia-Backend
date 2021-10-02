import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Series from 'App/Models/Series'

export default class Anime extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: boolean

  @hasMany(() => Series)
  public series: HasMany<typeof Series> // Seasons etc

  @column()
  public name: string

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
