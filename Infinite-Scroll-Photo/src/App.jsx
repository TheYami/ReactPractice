import { useEffect, useState } from 'react'
import './App.css'
import Photo from './components/Photo'

function App() {

  const keys  = `sFmQEKWUag3GWG2JC-_Iux5g8PgSSooiX0-Ojcf9iUE`
  const [photos,setPhotos] = useState([])
  const [page,setPage] = useState(1)
  const [isLoading,setIsLoading] = useState(false)

  const fetchImg = async() =>{
    setIsLoading(true)
    try{
      const apiUrl = `https://api.unsplash.com/photos/?client_id=${keys}&page=${page}`
      const response =  await fetch(apiUrl)
      const data = await response.json()
      setPhotos((oldData)=>{
        return [...oldData,...data]
      })
    }catch(error){
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchImg()
  },[page])

  useEffect(()=>{
    const event = window.addEventListener('scroll',()=>{
      if(window.innerHeight+window.scrollY > document.body.offsetHeight-500 && !isLoading){
        setPage((oldPage)=>{
          return oldPage+1
        })
      }
    })
    return ()=>window.removeEventListener('scroll',event)
  },[])

  return (

    <main>
        <h1>Infinite Scroll Photo | Unsplash API</h1>
        <section className="photos">
            <div className="display-photo">
                {photos.map((data,index)=>{
                    return <Photo key={index} {...data}/>
                })}
            </div>
        </section>
    </main>
  )
}

export default App
