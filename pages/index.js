import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => {

	return (
		<div>
    <p>Hello Next.js</p>
    <Link href="/article"><a href="/article">Article</a></Link>
{props.articles.map((article)=>{
	return <p>{JSON.stringify(article)}</p>
})}
  </div>
		

	)
}

Index.getInitialProps = async function() {
  var url = 'https://newsapi.org/v2/top-headlines?' + 'country=ie&' + 'apiKey=003c00c6550b481d8825ef6012ffb38f';
  // var req = new Request(url);
  const res = await fetch(url)
  const data = await res.json()

  console.log(`Show data fetched. Count: ${JSON.stringify(data.articles)}`)

  return {
    articles: data.articles
  }
}

export default Index