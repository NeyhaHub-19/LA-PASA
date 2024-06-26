const Cart = require("../models/Cart");
const Product = require("../models/Product");
const router = require("express").Router();
const {verifyToken,verifyTokenAndAdmin ,verifyTokenAndAuthorization } = require("./verifyToken");




//Create
 router.post("/", verifyToken, async (req,res)=>{
    const newCart =new Cart(req.body)

    try{
        const savedCart =await newCart.save();
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }

 })


//update

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});


// delete
 router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
  try{
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json("Cart has been deleted...")
  } catch(err){
    res.status(500).json(err)
  }
 })



//get user cart

 router.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userid });
      res.status(200).json(cart); 
    } catch (err) {
      res.status(500).json(err);
    }
  });
 

 //get all Products
 router.get("/", verifyTokenAndAuthorization, async (req,res)=>{
   try{
        const carts= await Cart.find()
        res.status(200).json(carts)
   }catch(err){
    res.status(500).json(err)
   }
 
    
 })





module.exports = router;
