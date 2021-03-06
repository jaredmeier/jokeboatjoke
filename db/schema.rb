# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_14_201027) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "episodes", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "last_joke_added"
    t.index ["last_joke_added"], name: "index_episodes_on_last_joke_added"
    t.index ["name"], name: "index_episodes_on_name", unique: true
  end

  create_table "jokes", force: :cascade do |t|
    t.string "setup", null: false
    t.string "punchline", null: false
    t.integer "episode_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "categories"
    t.index ["episode_id"], name: "index_jokes_on_episode_id"
  end

end
