import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Anime extends BaseSchema {
  protected tableName = 'anime'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('status') // 1 = Live rn 2 = dead
      table.integer('series') // makes a reference to the series of animes related tot his one etc
      table.string('name')
      table.string('description')
      table.integer('likeCount')
      table.integer('episodeCount')

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
