import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Admins extends BaseSchema {
  protected tableName = 'admins'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('userId')
      table.integer('accessLevel')
       // 1 = Normal moderator. Can ban and Can warn 
       // 2 = Asset creator... uploads assets. Really cool kenau
       // 3 = Administrator. Can ban, can warn and can access people's records.
       // 4 = Shiggy. All above, run SQL, economical inflation, change the website. All shit
      
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
