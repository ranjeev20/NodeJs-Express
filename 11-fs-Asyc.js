console.log("start")
const {readFile, writeFile} = require('fs');


 readFile('./content/first.txt', 'utf8', (err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    console.log("reading first and second")
   readFile('./content/second.txt', 'utf8', (err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
    
        writeFile(
            './content/resultAsyc.txt',
            `Here is the result: ${first}, ${second}`,(err, result)=>{    
                if(err){
                    console.log(err)
                    return
                }     
                console.log(result)
        
            }
        
        )
        })

 })

console.log("start next task");

