const getData=require('../database.js')
const db=getData();

const express=require('express')
const router=express.Router()

router.get('/', async (req, res) => {
	 //console.log('/tools REST API');
	// res.send('/tools REST API')
	const toolsRef=db.collection('tools')
	const snapshot= await toolsRef.get()
	if(snapshot.empty)
	{
		res.send([])
		return
	}
	let items=[]
	snapshot.forEach(doc=>{
		const data=doc.data()
		data.id=doc.id
		items.push(data)
	})
	res.send(items)
})
module.exports=router