import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Episodes extends BaseSchema {
  protected tableName = 'episodes'

  public async up() {
    // Individual Episode served by a certain provider.
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('animeID')
      table.integer('episodeNumber')
      table.integer('providerID')

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
