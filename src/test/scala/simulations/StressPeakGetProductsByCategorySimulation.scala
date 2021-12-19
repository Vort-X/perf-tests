package simulations

import baseConfig.BaseSimulation
import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class StressPeakGetProductsByCategorySimulation extends BaseSimulation {
  val categories = Array("electronics", "jewelery", "men's clothing", "women's clothing")

  def GetProductsByCategory() =
    exec(
      http("Get products in a specific category request")
        .get(session => s"/products/category/${categories(randInt(categories.length) - 1)}")
          .check(status.is(200))
    )

  val scn = scenario("Get products in a specific category scenario")
    .exec(GetProductsByCategory())

  setUp(scn.inject(
    stressPeakUsers(50)  during 2)
    .protocols(httpConf))
}
