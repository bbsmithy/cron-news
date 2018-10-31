const Article = props => {
  return (
    <div className="card">
      <a href={props.url} style={{ textDecoration: 'none' }} target="blank">
        <div className="container">
          <h2 className="header">{props.title}</h2>
          <p style={{ marginBottom: 30 }}>{props.description}</p>
        </div>
      </a>
      <style jsx>{`
        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.3s;
          width: 40%;
          margin: 20px auto 20px auto;
          padding: 20px;
        }

        p {
          font-family: Arial, Helvetica, sans-serif;
        }

        h2 {
          font-family: 'Lucida Console', Monaco, monospace;
        }

        .card:hover {
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        }

        .container {
          padding: 2px 16px;
        }
      `}</style>
    </div>
  );
};

export default Article;
