import Link from "next/link"
import Image from "next/image"
import Head from "next/head"
import { ReadAllDataType } from "../utils/types"
import { GetServerSideProps, NextPage } from "next"

const ReadAllItems: NextPage<ReadAllDataType> = (props) => {
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

export const getServerSideProps: GetServerSideProps<ReadAllDataType> = async () => {
  const response = await fetch("http://localhost:3000/api/item/readall")
  const allItems = await response.json()
  return {
    props: allItems,
  }
}