import { useState  } from 'react'
import { storage } from "../firebase";
import { TableHead } from './TableHead';


export const FileUpload = () => {
   
    //const [images, setImages] = useState([]);
    const [files, setFiles] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");
  
    /* const handleChange = (e) => {
      for (let i = 0; i < e.target.files.length; i++) {
        const newImage = e.target.files[i];
        newImage["id"] = Math.random();
        setImages((prevState) => [...prevState, newImage]);
      }
    }; */

    const handleChange = (event) => {
        setMessage("")
        const file = event.target.files[0]
        const storageRef = storage.ref(`documentos/${file.name}`)
        const task = storageRef.put(file)
        setFiles([ ...files,file])
        task.on('state_changed', (snapshot) => {
          let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
          setProgress(progress);
        }, (error) => {
          console.error(error.message)
          setMessage(`Ha ocurrido un error; ${error.message}`)
        }, async () => {
            // Upload complete
            console.log("File uploaded")
            //var storageRef = storage.ref("documentos");
            //var starsRef = storageRef.child(image.name);
            await storageRef.getDownloadURL().then((url) => {
                setMessage('Archivo Subido!!')
                setUrls([ ...urls,url ])
                setProgress(0);
            }).catch(function(error) {
                console.log("error ")
            });
        })
    }
  
    /* const handleUpload =  () => {
      
      images.map(image => {
        const uploadTask = storage.ref(`documentos/${image.name}`).put(image);
        //promises.push(uploadTask);
        uploadTask.on("state_changed",  (snapshot) => {
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
            setProgress(progress);
        },(error) => {
            setMessage(`Ha ocurrido un error; ${error.message}`)
        }, async () => {
            console.log("All images uploaded")
            var storageRef = storage.ref("documentos");
            var starsRef = storageRef.child(image.name);
            console.log("TASK starsRef",starsRef)
            await starsRef.getDownloadURL().then((url) => {
                console.log(`NEW URL`, url)
                setUrls([ ...urls,url ])
                console.log(`TASK urls====>`, urls)
            }).catch(function(error) {
                console.log("error ")
            });
        });
      });
    }; */

    return (
      <div className="my-3">
        <progress value={progress} max="100">{progress} %</progress>
        <div className="input-group">
            <input 
                type="file" 
                className="form-control" 
                id="inputGroupFile04" 
                aria-describedby="inputGroupFileAddon04" 
                aria-label="Upload"
                onChange={handleChange} 
            />
            {/* <button 
                className="btn btn btn-success" 
                type="button" 
                id="inputGroupFileAddon04"
                onClick={(e) =>handleUpload(e)}>
                Adjuntar archivos
            </button> */}
        </div>
        <div>{message}</div>

        <TableHead files={files} urls={urls} />

       {/*  {urls.map((url, i) => (
          <div key={i}>
             {files[i].name}
            <a href={url} rel="noreferrer" target="_blank">
              Ver
            </a>
          </div>
        ))} */}
        <br />
        {/* {urls.map((url, i) => (
          <img
            key={i}
            style={{ width: "30px" }}
            src={url || "http://via.placeholder.com/30"}
            alt=""
          />
        ))} */}
      </div>
    );
  };
  

