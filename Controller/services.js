const ServiceModel = require('../Model/serviceSchema');

exports.getServices = async (req, res) => {
  try {
    const data = await ServiceModel.find({}, { _id: 0, __v: 0 });
    if (data.length > 0) {
      res.status(200).json({
        data,
      });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No Service available in the database',
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
exports.getService = async (req, res) => {
  try {
    let data = await ServiceModel.find(
      { id: req.params.id },
      { _id: 0, __v: 0 }
    );
     data = data[0]
    if (data!=null) {
      res.status(200).json(
        data,
      );
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: 'No Service available in the collection',
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
exports.newService = async (req, res) => {
  try {
    if (req.body.id) {
      const newService = await ServiceModel.create(req.body);
      res.status(201).json({
        status: 'success',
        data: {
          newService,
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
      message: err.errmsg,
    });
  }
};
exports.updateService = async (req, res) => {
  try {
    const Service = await ServiceModel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      {
        new: true, //to return new doc back
        runValidators: false, //to run the validators which specified in the model
      }
    );
    if (Service != null) {
      res.status(200).json({
        status: 'success',
        data: {
          Service,
        },
      });
    } else {
      res.status(400).json({
        status: 'success',
        data: {
          message: `No Service available with ID ${req.params.id} `,
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
exports.deleteService = async (req, res) => {
  const delDet = await ServiceModel.deleteOne({ id: req.params.id });
  if (delDet.deletedCount === 0) {
    res.status(404).json({
      status: 'fail',
      message: 'No Service available for this ID',
    });
  } else {
    res.status(200).json({
      status: 'success',
      message: `Service with ${req.params.id} ID deleted`,
    });
  }
};
exports.invalid = async (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: 'Invalid path',
  });
};