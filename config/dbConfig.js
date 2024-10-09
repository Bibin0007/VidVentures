import mongoose from "mongoose";

mongoose.connect('mongodb+srv://codenuitycloud:Codenuity%402023@vidventures.lfemvtz.mongodb.net/Vidventures',{
    useNewUrlParser: true,
        useUnifiedTopology: true
}).then(()=>{console.log('DB connected')}).catch((e)=>{console.log(e.message)})



export default mongoose 