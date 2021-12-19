package simulations

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

import baseConfig.BaseSimulation

class RampGetSingleProductSimulation extends BaseSimulation{
  val productsCount = 30
  
  def GetSingleProduct(max: Int) =
    exec(
      http("Get single product request")
        .get(session => s"/products/${randInt(max)}")
        . check(status.is(200))
    )

  val scn = scenario("Get single product scenario")
    .exec(GetSingleProduct(productsCount))

  setUp(scn.inject(
    rampUsers(20).during(10))
    .protocols(httpConf))
}
