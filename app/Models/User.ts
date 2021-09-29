import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column({ columnName: 'username' })
  public username: string

  @column({ columnName: 'email' })
  public email: string

  @column({ columnName: 'password', serializeAs: null })
  public password: string

  @column({ columnName: 'image' })
  public image: string

  @column({ columnName: 'susCoins' })
  public susCoins: number

  @column({ columnName: 'baka$' })
  public baka$: number

  @column({ columnName: 'socialCredit' })
  public socialCredit: number

  @column({ columnName: 'nextReward' })
  public nextReward: number

  @column({ columnName: 'membership' })
  public membership: number

  @column({ columnName: 'isBanned' })
  public isBanned: number

  @column({ columnName: 'isAdmin' })
  public isAdmin: number

  @column({ columnName: 'floodCheck' })
  public floodCheck: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
