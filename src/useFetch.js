import {useState , useEffect} from 'react'

const useFetch = (url)=>{

  //abort controller to prevent statechanges on unmounted components
  const abortCont = new AbortController();

    const [data, setData] = useState([])
    const [isPending , setPending] = useState(true)
    const[error , setError] = useState(null)


    //on change or render of the url given, fetch data from url and return states
    useEffect(()=>{
        fetch(url, {signal : abortCont.signal})
        .then(
          (res)=>{
    
          //res error
          if(!res.ok){
            setError('could not fetch data')
            setPending(false)
    
            throw Error('could not fetch data')
          }
    
    
            return res.json()
          }
        )
        .then(
          (data)=>{
            setData(data)
            setPending(false)
          }
        )
        .catch(
          (e)=>{

            if(e.name === 'AbortError'){
              console.log('fetch aborted')
            }

            setError(e.message)
            console.log(e.message)
          }
        )
    
        return () => abortCont.abort()
      })

      return{
          data,
          isPending,
          error
      }
}

export default useFetch