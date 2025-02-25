function loadScript(src,callback){
    let script = document.createElement('script')
    script.src = src
    script.onload = function() {
        console.log("loaded script with SRC: " + src)
        callback(null,src);
    }
    script.onerror = function(){
        console.log("Error loading script with src" + src)
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script)
}
function goodmorning(error,src){
    if(error){
        console.log(error)
        return
    }
    alert('good morning' + src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",function goodmorning(error,src){
    if(error){
        console.log(error)
        sendmessagetome();
        return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap2.bundle.min.js",function goodmorning(error,src){
        if(error){
            console.log(error)
            sendmessagetome();
            return
        } 
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap3.bundle.min.js",function goodmorning(error,src){
            if(error){
                console.log(error)
                sendmessagetome();
                return
            } 
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap4.bundle.min.js",function goodmorning(error,src){
                if(error){
                    console.log(error)
                    sendmessagetome();
                    return
                }
            })

        })
    })
})
// As a call become more nested it will get more deeper and increasingly more difficult to maintain or manage.so sometimes we called callback hell or pyramid od doom
//when it will happen: so it will happen when asynchronous operation in a deeply nested manner