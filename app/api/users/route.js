import dbConnect from '@/lib/mongodb.js'; //This brings in your MongoDB connection logic.
import User from '@/models/User.js'; //This imports your User model

export async function POST(req){
    

    
        try{
            const {name,email,password}=await req.json() //This parses the JSON body of the incoming request.
            await dbConnect();
            console.log('Creating user with:', { name, email, password });
             await User.create({
                name:name,
                email:email,
                password:password});
                 //Creates a new document in your MongoDB users collection.
             return new Response(JSON.stringify({ message: 'User created successfully' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                });
        }catch(err){
             return new Response(JSON.stringify({ error: 'error creating user' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
                });
        }
    }
