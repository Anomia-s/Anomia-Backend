import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Providers extends BaseSchema {
  protected tableName = 'providers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('providerName')
      table.string('providerImg')
      table.string('providerUrl')
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
