const {GoogleGenAI} = require("@google/genai");
const { model } = require("mongoose");

const ai = new GoogleGenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const generateProducts = async (searchValue) => {
    try{
        const prompt = `
        Extract only products from Apple , Samsung , Oneplus , Oppo brand.
        Generate at least 3 matching products.
        always return only valid JSON in following schema.
        Rules:
        - Fill brandName with the all actual brands.
        - Fill description with the all product names and all short descriptions.
        - Do not return empty strings.
        - If no products are found, return [].
        - Return only JSON.
        
        Example schema :[
            {
                "brandName" : "Samsung Apple Oneplus" ,
                "description" : "Galaxy S25 Ultra - High-performance gaming smartphone. "
            } 
        ]     
                
        text : ${searchValue}
        `
        const response = await ai.models.generateContent({
        model: "gemini-3.5-flash" ,
        contents: prompt
        })
    
        console.log("response from ai is" , response)
        const data = JSON.parse(response.candidates[0].content.parts[0].text)
        console.log("data after parsing of response from ai" , data)
        return data   
    }catch(err){
        console.log(JSON.parse(err.message).error.message)
        throw new Error("Failed to get Gemini response")
    }
}

module.exports = generateProducts