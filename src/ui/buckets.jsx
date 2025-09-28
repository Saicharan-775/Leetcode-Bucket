import React from 'react'
import ProgressBar from '../ui/Progressbar'
import Button from '../ui/button'
import {ArrowRight} from 'lucide-react'
const buckets = ({borderColor,bgColor,iconColor,icon:Icon,name,description,value}) => {
  return (
    <div>
        <div className='bg-[#181a22] mt-5 border-2   p-4 m-1 rounded-xl w-[460px] h-60 '
        style={{borderColor:borderColor}}
        >
                
                <div className='flex justify-between mt-4'>
                    <div className='flex gap-2 '>
                        <div className=' rounded-xl p-2 w-12 h-12'style={{backgroundColor:bgColor,color:iconColor}} >
                           {Icon && <Icon size={28}   />}
                        </div>
                        <div className='items-center mr-2'>
                         <h1 className='text-xl font-bold'>{name}</h1>
                         <p>{description}</p>
                          </div>

                        </div>   
                   
                      
                     <div className='flex items-center'>
                         <p className='bg-[#1c2121] rounded-4xl px-2 py-1 text-[14px] border border-[#3e4146]'>24 problems</p>
                     </div>
                </div>


                <div className='mt-5'>
                    <div className=' flex justify-between'>
                        <h4>Progress</h4>
                        <div>
                                <h4>65%</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                        <ProgressBar value={value} max={100} color={bgColor}/>
                       </div>
                    </div>
                </div>
              <div>
        
                <div  className='flex justify-between mt-6 p-3 items-center '>
                    <p className='text-[#849295] '><span className='text-amber-400 font-bold'> 5 </span> due probems </p>
                    <div className='flex '>
                  
                          <button
                            className="inline-flex items-center gap-2 bg-[#0d1113] border border-[#3c3e41] text-black 
                                        font-medium px-4 py-2 rounded-xl shadow cursor-pointer 
                                        transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
                            style={{ backgroundColor: bgColor }}
                            >
                           Open Bucket
                            <ArrowRight color="black" />
                            </button>

                    </div>
                  
                </div>
              </div>
        </div>
    </div>
  )
}

export default buckets