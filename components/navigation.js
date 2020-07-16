import Link from "next/link";

const Navigation = () => {
  return (
    <div>
      <nav>
        <Link href="/">
          <a>
            <img src="../static/log.svg" alt="" />
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/">
              <a>~/repos</a>
            </Link>
          </li>

          <li>
            <Link href="/about">
              <a>~/about</a>
            </Link>
          </li>
          <li>
            <Link href="/themes">
              <a>~/themes</a>
            </Link>
          </li>
        </ul>
      </nav>

      <style jsx>
        {`
          nav {
            padding: 0px 50px;
            widt: 100%;
            margin-right: 100px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          nav li {
            display: inline-block;
            margin-right: 25px;
          }

          nav img {
            width: 54px;
            margin-left:100px;
          }

          nav a {
            text-decoration: none;
          }
        `}
      </style>
    </div>
  );
};

export default Navigation;
