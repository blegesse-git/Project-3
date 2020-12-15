import React, {useState} from 'react'

function Receipt() {

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")

    const uploadImage = async e => {
      const files = e.target.files
      const data = new FormData()
      data.append('file', files[0])
      data.append('upload_preset', 'EventPlanning')
      setLoading(true)

      const res = await fetch("https://api.cloudinary.com/v1_1/difqthyaz/image/upload", 
      {
          method: 'POST',
          body: data
      })

      const file = await res.json()
      console.log(file)
      setImage(file.secure_url)
      setLoading(false)
    }
    return (
        <div>
            <h2>Save Reciepts</h2>
                <input type="file" name="file" placeholder="Upload your reciepts" onChange={uploadImage}/>
                {
                    loading? (
                        <h3>Loading...</h3>
                    ):(
                        <img src={image} style={{width:'300px'}}/>
                    )
                }
        </div>
    )
    
}
export default Receipt