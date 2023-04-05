import jwt from "jsonwebtoken"

const secret_key = "nextmarket"

const auth = (handler) => {
  return async (req, res) => {
    if (req.method === "GET") {
      return handler(req, res)
    }

    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJpYXQiOjE2ODA2ODAxNzEsImV4cCI6MTY4MDc2Mjk3MX0.zvcsCy3k3Wjwhh-_jam_S8La9K70BCSfvvVzt7iM9IY"

    //await req.headers.authorization.split(" ")[1]

    if (!token) {
      return res.status(401).json({ message: "トークンがありません" })
    }

    try {
      const decoded = jwt.verify(token, secret_key)
      req.body.email = decoded.email
      return handler(req, res)
    } catch (err) {
      return res
        .status(401)
        .json({ message: "トークンが正しくないので、ログインしてください" }) // 追加
    }
  }
}

export default auth
