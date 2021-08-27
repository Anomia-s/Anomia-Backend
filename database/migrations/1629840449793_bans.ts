import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bans extends BaseSchema {
  protected tableName = 'bans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      
      table.increments('id');
      table.integer('userId');
      table.integer('banType') // 1 = Warn, 2 = Ban (temp), 3=term
      table.integer('lenght')
      table.integer('socialCredit').defaultTo(100);
      table.string('reason');
      table.integer('adminId');
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
