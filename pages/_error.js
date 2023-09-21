export default function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'}
    </p>
  )
}
 
export async function getServerSideProps({ req, res }) {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;

  return {
    props: {
      statusCode,
      data: res.data || null,
    }
  };
}