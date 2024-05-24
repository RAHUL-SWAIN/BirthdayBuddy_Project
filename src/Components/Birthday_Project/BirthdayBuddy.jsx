import React, { useState } from 'react';
import './BirthdayBuddy.css';

const BirthdayFriends = [
    {
        ImageUrl:"https://1847884116.rsc.cdn77.org/malayalam/gallery/actress/anupama206/anupama1832024_042.jpg",
        name:"Anupama Parameshwaran",
        age:"28 Years"
    },
    {
        ImageUrl:"https://1847884116.rsc.cdn77.org/telugu/gallery/actress/vaishnavichaitanya/poster.jpg",
        name:"Vaishnavi Chaitanya",
        age:"29 Years"
    },
    {
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWltQXV974iHaOIWvAYHtGQfVMcw9WbObqylustjTjUnbzQf1ugUN8JBBPLg&s",
        name:"Ram Pothinena",
        age:"29 Years"
    },
    {
        ImageUrl:"https://1847884116.rsc.cdn77.org/tamil/gallery/actress/anjaligupta1572014/poster.jpg",
        name:"Anjali Gupta",
        age:"34 Years"
    },
    {
        ImageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8uBb9SEBdOpz3WeXDhAXh31svJ3J0NAjpA&s",
        name:"Tiger Shorff",
        age:"29 Years"
    },
    {
        ImageUrl:"https://1847884116.rsc.cdn77.org/telugu/gallery/actress/shraddadas/shraddhadaposter3052024.jpg",
        name:"Shradda Das",        
        age:"36Years"
    },
]

function BirthdayBuddy() {
    const [list , setList ] = useState(BirthdayFriends)
  return (
    <div className='card'>
        <h1><u><i>{list.length} BirthDay Buddy Name</i></u></h1>
        <section>
            {
                list.map((frnd , i) => {
                    const {ImageUrl , name , age } = frnd
                    return(
                        <article key={i} className='innercard' style={{display:"flex" ,alignItems:"center",marginBottom:"20px",gap:"20px"}}>
                            <img style={{height:"100px",width:"100px",borderRadius:"50%"}} height={100} width={100} src={ImageUrl} alt="Photos" />
                            <div>
                                <h3><i>{name}</i></h3>
                                <h5><i>{age}</i></h5>
                            </div>
                           
                        </article>
                        

                    )
                })  
            }
             <button className='btn'  onClick={() =>{setList([])}}>Clear All</button>
            
        </section>

    </div>
  )
}

export default BirthdayBuddy;