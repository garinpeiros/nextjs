import { useState } from "react"

const Register = () => {
  /*
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  */
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        "https://nextjs-jz9zzr36c-garinpeiros.vercel.app/api/user/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      )
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch (err) {
      alert("ユーザー登録失敗")
    }
  }
  return (
    <div>
      <h1>ユーザー登録</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={newUser.name}
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="名前"
          required
        />
        <input
          value={newUser.email}
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="メールアドレス"
          required
        />
        <input
          value={newUser.password}
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="パスワード"
          required
        />
        <button>登録</button>
      </form>
    </div>
  )
}
export default Register
