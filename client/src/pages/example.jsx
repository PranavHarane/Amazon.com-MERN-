import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

const example = () => {

    const getdata = async (req , res) => {
        try{
            const response = await axios.post('/index/ai' , {
                text : "best mobiles for gaming"
            })

            console.log(response)
            const data = JSON.parse(response.data.candidates[0].content.parts[0].text)
            console.log(data)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        getdata()
    } , [])

  return (
    <div>
        <h1>Hiiiiiii</h1>
    </div>
  )
}

export default example
