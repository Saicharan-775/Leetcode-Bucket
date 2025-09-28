import React from 'react'
import Button from '../ui/button'
import '../index.css'
import { User,Shuffle,BookOpen ,Plus,TrendingUp,Target,Zap,Clock,CircleCheckBig} from 'lucide-react';
import StatsCards from '../ui/StatCards'
import Bucket from '../ui/buckets'
import NormalBucket from '../pages/NormalBucket'
const statCards = [
  { title: "Total Problems", value: "100",icons:TrendingUp ,bgColor:"#192a37",iconColor:"#1ba6ed"},
  { title: "Strict Mode", value:"20",icons:Target ,bgColor:"#2e2723",iconColor:"#ff922b",description:"High-intensity revision"},
  { title: "Normal Mode", value: "125",icons:Zap ,bgColor:"#172d35",iconColor:"#03c4d3",description:"Regular practice schedule"},
  {title:"Avg Review Time",value:"18",icons:Clock,bgColor:"#2f2a21",iconColor:"#daad1e"},
  {title:"Success Rate",value:"87%",icons:CircleCheckBig ,bgColor:"#1a2d22",iconColor:"#31b931"},

];
const Dashboard = () => {
  return (
    <div className=' min-h-screen w-full bg-[#0d1113] text-white overflow-x-hidden '>
         <div className='pt-20 mx-5'> 
      <div className='flex justify-between'>
        <div className='max-w-6xl mx-auto px-6 mt-5 ml-0 '>
        <h1 className='font-medium text-4xl mb-2 -z-50 text-left '>Dashboard</h1>
        <p className='text-[#849295] text-left  '> Welcome Back Saicharan. You have 8 problems due for revision today</p>
        </div>
        <div className='flex gap-6 mt-10'>
          <Button icon={Plus} name="Add Problem" />
          <Button icon={Shuffle} name="Random Practice" />
          <Button icon={BookOpen} name="Study Resourses" />
      
        </div>
     
      </div>
      <div className="flex items-center gap-6 mt-5 ">
          {statCards.map((card,idx) => (
            <StatsCards key={idx} title={card.title}  value ={card.value} icons={card.icons} bgColor={card.bgColor} iconColor={card.iconColor}/>
          ))}
        </div>
        <div className='text-3xl justify-items-start mt-5 mb-1'>
           <h1>Your Buckets</h1>
        </div>
        
        <div className='flex justify-items-start'>
          <div className='flex gap-6'> 
                <Bucket 
    borderColor="#443025"
    bgColor="#fc6c22"
    iconColor="#fff"
    icon={statCards[1].icons}
      name={statCards[1].title}
      description={statCards[1].description}
       value={15}
  />

   <Bucket 
    borderColor="#124149"
    bgColor="#0cc4f3"
    iconColor="#fff"
    icon={statCards[2].icons}
    name={statCards[2].title}
     description={statCards[2].description}
     value={75}
  />
          </div>
                
        </div>
              
        <NormalBucket/>
    </div>
    </div>
    
  )
}

export default Dashboard