# Sitmulus JS Workshop

## Setup

### Requirements:

- Ruby Version: 2.6.6
- Database: sqlite

```sh
git clone git@github.com:smcfarlane/stimulus_workshop.git

cd stimulus_workshop

bundle
yarn

bundle exec rails db:create db:migrate
bundle exec rails s
```

Then, navigate to http://localhost:3000/.

## Branches

- main: contains a full example including stimulus controllers and jest tests
- build_controllers: contains controllers, models, views and jest tests but no stimulus code.  Use this branch to try writing the controllers yourself
