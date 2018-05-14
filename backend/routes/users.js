const express = require("express");
const router = express.Router();
const db = require("../db/queries");
const { loginRequired } = require("../auth/helpers");

/*------------------- GET Request---------------------*/
router.get("/logout", loginRequired, db.logoutUser);
router.get("/profile/:userId", db.getSingleUser);
router.get("/profile/:userId/userLevel", db.getSingleUserLevel);
router.get("/profile/:userId/:userEvents/", db.getSingleUserEventList);
router.get("/profile/:userId/:userEvents/:eventId", db.getSingleUserSingleEvent);
router.get("/profile/:userId/:userType", db.getSingleUserType);
router.get("/profile/:userId/:isVeg", db.getSingleUserIsVeg);
router.get("/profile/:userId/:goodStanding", db.getSingleUserGoodStanding);
router.get("/profile/:userId/:needsTraining", db.getSingleUserNeedsTraining);
router.get("/profile/:userId/:trainingCount", db.getSingleUserTrainingCount);
router.get("/profile/:userid/:donations", db.getSingleUserDonations);
router.get("/profile/:userid/:donations/:donationId", db.getSingleUserDonationById);
router.get("/alldonations", db.getAlldonations);
router.get("/alldonations/:donationId", db.getSingleDonationById);
router.get("/alldonations/:donationId/:allergens", db.getSingleDonationAllegensById);
router.get("/allevents", db.getAllEvents);
router.get("/allevents/:eventId", db.getSingleEventById);
router.get("/allevents/:eventId/:attendingFoodies", db.getAllAttendingFoodiesByEventId);
router.get("/allevents/:eventId/:standbyFoodies", db.getAllStandbyFoodiesByEventId);
router.get("/allevents/:eventId/:attendingVolunteers", db.getAllAttendingVolunteersByEventId);
router.get("/allevents/:eventId/:standbyVolunteers", db.getAllStandbyVolunteersByEventId);
router.get("/allevents/:eventBorough", db.getEventsinSingleBorough);
router.get("/allevents/:eventLocation", db.getEventsByLocation);
router.get("/allevents/:eventBorough/:zipcode", db.getEventsByLocation);
router.get("/allevents/:eventBorough/:eventType", db.getEventsByTypeInBorough);
router.get("/allevents/:eventBorough/:isVeg", db.getallAtLeastVegeterianEventsByBorough);
router.get("/allevents/:eventBorough/:!event_close", db.getOpenEventsByBorough);
router.get("/allevents/:eventBorough/:event_close", db.getClosedEventsByBorough);
router.get("/allevents/:date", db.getEventsByDate)
router.get()
router.get()
router.get()
router.get()
router.get()
router.get()
router.get()
router.get()
router.get()
