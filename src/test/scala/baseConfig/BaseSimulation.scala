package baseConfig

import io.gatling.core.Predef.*
import io.gatling.http.Predef.*

class BaseSimulation extends Simulation {
    val httpConf = http
      .baseUrl("https://fakestoreapi.com")
        .header("Accept", "application/json")

    def randInt(max : Int): Int =
        scala.util.Random.between(1, max)
}
