const router = require("express").Router();
const dest = require('../models/dest');

router.route('/adddest').post(async (req, res) => {

    // console.log("Received tour data:", req.body);

    const { trid, points1, points2, points3, points4, points5, points6, points7, points8, pdf } = req.body


    const newDes = new dest({ trid, points1, points2, points3, points4, points5, points6, points7, points8, pdf });

    newDes.save().then(() => {
        res.json("add")
    }).catch((err) => {
        res.json("not")
    })


})


router.route('/getdest/:id').get(async (req, res) => {

    const trid = req.params.id;

    try {
        const destination = await dest.findOne({ trid: trid });
        if (destination) {
            res.json(destination);
        } else {
            res.json("Destination not found");
        }
    } catch (err) {
        res.json(err);
    }
});


router.route('/updatedest/:id').post(async (req, res) => {

    const trid = req.params.id;

    const { points1, points2, points3, points4, points5, points6, points7, points8, pdf } = req.body

    try {
        const updatedDes = await dest.findOneAndUpdate({ trid: trid }, { points1, points2, points3, points4, points5, points6, points7, points8, pdf });
        res.json(updatedDes);
    } catch (error) {
        res.json(error);
    }

});

router.route('/deletedest/:id').delete(async (req, res) => {
    const trid = req.params.id;
    // console.log(trid);

    try {
        const deletedDes = await dest.findOneAndDelete({ trid: trid });
        if (deletedDes) {
            res.json("Destination deleted successfully");
        } else {
            res.json("Destination not found");
        }
    } catch (error) {
        res.json(error);
    }
});


//strat profile Upload
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Upload/images/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

//update pdf
router.route('/updatepdf/:id').post(upload.single('file'), async (req, res) => {
    const id = req.params.id;

    try {
       
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const file = req.file.filename;

        // console.log(file)

        const updatedDes = await dest.findOneAndUpdate({ trid: id }, { pdf: file }, { new: true });

        if (!updatedDes) {
            return res.status(404).json({ error: 'Document not found' });
        }

       
        res.json(updatedDes);
    } catch (error) {
        
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



module.exports = router;