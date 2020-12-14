# frozen_string_literal: true

class List < ApplicationRecord
  has_many :todos

  validates :name, presence: true

  before_save do
    self.order = next_order_index if order.blank?
  end

  def next_order_index
    max_order = List.maximum(:order) || 0
    max_order + 1
  end
end
