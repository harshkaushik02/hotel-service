

const express = require('express');
//import signup.js to or file
const signup = require('../model/signup');


//import contact ejs
const contact = require('../model/contact');

//import product ejs
const product = require('../model/product');


const router = express.Router();

//multer
const multer = require('multer');


// const {v4: uuidv4 } = require('uuid');





// router.get('/', function(req,res){
//     // res.send("harsh h kya");
//     res.render('index');
// })

router.get('/', async (req,res) => {
    try {
        const regdata = await product.find({});
        res.render('index', {regdata: regdata});
        console.log(regdata);
    }
     catch (err) {
        console.log(err);
    }
});



router.get('/blog', function(req,res){
    // res.send("harsh h kya");
    res.render('blog');
})


router.get('/popular', function(req,res){
    // res.send("harsh h kya");
    res.render('popular');
})

router.get('/signup', function(req,res){
    res.render('signup.ejs');
})

//now posting the form
router.post('/signup', (req, res) => {
    var sign_up = {
        first_name: req.body.f_name,
        last_name: req.body.l_name,
        dob: req.body.dob,
        email: req.body.email,
        password: req.body.password,
        conform_password: req.body.conform_password
        
    };

    var regpost = new signup(sign_up);
    regpost.save()
    .then(() => 
    res.json('register successfully')
    )
    .catch(err => res.status(400).json('error:' + err));
})

//contact

router.get('/contact', function(req,res){
    res.render('contact.ejs');
})

//contactx
router.post('/contact', (req, res) => {
    var contact_1 = {
        f_name: req.body.f_name,
        email: req.body.email,
        contact : req.body.contact,
        massage : req.body.massage

    };
    var regpost = new contact(contact_1);
    regpost.save()
    .then(() =>
    res.json('contact successfully')
    )
    .catch(err => res.status(400).json('error:' + err));

})   //<harsh k>
//file upload

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './upload');
    },

    filename: function (req, file, cb){
        cb(null,file.originalname);
        // cb(null, uuidv4()+'-'+ Date.now() + path.extname(file.originalname))//
        //Appending.jpg
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
let upload = multer ({storage, fileFilter});





//contactend
//product

router.get('/add-product', function(req,res){
    res.render('./dashbord/add-product.ejs');
})
router.post('/product',upload.single('image'), (req, res) => {
    var product_1 = {
        name: req.body.name,
        l_name: req.body.l_name,
        hotel: req.body.hotel,
        image: req.file.filename
        
    };
    var regpost = new product(product_1);
    regpost.save()
    .then(() => 
    res.json('product sucessfilly'))
    .catch(err => res.status(400).json('error:' + err));
})



router.get('/admin', function(req,res){
    res.render('./dashbord/index.ejs');
})


//edit product page
router.get('/editproduct', function(req,res){
    res.render('./dashbord/editproduct');
})

//edit job api
router.get('/editproduct/:id', function(req,res){
    addproduct.findById(req.params.id, function(err, data){
        if (err){
            console.log(err);
        } else{
            console.log(data);
            res.render('./dashbord/editproduct', {data: data});
        }
    });
});




//edit end






//product end

// jaise isko banaya hain vaise he view-query wali file ko banana
router.get('/view-product', async (req,res) => {
    try {
        const regdata = await product.find({});
        res.render('./dashbord/view-product', {regdata: regdata});
        console.log(regdata);
    }
     catch (err) {
        console.log(err);
    }
});


// router.get('/view-query', function(req,res){
//     res.render('./dashbord/view-query.ejs');
// })



// rquire data 
router.get('/edit_product/:id', async (req, res) => {
    try {
        const updateData = await product.findById(req.params.id);
        res.render('./dashbord/editproduct', { updateData: updateData });
        console.log(updateData);
    }
    catch (err) {
        console.log(err);
    }
});


// show updated product 
// posting edit product to view edit page 
router.post('/edit_product/:id',upload.single('image'), async (req, res) => {

    const itemId = req.params.id;

    const allData = {
        name: req.body.name,
        l_name: req.body.l_name,
        hotel: req.body.hotel,
        image: req.file.image
    };

    try {
        const addData = await product.findByIdAndUpdate(itemId, allData, { new: true });

        if (!addData) {
            return res.status(404).json({ message: 'item not found' });
        }
        res.redirect('/view-product');
    }
    catch (err) {
        res.status(500).json({ message: 'server error' });
    }
});


// view product
router.get("/delete_product/:id", async (req,res) => {
    try {
        const deleteData = await product.findByIdAndDelete(req.params.id);
        res.redirect('/view-product');
    }
    catch (err) {
        console.log(err);
    }
});


//query
router.get('/view-query', async (req,res) => {
    try {
        const regdata = await contact.find({});
        res.render('./dashbord/view-query', {regdata: regdata});
         console.log(regdata);
    }
     catch (err) {
        console.log(err);
    }
});



// router.get('/room-detail', function(req,res){
//     res.render('room-detail.ejs');
// })


router.get('/roomdetail/:id', async (req,res) => {
    try {
        const room = await product.findById(req.params.id)  
            res.render('room-detail', {room: room});

            // console.log(regdata);
        }
    
     catch (err) {
        console.log(err);
    }
});





//room details

//login api
router.post('/login', async (req, res) => {
    var email = req.body.email,
      password = req.body.password;

      try{
        var login = await signup.findOne({email : email})
        .exec();
        if(!login){
            res.redirect("/");
        }
        signup.comparePassword(password,(error, match) => {
            if(!match) {
                res.redirect("/login");
            }
        });

        res.redirect("/admin")
      }
      catch (error) {
        console.log(error)
      }
})

















//exporting module
    module.exports = router;





//connectig databse server