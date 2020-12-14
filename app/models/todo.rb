# frozen_string_literal: true

class Todo < ApplicationRecord
  belongs_to :list

  validates :text, presence: true
end
