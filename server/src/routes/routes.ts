import { Router } from "express";

const router= Router()

export default () => {
  router.get("/test",(req,res)=>{
    res.send("Working")
  })

  return router;
}
