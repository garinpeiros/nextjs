import Link from "next/link"
import Image from "next/image"
const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/user/register">
              <a>登録</a>
            </Link>
          </li>
          <li>
            <Link href="/user/login">
              <a>ログイン</a>
            </Link>
          </li>
          <li>
            <Link href="/user/create">
              <a>アイテム作成</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
