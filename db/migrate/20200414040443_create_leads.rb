class CreateLeads < ActiveRecord::Migration[6.0]
  def change
    create_table :leads do |t|
      t.string :name
      t.string :phone
      t.string :email
      t.string :company
      t.integer :zip
      t.text :message

      t.timestamps
    end
  end
end
