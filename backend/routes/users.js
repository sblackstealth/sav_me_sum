const express = require("express");
const router = express.Router();
const db = require("../db/queries");
const { loginRequired } = require("../auth/helpers");

/*------------------- GET Request---------------------*/
// router.get("/logout", loginRequired, db.logoutUser);
router.get("/profile/:userId", db.getSingleUser);
router.get("/profile/:userId/userLevel", db.getSingleUserLevel);
router.get("/profile/:userId/:userEvents/", db.getSingleUserEventList);
router.get("/profile/:userId/:userEvents/:eventId", db.getSingleUserSingleEvent);
// router.get("/profile/:userId/:userType", db.getSingleUserType);
router.get("/profile/:userId/:isVeg", db.getSingleUserIsVeg);
router.get("/profile/:userId/:goodStanding", db.getSingleUserGoodStanding);
router.get("/profile/:userId/:needsTraining", db.getSingleUserNeedsTraining);
router.get("/profile/:userId/:trainingCount", db.getSingleUserTrainingCount);
router.get("/profile/:userid/:donations", db.getSingleUserDonations);
// router.get("/profile/:userid/:donations/:donationId", db.getSingleUserDonationById);
router.get("/alldonations", db.getAllDonations);
router.get("/alldonations/:donationId", db.getSingleDonationById);
router.get("/alldonations/:donationId/:allergens", db.getSingleDonationAllergensById);
router.get("/allevents", db.getAllEvents);
router.get("/allevents/:eventId", db.getSingleEventById);
// router.get("/allevents/:eventId/:attendingFoodies", db.getAllAttendingFoodiesByEventId);
router.get("/allevents/:eventId/:standbyFoodies", db.getAllStandbyFoodiesByEventId);
// router.get("/allevents/:eventId/:attendingVolunteers", db.getAllAttendingHelpingHandsByEventId);
router.get("/allevents/:eventId/:standbyVolunteers", db.getAllStandbyHelpingHandsByEventId);
// router.get("/allevents/:eventBorough", db.getAllEventsinSingleBorough);
router.get("/allevents/:eventLocation", db.getAllEventsInLocation);
router.get("/allevents/:eventBorough/:zipcode", db.getAllEventsByZipcode);
router.get("/allevents/:eventBorough/:eventType", db.getAllEventsByTypeInBorough);
router.get("/allevents/:eventBorough/:isVeg", db.getAllAtLeastVegetarianEventsByBorough);
router.get("/allevents/:eventBorough/:isVeg", db.getAllNonAtLeastVegetarianEventsByBorough);
router.get("/allevents/:eventBorough/:!event_close", db.getAllOpenOrClosedEventsByBorough);
router.get("/allevents/:date", db.getEventsByDate);


/*---------------POST REQUEST----------------------*/  
 router.post("/register", db.registerUser);
 router.post("/login", db.loginUser);
 router.post("/addEvent", loginRequired, db.addEvent);
 router.post("/removeEvent", loginRequired,db.removeEvent);
 router.post("/addDonation", loginRequired, db.addDonation);
 router.post("/removeDonation", loginRequired, db.removeDonation);
 router.post("/addDonation/allergen",loginRequired, db.addDonationAllergen);
 router.post("/removeDonation/allergen",loginRequired, db.removeDonationAllergen);

 /*--------------PATCH REQUEST-----------------*/
 router.patch("/edit/:userId", loginRequired, db.editUser);
 router.patch("/delete/:userId",loginRequired, db.removeUser);
 router.patch("/edit/eventId", loginRequired, db.editEvent);
 router.patch("/remove/:eventId", loginRequired, db.removeEvent);
//  router.patch("/edit/:donationId",loginRequired, db.editDonations);
 router.patch("/remove/:donationId", loginRequired, db.removeDonation);
//  router.patch("/edit/;eventId/:attendingFoodies", loginRequired, db.addAttendingFoodietoEvent);
//  router.patch("/edit/:eventId/:standbyFoodies", loginRequired, db.addStandbyFoodietoEvent);
 router.patch("/edit/:eventId/:attendingHelpingHands", loginRequired, db.addAttendingHelpingHandToEvent);
 router.patch("/edit/:eventId/:standbyHelpingHands", loginRequired, db.addStandbyHelpingHandToEvent)
//  router.patch("/edit/:eventId/:rescuers", loginRequired, db.addRescuerToEvents);
 router.patch("/edit/eventId/:donations", loginRequired, db.addDonationToEvent);
 router.patch("/edit/:eventId/:donors", loginRequired, db.addDonorToEvent);



module.exports = router;
