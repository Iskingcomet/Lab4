const express = require('express');
const router = express.Router();

const fs = require('fs');
let rawdata = fs.readFileSync('./courses.json');
let course = JSON.parse(rawdata);

/*
DEFINE ROUTES
*/
router.get('/', (req, res) => {
    let outputJSON = {
        courses : course["courses"]
    }
    res.json(outputJSON);
});

router.get('/by_title/:qtitle', (req, res) => {
    let query = req.params['qtitle']
    filtered_courses = course["courses"].filter(q => q.title.toLowerCase().includes(query.toLowerCase()) )
    let outputJSON = {
        courses: filtered_courses
    }

    res.json(outputJSON);
})


router.get('/by_instructor/:qname', (req, res) => {
    let query = req.params['qname']
    filtered_courses = course["courses"].filter(q => q.instructor.toLowerCase().includes(query.toLowerCase()) )
    let outputJSON = {
        courses: filtered_courses
    }

    res.json(outputJSON);
})


router.get('/by_course_code/:qcode', (req,res) => {
    let query = req.params['qcode'].toLowerCase();
    filtered_courses = course["courses"].filter(q => q.course_code.toLowerCase().includes(query.toLowerCase()) )
    let outJSON = {
        courses: filtered_courses
    }

    res.json(outJSON);
})

router.get('/by_course_level/:qlevel', (req, res) => {
    let query = req.params['qlevel'].toLowerCase();
    filtered_Courses = course["courses"].filter(q => q.course_level.toLowerCase().includes(query.toLowerCase()) )
    let outputJSON ={
        courses : filtered_Courses
    }
    res.json(outputJSON);
})


router.get('/combined_query/:qname/:qlevel', (req, res) => {

    let qname = req.params['qname']
    let qlevel = req.params['qlevel']

    filtered_courses = course["courses"].filter( 
        q => {
            return (
                q.instructor.toLowerCase().includes(qname.toLowerCase()) && q.course_level.toLowerCase().includes(qlevel.toLowerCase())
    );
        }
     );

    let outJSON = {
        courses: filtered_courses
    }

    res.json(outJSON);
})

module.exports = router;
