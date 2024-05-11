import React, {useState, useEffect} from 'react'
import axios from 'axios'

function UserAPI(token) {
    const[isLogged, setIsLogged] = useState(false)
    const[isAdmin, setIsAdmin] = useState(false)
    const[username, setUsername]= useState("") 
    const[user, setUser] = useState("")
    const [cart, setCart] = useState([])
    const [id, setId] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() =>{
        if(token){
            const getUser = async() =>{
                try{
                    const res = await axios.get('http://localhost:8000/api/getUser', {
                        headers: {Authorization: token}
                    })
                    console.log(isLogged)
                    setIsLogged(true)
                    setUsername(res.data.username)
                    setEmail(res.data.email)
                    setUser(res.data)
                    console.log(res.data)
                    res.data.role === 1 ? setIsAdmin(true): setIsAdmin(false)
                    setCart(res.data.cart)
                    setId(res.data._id)
                }catch(err){
                    alert(err.res.data.msg)
                }
            }

            getUser()
        }
    },[token])

    const addToCart = async(product)=>{
        if(!isLogged) return alert("Please login to continue purchasing the product")
        const check = cart.every(pro =>{
        return pro._id !== product._id
    })

    if(check){
        setCart([...cart, {...product, sold: 1}])
        await axios.patch('http://localhost:8000/api/cart', {cart: [...cart, {...product, sold:1}]},{
            headers: {Authorization: token}
        })
    }else{
        alert("The product has been added to your cart")
    }
    }

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    username: [username, setUsername],
    cart: [cart, setCart],
    user: [user, setUser],
    addToCart: addToCart,
    id: [id, setId],
    email: [email, setEmail]
}
}

export default UserAPI