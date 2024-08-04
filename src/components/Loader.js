import spinner from './loading.gif'


const Loader = () => {
  return (
    <div className='loader'>   
        <img src = {spinner} alt = 'Loading' />
        <h1>Fetching Fires</h1>
      
    </div>
  )
}

export default Loader
