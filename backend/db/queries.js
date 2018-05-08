const db = require("./index");
const authhelpers = require("../auth/helpers");
const passport = require("../auth/local");


/* -------------------GET REQUEST-------------------*/
function getSingleUser(req,res,next){
    db
        .any(
            `SELECT user_id, user_name, email, user_type, user_level, is_veg, good_standing, user_events, needs_training
             FROM users
             WHERE user_id=$1`
             [req.params.userID]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}
function getSingleEvent(req,res,next){
    db
        .any(
            `SELECT event_id, event_name, email, event_type, is_veg, good_standing, donors, rescuers, attending_foodies, standby_foodies,donations, event_close, number_ofportions
             FROM events
             WHERE event_id=$1`
             [req.params.eventID]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}

function getSingleEventDonation(req,res,next){
    db
        .one(
            `SELECT donation, users.user_name, users.email, events.event_id, events.event_name 
             FROM users
             JOIN donations ON(users.user_id=donations.user_id)
             JOIN events ON(event.user_id= donations.event_id)
             WHERE donation=$1 AND user_name=$2 AND event_id =$4`
             [req.params.eventID]
        )
        .then (data=>{
            res.json(data);
        })
        .catch (error=>{
            res.json(error);
        })         
}