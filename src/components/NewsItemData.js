
const url = 'https://news-reader.stagnationlab.dev/graphql';
const query = `
{
  newsList(skip:0,limit:50){
    rows:rows{
      id
      img
      content
      title
      url
      comments:comments{
      	id
        email
        content
        createdDate
    }
    }
  }
  }
`;

const opts = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query })
};



export default {
  getData: () => fetch(url, opts)
  .then(res => res.json())
  .then(res => res.data.newsList.rows)
  .catch(console.error)
}