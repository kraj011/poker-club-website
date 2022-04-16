import * as React from "react"
const Sponsor = ({image, imageSize}) => {
    return(
        <div style={{width: '100%', height: '100%', display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: 'center', alignItems: 'center'}}>
            <img src={image} style={{height: imageSize, width: imageSize, padding: "3%"}} />
            <div style={{textAlign: 'center', flex: "1 0 100%"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non massa a nibh accumsan sagittis a et nunc. Etiam a pharetra nibh, eu tempor urna. Curabitur volutpat nunc eu volutpat egestas. Aenean quis luctus elit. Quisque finibus dui ipsum, sed aliquam justo pellentesque a. Nunc pretium mauris orci. Ut mollis.
            </div>
        </div>
    )
}

export default Sponsor;