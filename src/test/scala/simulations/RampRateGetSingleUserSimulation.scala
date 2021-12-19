package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import baseConfig.BaseSimulation

class RampRateGetSingleUserSimulation extends BaseSimulation {
  val usersCount = 20

  def GetSingleUser(id : Int) =
    exec(
      http("Get single user request")
        .get(session => s"/users/${id}")
          .check(status.is(200))
    )

  val scn = scenario("Get a single user scenario")
    .exec(GetSingleUser(randInt(usersCount)))

  setUp(scn.inject(
    rampUsersPerSec(20).to(50).during(10))
    .protocols(httpConf))
}



