
Bench.delete_all

Bench.create!(
  description: "alamo square, many dogs",
  lat: 37.775769,
  long: -122.434960,
)

Bench.create!(
  description: "UN plaza, food truck access",
  lat: 37.779760,
  long: -122.413820,
)

Bench.create!(
  description: "Ocean Beach, gnarly breh",
  lat: 37.769996,
  long: -122.511281,
)

User.create!(
  username: "guest",
  password: "password"
)
