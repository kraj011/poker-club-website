import * as React from "react"
//     <img src="./imc-logo.png" style="height: 50%; width: 50%" />
import Sponsor from "./Sponsor"

const SponsorsComponent = ({images, imageSize}) => {
    React.useEffect(() => {
        console.log(images)
    }, [])
    return(
        <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", alignContent: "space-around", width: "100%", height: "100%"}}>
           {images.map((image) => <Sponsor image={image} imageSize={imageSize} key={image} />)}
        </div>
    )
}

export default SponsorsComponent;