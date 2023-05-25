class List < ApplicationRecord

  validates :lname, :desc, presence: true
end
