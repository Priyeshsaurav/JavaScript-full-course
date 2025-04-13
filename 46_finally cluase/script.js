function downloadFile(){
    try{
        console.log("downloadFile")
        throw new Error("download failed!")
    }
    catch(error){
        console.log("error",error.message)
    }
    finally{
        console.log("cleaning up temp files...");
    }
}
downloadFile();