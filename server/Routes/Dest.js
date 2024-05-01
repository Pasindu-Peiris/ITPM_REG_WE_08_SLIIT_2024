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


//send data is on database or not
router.route('/check/:id').get(async (req, res) => {

    const trid = req.params.id;

    try {
        const destination = await dest.findOne({ trid: trid });
        if (destination) {
            res.json("yes");
        } else {
            res.json("no");
        }
    } catch (err) {
        res.json(err);
    }
});


//Send email using node mailer
router.route('/sendemail').post(async (req, res) => {

  

    const email = req.body.email;
    const id = req.body.id;

    //NodeMailer
    var nodemailer = require('nodemailer');


    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'randyruch5@gmail.com',
            pass: 'luxlrqakfenxkyzi'
        }
    });

    var mailOptions = {
        from: 'randyruch5@gmail.com',
        to: email,
        subject: 'Explore Your destination',
        html: `<p>Hello,</p>
        <p>Thanks for purchasing our tour, Now you can explore it below link :</p>
     
     
     <a href="http://localhost:3000/map2/${id}" style='background-color: #00FA9A;
     border: none;
     color: #000;
     padding: 10px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 16px;
     margin: 4px 2px;
     cursor: pointer;
     border-radius: 6px; '>Reset Password</a>


     <p>If you are unable to reset your password, please contact us. <br> RAPID TRAVELS : (94) 77 99 74368 </p>
     <p>Best regards,<br>RAPID TRAVELS</p>
     <p>© 2021 RAPID TRAVELS. All rights reserved.</p>`

    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            return res.send({ msg: "Success" })
        }
    });



});


module.exports = router;