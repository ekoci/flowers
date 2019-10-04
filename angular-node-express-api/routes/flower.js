var express = require('express');
var router = express.Router();
var FlowerService = require('../services/service.flower');


router.get('/', async  function (req, res, next) {
  res.json({error: "Invalid customer UID test"});
});

router.post('/', async (req, res, next)=> {
  const body = res.body;
  try {
    const flower = await FlowerService.create(body);
    if(body.guid != null){
      flower.guid = body.guid;
    }

    res.cookie('guid', flower.uid, {maxAge: 900000, httpOnly: true});
    // created the customer!
    return res.status(201).json({ flower: flower });
  }
  catch (err) {
    if (err.name === 'ValidationError')
    {
      return res.status(400).json({ error: err.message });
    }

    // unexpected error
    return next(err);
  }
});


router.get('/:id', async (req, res, next) =>
{
  try
  {
    const flower = await FlowerService.retrieve(req.params.id);

    return res.json({ flower: flower });
  }
  catch(err)
  {
    // unexpected error
    return next(err);
  }
});


router.put('/:id', async (req, res, next) =>
{
  try
  {
    const flower = await FlowerService.update(req.params.id, req.body);

    return res.json({ flower: flower });
  }
  catch(err)
  {
    // unexpected error
    return next(err);
  }
});


router.delete('/:id', async (req, res, next) =>
{
  try
  {
    const flower = await FlowerService.delete(req.params.id);

    return res.json({success: true});
  }
  catch(err)
  {
    // unexpected error
    return next(err);
  }
});


module.exports = router;
