import Link from "next/link"
import Image from "next/image"
import Head from "next/head"

const ReadAllItems = (props) => {
  return (
    <div>
      <Head>
        <title>Next Market</title>
      </Head>
      {props.allItems.map((item) => (
        <Link href={`/item/${item._id}`} key={item._id}>
          <a>
            <div key={item._id}>
              <Image
                src={item.image}
                width="750px"
                height="500px"
                alt="item-image"
              />
              <h2>{item.price}</h2>
              <h2>{item.title}</h2>
              <p>{item.description.substring(0, 80)}</p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
export default ReadAllItems

export const getServerSideProps = async () => {
  const response = await fetch(
    "https://nextjs-jz9zzr36c-garinpeiros.vercel.app/api/item/readall"
  )
  const allItems = await response.json()
  return {
    props: allItems,
  }
}
