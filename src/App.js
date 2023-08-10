import logo from './logo.svg';
import './App.css'
import { people } from './data';
import { useEffect, useState } from 'react';
function App() {
  const [peoples,setPeople] = useState(people)
  const [slide,setSlide] = useState(0)
  const [buttonChecker,setButtonChecker] = useState(true)

  useEffect(()=>{
      
    const slider = setTimeout(()=>{
      
      if(slide>=peoples.length-1){
        setSlide(0)
      }else{
        setSlide(prev=>prev+1)
      }
    },5000)
    return()=>{
      clearTimeout(slider)
    }
  //console.log(slide)
  },[slide]) 
  
  console.log(slide)

  
    
  return (
    <main className=" h-screen flex items-center justify-center md:w-">
      <button  onClick={()=>{slide==0?setSlide(peoples.length-1):setSlide(slide-1);setButtonChecker(true);console.log(slide)}}>
        <i class="fa-solid fa-angle-left"></i>
      </button>
      <section className='slider overflow-hidden w-3/6'>
        {
          peoples.map((item)=>{
            const {image,id,name,title,quote}=item
            let num1=slide*-1

            let styles ={
              transform:`translateX(${num1*100}%)`
            }
            
            return (
              <article key={id} className={`flex flex-col justify-center items-center w- `} style={styles}>
                <img className='rounded-full w-52 h-52' src={image} alt=''/>
                <h1 className=' text-2xl text-purple-500 my-2'>{name}</h1>
                <p className='my-2'>{title}</p>
                <p className='text-center text-slate-500'>{quote}</p>
                <i class="fa-solid fa-quote-right text-6xl text-purple-500 my-3"></i>
              </article>            
              )
          })
        }
        
      </section>
      <button onClick={()=>{slide==peoples.length-1?setSlide(0):setSlide(slide+1);setButtonChecker(false);console.log(slide)}}>
        <i class="fa-solid fa-angle-right"></i>
      </button>
    </main>
  );
}

export default App;
