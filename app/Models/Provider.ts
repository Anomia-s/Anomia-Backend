import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Episode from 'App/Models/Episode'

export default class Provider extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public providerName: string

  @column()
  public providerImg: string

  @column()
  public providerUrl: string

  @hasMany(() => Episode, {
    foreignKey: 'providerID',
  })
  public episodes: HasMany<typeof Episode>

  @column()
  public providerRep: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
