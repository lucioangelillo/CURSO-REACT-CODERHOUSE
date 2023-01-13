import { Circles } from 'react-loader-spinner'

const Loader = ({ loading = false }) => {
  return (
    loading &&
    <Circles
      height="80"
      width="80"
      color="#808080"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />)
}




export default Loader