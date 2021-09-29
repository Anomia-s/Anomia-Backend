import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class EditHistories extends BaseSchema {
  protected tableName = 'edit_histories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('forumThread')
      table.string('oldTitle')
      table.string('oldDescription')
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
