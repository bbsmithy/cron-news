import Link from "next/link";
import Feed from "../components/Feed";

const Index = props => {
  return (
    <div>
      <div id="title">
        <h2 style={{ fontWeight: 900 }}>{props.source} Top Stories</h2>
      </div>
      <div id="nav">
        <ul>
          <li>
            <Link href="/?id=hacker-news">Hacker News</Link>
          </li>
          <li>
            <Link href="/?id=bloomberg">Bloomberg</Link>
          </li>
          <li>
            <Link href="/?id=business-insider">Business Insider</Link>
          </li>
          <li>
            <Link href="/?id=the-irish-times">The Irish Times</Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          width: "100%",
          margin: "auto"
        }}
      >
        <Feed articles={props.articles} />
      </div>

      <style jsx>{`
        #title {
          font-family: "Lucida Console", Monaco, monospace;
          margin: auto;
          width: 40%;
          display: "inline-block";
        }
        #nav {
          position: fixed;
          top: 0px;
          lef: 0px;
          padding: 20px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
        }
        ul {
          list-style-type: none;
          display: inline;
        }
        li {
          text-decoration: none;
          margin-bottom: 15px;
          font-size: 25px;
        }
        a {
          text-decoration: none;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

Index.getInitialProps = async function(context) {
  const { id } = context.query;

  const url = id
    ? `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=API_KEY`
    : `https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=API_KEY`;

  const res = await fetch(url);
  const data = await res.json();

  if (data && data.articles) {
    return {
      articles: data.articles,
      source: data.articles[0].source.name
    };
  } else {
    console.warn("HAVE YOU ADDED YOUR OWN API KEY");
  }
};

export default Index;
