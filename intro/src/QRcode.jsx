// import { func } from "prop-types";
import {useState} from "react";
export const QRcode=()=>{
    const [img,setImg]= useState("")
    const [loading,setLoading]=useState(false)
    const [QrData,setQrData]=useState("")
    const [size,setSize]=useState()

     async function Generate(){
        setLoading(true)
        try{
            const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}X${size}&data=${encodeURIComponent(QrData)}`
            setImg(url)
        }catch(errro){
            console.error("QR Generate Error"+errro)
        }
        finally{
            setLoading(false)
        }
    }
    function DownloadBtn(){
        fetch(img)
        .then((response)=>response.blob())
        .then((blob)=>{
            const link =document.createElement('a')
            link.href=URL.createObjectURL(blob);
            link.download="qrcode.png";
            document.body.appendChild(link);
            link.click()
            document.body.removeChild(link);
        })

    }

    return(
    <div className="container">
        <h1>QR CODE GENERATOR</h1>
        {loading &&  <h5>Please wait...</h5>}
        {img && <img src={img} className="qr-image" alt="QrCodeImage" />}
        <div id="label">
            <label htmlFor="input-data" className="data">Data for QR code:</label>
            <input type="text" value={QrData} onChange={(e)=>setQrData(e.target.value)} placeholder="Enter data for QR code"  id="input-data"/>
            <label htmlFor="image-size" className="data">image size (e.g.150):</label>
            <input type="text" value={size} onChange={(e)=>setSize(e.target.value)} placeholder="Enter image size" id="image-size"/>
            <button  className="GenerateBtn" disabled={loading} onClick={Generate} >Generate QR Code</button>
            <button className="DownloadBtn" onClick={DownloadBtn}>Download QR Code</button>
        </div>
        <p>Designed By Sanjai </p>
    </div>
    )
}