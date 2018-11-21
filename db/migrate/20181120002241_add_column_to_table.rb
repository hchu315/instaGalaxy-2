class AddColumnToTable < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :post_id, :integer
    add_index :comments, :post_id
    change_column_null :comments, :post_id, false
  end
end
