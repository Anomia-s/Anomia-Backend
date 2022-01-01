import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Ban extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ columnName: 'userId' })
  public userId: number

  @column({ columnName: 'banType' })
  public banType: number

  @column({ columnName: 'lenght' })
  public lenght: number

  @column({ columnName: 'socialCredit' })
  public socialCredit: number

  @column()
  public reason: string

  @column()
  public adminId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
