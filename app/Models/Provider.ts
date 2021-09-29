import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Provider extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public providerName: string

  @column()
  public providerImg: string

  @column()
  public providerUrl: string

  @column()
  public providerRep: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
