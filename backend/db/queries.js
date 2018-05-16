const db = require("./index");
const authhelpers = require("../auth/helpers");
const passport = require("../auth/local");


/* -------------------GET REQUEST-------------------*/
function getSingleUser(req,res,next){
    db
        .one(
            `SELECT user_id, user_name, email, user_type, user_level, is_veg, good_standing, user_events, needs_training
             FROM users
             WHERE user_id=$1`
             [req.params.userId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserLevel(req,res,next){
    db
        .one(
            `SELECT user_level
             FROM users
             WHERE user_id=$1`
             [req.params.userId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserEventList(req,res,next){
    db
        .one(
            `SELECT user_events
             FROM users
             WHERE user_id=$1`
             [req.params.eventId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserSingleEvent(req,res,next){
    db
        .one(
            `SELECT event_id, event_name, email, event_type, is_veg, good_standing, donors, rescuers, attending_foodies, standby_foodies,donations, event_close, number_ofportions
             FROM events
             WHERE event_id=$1`
             [req.params.eventId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserType(req,res,next){
    db
        .one(
            `SELECT user_type
             FROM users
             WHERE user_id=$1`
             [req.params.userId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserIsVeg(req,res,next){
    db
        .one(
            `SELECT is_veg
             FROM users
             WHERE user_id=$1`
             [req.params.userId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserGoodStanding(req,res,next){
    db
        .one(
            `SELECT good_standing
             FROM users
             WHERE user_id=$1`
             [req.params.userId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserNeedsTraining(req,res,next){
    db
        .one(
            `SELECT needs_training
             FROM users
             WHERE user_id=$1`
             [req.params.userId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserTrainingCount(req,res,next){
    db
        .one(
            `SELECT training_count
             FROM users
             WHERE user_id=$1`
             [req.params.userId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserDonations(req,res,next){
    db
        .one(
            `SELECT *
             FROM donations
             WHERE user_id=$1`
             [req.params.userId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleUserDonation(req,res,next){
    db
        .one(
            `SELECT *
             FROM donations
             WHERE  user_id=$1, donation_id=$2`
             [req.params.userId] [req.params.donationId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleDonationById(req,res,next){
    db
        .one(
            `SELECT *
             FROM donations
             WHERE donation_id=$1`
             [req.params.donationId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllDonations(req,res,next){
    db
        .any(
            `SELECT *
             FROM donations`
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleDonationAllergensById(req,res,next){
    db
        .one(
            `SELECT allergens
             FROM donations
             WHERE donation_id=$1`
             [req.params.donationId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllEvents(req,res,next){
    db
        .any(
            `SELECT *
             FROM events`
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleEventById(req,res,next){
    db
        .one(
            `SELECT *
             FROM events
             WHERE event_id=$1`
             [req.params.eventId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllattendingFoodiesByEventId(req,res,next){
    db
        .any(
            `SELECT attending_foodies
             FROM events
             WHERE event_id=$1`
             [req.params.eventId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllStandbyFoodiesByEventId(req,res,next){
    db
        .any(
            `SELECT standby_foodies
             FROM events
             WHERE event_id=$1`
             [req.params.eventId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllAttendingVolunteersByEventId(req,res,next){
    db
        .any(
            `SELECT attending_volunteers
             FROM events
             WHERE event_id=$1`
             [req.params.eventId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}


function getAllStandbyvolunteersByEventId(req,res,next){
    db
        .any(
            `SELECT standby_volunteers
             FROM events
             WHERE event_id=$1`
             [req.params.eventId]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllEventsInSingleBorough(req,res,next){
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_borough=$1`
             [req.params.eventBorough]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllEventsInLocation(req,res,next){
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_location=$1`
             [req.params.eventLocation]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllEventsByZipcode(req,res,next){
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_zipcode=$1`
             [req.params.eventZipcode]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllEventsByTypeInBorough(req,res,next){
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_borough=$1,event_type=$2`
             [req.params.eventBorough] [req.params.eventType]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllAtLeastVegetarianEventsByBorough(req,res,next){
    db
        .any(
            `SELECT *
             FROM events
             WHERE is_veg = true`
             [req.params.eventZipcode]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllNonAtLeastVegetarianEventsByBorough(req,res,next){
    db
        .any(
            `SELECT *
             FROM events
             WHERE is_veg = false`
             [req.params.eventZipcode]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getAllOpenOrClosedEventsByBorough(req,res,next){
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_closed =$1`
             [req.params.eventClosed]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getEventsByDate(req,res,next){
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_date =$1`
             [req.params.eventDate]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}