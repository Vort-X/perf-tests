package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import baseConfig.BaseSimulation

class AtOnceGetAllProducts extends BaseSimulation{
  def GetAllProducts() =
    exec(
      http("Get all products")
        .get("/products")
          .check(status.is(200))
    )

  val scn = scenario("Getting all products scenario")
    .exec(GetAllProducts())

  setUp(scn.inject(
    atOnceUsers(15))
    .protocols(httpConf))
}
