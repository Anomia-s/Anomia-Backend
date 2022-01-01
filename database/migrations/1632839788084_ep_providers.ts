import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EpProviders extends BaseSchema {
  protected tableName = 'ep_providers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('episodeID')
      table.integer('providerID')
      table.integer('url')
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
