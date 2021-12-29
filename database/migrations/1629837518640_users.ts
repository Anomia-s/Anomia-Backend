import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username').notNullable()
      table.string('email')
      table.string('password').notNullable()
      table.string('image').defaultTo('https://share.wildbook.me/Fhq3qRFKHzxE0jM7.png')
      table.integer('susCoins').defaultTo(100)
      table.integer('baka$').defaultTo(0)
      table.integer('socialCredit').defaultTo(1000)
      table.integer('nextReward').defaultTo(86400)
      table.integer('membership').defaultTo(1) // 1 = Normal 2 = Sussy Little Baka 3 = Epic Baka
      table.integer('isBanned').defaultTo(0)
      table.integer('isAdmin').defaultTo(0)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
