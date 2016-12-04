function isTriangle(triangle) {
  return triangle[0] + triangle[1] > triangle[2] &&
         triangle[1] + triangle[2] > triangle[0] &&
         triangle[2] + triangle[0] > triangle[1]
}

module.exports = { isTriangle }
