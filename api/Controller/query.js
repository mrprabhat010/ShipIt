const QueryModel = require('../Model/querySchema');


exports.getQuery = async (req, res) => {
  try {
    const data = await QueryModel.find({}, { _id: 0, __v: 0 });
    if (data.length > 0) {
      res.status(200).json({
        data,
      });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No Query available in the repo',
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.newQuery = async (req, res) => {
  try {
    if (req.body.to) {
      const newQuery = await QueryModel.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          newQuery,
        },
      });
    } else {
      res.status(400).json({
        status: 'error',
        results: 'Enter valid name',
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateQuery = async (req, res) => {
  try {
    const Query = await QueryModel.findOneAndUpdate(
      { queryId: req.params.id },
      req.body,
      {
        new: true, //to return new doc back
        runValidators: false, //to run the validators which specified in the model
      }
    );
    if (Query != null) {
      res.status(200).json({
        status: 'success',
        data: {
          Query,
        },
      });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: `No Query available with ID ${req.params.id} `,
        },
      });
    }
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteQuery = async (req, res) => {
  const delDet = await QueryModel.deleteOne({ queryId: req.params.id });
  if (delDet.deletedCount === 0) {
    res.status(404).json({
      status: 'fail',
      message: 'No Query available for this ID',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: `Query with ${req.params.id} ID deleted`,
    });
  }
};
exports.invalid = async (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Invalid path',
  });
};
