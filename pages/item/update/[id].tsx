import { useState } from "react"
import useAuth from "../../../utils/useAuth"
import { ReadSingleDataType } from "../../../utils/types"
import type { NextPage, GetServerSideProps} from "next"


const UpdateItem: NextPage<ReadSingleDataType> = (props) => {
  const [title, setTitle] = useState(props.singleItem.title)
  const [price, setPrice] = useState(props.singleItem.price)
  const [image, setImage] = useState(props.singleItem.image)
  const [description, setDescription] = useState(props.singleItem.description)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //追加
    try {
      const response = await fetch(
        `http://localhost:3000/api/item/update/${props.singleItem._id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            title: title,
            price: price,
            image: image,
            description: description,
          }),
        }
      )
      const jsonData = await response.json()
      alert(jsonData.message)
    } catch (err) {
      await alert(err)
      await alert("アイテム編集失敗2")
    }
  }
  const loginUser = useAuth()
  if (loginUser == props.singleItem.email) {
    return (
      <div>
        <h1>アイテム更新</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            name="title"
            placeholder="アイテム名"
            required
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="price"
            placeholder="価格"
            required
          />
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            name="image"
            placeholder="画像"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name="description"
            rows={15}
            placeholder="商品説明"
            required
          />
          <button>編集</button>
        </form>
      </div>
    )
  } else {
    return <h1>権限がありません</h1>
  }
}

export default UpdateItem

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `http://localhost:3000/api/item/${context.query.id}`
  )
  const singleItem = await response.json()

  return {
    props: singleItem,
  }
}
