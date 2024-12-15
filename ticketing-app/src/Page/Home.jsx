
import React,{useState} from 'react'
import EventIntro from '../componets/EventIntro'
import RegistrationForm from '../componets/RegistrationForm'


const Home = () => {

    const [currentPage, setCurrentPage] = (useState(1))

    const goToNext=()=>{
        setCurrentPage(currentPage + 1)
    }


  return (
    <div>
        {currentPage === 1 ? (
            <EventIntro OnNext={goToNext}/>
        ):(
         <RegistrationForm/>   
        )}
    </div>
  )
}

export default Home