import { Link } from 'react-router-dom'

const Prod = ({ id }) => {
  return (
    <>
      <p>Prod nro: {id}</p>
      <Link to='/' >Home</Link>
    </>
  )
}

export default Prod