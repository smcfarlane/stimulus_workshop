class CreateTodos < ActiveRecord::Migration[6.0]
  def change
    create_table :todos do |t|
      t.text :text, null: false
      t.references :list, null: false, foreign_key: true
      t.boolean :completed, default: false, null: false

      t.timestamps
    end
  end
end
