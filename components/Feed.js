import Article from './Article';
import fetch from 'isomorphic-unfetch';

const Feed = props => {
  return (
    <div
      style={{
        display: 'inline',
        width: '40%',
        margin: 'auto'
      }}
    >
      {props.articles.map(article => {
        return <Article title={article.title} url={article.url} description={article.description} />;
      })}
    </div>
  );
};

export default Feed;
