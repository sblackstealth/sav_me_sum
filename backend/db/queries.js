const db = require("./index");
const authhelpers = require("../auth/helpers");
const passport = require("../auth/local");


/* ------------------------------GET REQUEST--------------------------*/
function getSingleUser(req, res, next) {
    db
        .one(
            `SELECT user_id, user_name, email, user_type, user_level, is_veg, good_standing, user_events, needs_training
             FROM users
             WHERE user_id=$1` [req.params.userId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserLevel(req, res, next) {
    db
        .one(
            `SELECT user_level
             FROM users
             WHERE user_id=$1` [req.params.userId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserEventList(req, res, next) {
    db
        .one(
            `SELECT user_events
             FROM users
             WHERE user_id=$1` [req.params.eventId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserSingleEvent(req, res, next) {
    db
        .one(
            `SELECT event_id, event_name, email, event_type, is_veg, good_standing, donors, rescuers, attending_foodies, standby_foodies,donations, event_close, number_ofportions
             FROM events
             WHERE event_id=$1` [req.params.eventId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserType(req, res, next) {
    db
        .one(
            `SELECT user_type
             FROM users
             WHERE user_id=$1` [req.params.userId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserIsVeg(req, res, next) {
    db
        .one(
            `SELECT is_veg
             FROM users
             WHERE user_id=$1` [req.params.userId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserGoodStanding(req, res, next) {
    db
        .one(
            `SELECT good_standing
             FROM users
             WHERE user_id=$1` [req.params.userId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserNeedsTraining(req, res, next) {
    db
        .one(
            `SELECT needs_training
             FROM users
             WHERE user_id=$1` [req.params.userId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserTrainingCount(req, res, next) {
    db
        .one(
            `SELECT training_count
             FROM users
             WHERE user_id=$1` [req.params.userId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserDonations(req, res, next) {
    db
        .one(
            `SELECT *
             FROM donations
             WHERE user_id=$1` [req.params.userId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleUserDonation(req, res, next) {
    db
        .one(
            `SELECT *
             FROM donations
             WHERE  user_id=$1, donation_id=$2` [req.params.userId, req.params.donationId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleDonationById(req, res, next) {
    db
        .one(
            `SELECT *
             FROM donations
             WHERE donation_id=$1` [req.params.donationId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllDonations(req, res, next) {
    db
        .any(
            `SELECT *
             FROM donations`
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleDonationAllergensById(req, res, next) {
    db
        .one(
            `SELECT allergens
             FROM donations
             WHERE donation_id=$1` [req.params.donationId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllEvents(req, res, next) {
    db
        .any(
            `SELECT *
             FROM events`
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getSingleEventById(req, res, next) {
    db
        .one(
            `SELECT *
             FROM events
             WHERE event_id=$1` [req.params.eventId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllattendingFoodiesByEventId(req, res, next) {
    db
        .any(
            `SELECT attending_foodies
             FROM events
             WHERE event_id=$1` [req.params.eventId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllStandbyFoodiesByEventId(req, res, next) {
    db
        .any(
            `SELECT standby_foodies
             FROM events
             WHERE event_id=$1` [req.params.eventId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllAttendingHelpingHAndsByEventId(req, res, next) {
    db
        .any(
            `SELECT attending_volunteers
             FROM events
             WHERE event_id=$1` [req.params.eventId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}


function getAllStandbyHelpingHandsByEventId(req, res, next) {
    db
        .any(
            `SELECT standby_volunteers
             FROM events
             WHERE event_id=$1` [req.params.eventId]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllEventsInSingleBorough(req, res, next) {
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_borough=$1` [req.params.eventBorough]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllEventsInLocation(req, res, next) {
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_location=$1` [req.params.eventLocation]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllEventsByZipcode(req, res, next) {
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_zipcode=$1` [req.params.eventZipcode]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllEventsByTypeInBorough(req, res, next) {
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_borough=$1,event_type=$2` [req.params.eventBorough, req.params.eventType]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllAtLeastVegetarianEventsByBorough(req, res, next) {
    db
        .any(
            `SELECT *
             FROM events
             WHERE is_veg = true` [req.params.eventZipcode]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllNonAtLeastVegetarianEventsByBorough(req, res, next) {
    db
        .any(
            `SELECT *
             FROM events
             WHERE is_veg = false` [req.params.eventZipcode]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getAllOpenOrClosedEventsByBorough(req, res, next) {
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_closed =$1` [req.params.eventClosed]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

function getEventsByDate(req, res, next) {
    db
        .any(
            `SELECT *
             FROM events
             WHERE event_date =$1` [req.params.eventDate]
        )
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.json(error);
        })
}

/*-------------------------POST REQUEST--------------------------*/

function registerUser(req, res, next) {
    return authHelpers
        .createUser(req)
        .then(response => {
            passport.authenticate("local", (err, user, info) => {
                if (user) {
                    res.status(200).json({
                        status: "success",
                        data: user,
                        message: "Registered one user"
                    });
                }
            })(req, res, next);
        })
        .catch(err => {
            res.status(500).json({
                error: err,
                detail: err.detail
            });
        });
}

function loginUser(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.log(err);
            res.status(500).send("error while trying to log in");
        } else if (!user) {
            res.status(401).send("invalid username/password");
        } else if (user) {
            req.logIn(user, function (err) {
                if (err) {
                    res.status(500).send("error");
                } else {
                    res.status(200).send(user);
                }
            });
        }
    })(req, res, next);
}

function addEvent(req, res, next) {
    return db
        .none(
            "INSERT INTO events (event_Id, event_date, event_borough, event_time, event_location, event_zipcode, event_name, email, event_type, donors,rescuers,is_veg,attending_foodies, standby_foodies, donations, event_closed, number_of_foodies, number_of_helping_hands, number_ofportions, portions_rescued, attending_helping_hands, standby_helping_hands) Values(${event_Id},${event_date}, ${event_time}, ${event_borough}, ${event_location}, ${event_zipcode}, ${event_name}, ${email}, ${event_type}, ${donors},${rescuers},${is_veg},${attending_foodies}, ${standby_foodies}, ${donations}, ${event_closed}, ${number_ofportions}, ${portions_rescued}, ${attending_helping_hands}, ${standby_helping_hands)", {
                event_id: req.params.eventId,
                event_time: req.params.eventTime,
                event_borough: req.params.eventBorough,
                event_location: req.params.eventLocation,
                event_zipcode: req.params.eventZipcode,
                event_name: req.params.eventName,
                email: req.params.email,
                event_type: req.params.eventType,
                rescuers: req.params.rescuers,
                is_veg: req.params.isVeg,
                attending_foodies: req.params.attendingFoodies,
                standby_foodies: req.params.standbyFoodies,
                donations: req.params.donations,
                event_closed: req.params.eventClosed,
                number_of_foodies: req.params.numberOfFoodies,
                number_of_helping_hands: req.params.numberOfHelpingHands,
                number_ofportions: req.params.numberOfPortions,
                attending_helping_hands: req.params.attendingHelpingHands,
                standby_helping_hands: req.params.standbyHelpingHands,
            }
        )
}

function removeEvent(req, res, next) {
    return db
        .none(
            "DELETE FROM donations WHERE donationId=$1 ", [req.params.donationId])
        .then(data => {
            res.json("removed");
        })
        .catch(error => {
            res.json(error);
        });
}

function addDonation(req, res, next) {
    return db
        .none(
            "INSERT INTO donations WHERE donationId=$1 ", [req.params.donationId])
        .then(data => {
            res.json("added");
        })
        .catch(error => {
            res.json(error);
        });
}

function removeDonation(req, res, next) {
    return db
        .none(
            "DELETE FROM donations WHERE donationId=$1 ", [req.params.donationId])
        .then(data => {
            res.json("removed");
        })
        .catch(error => {
            res.json(error);
        });
}



function addDonationAllergen(req, res, next) {
    return db
        .none(
            "INSERT INTO donations (allergens) values (${allergens})WHERE donationId=$1 ", [req.params.eventId])
        .then(data => {
            res.json("added");
        })
        .catch(error => {
            res.json(error);
        });
}

function removeDonationAllergen(req, res, next) {
    return db
        .none(
            "DELETE FROM donations (allergens) values (${allergens})WHERE donationId=$1 ", [req.params.eventId])
        .then(data => {
            res.json("added");
        })
        .catch(error => {
            res.json(error);
        });
}

/*-------------------------PATCH REQUEST-------------------------- */

function editUser(req, res, next) {
    return db
        .none(
            "UPDATE users  SET user_id=$1,user_name=$2,password=$3, email=$4, user_type=$5, user_level=$6, is_veg=$7, good_standing=$8, user_donations=$9, needs_training=$10, training_count=$11 WHERE user_id=${req.params.userId}; ", [
                req.body.user_id,
                req.body.user_name,
                req.body.password,
                req.body.email,
                req.body.user_type,
                req.body.user_level,
                req.body.is_veg,
                req.body.good_standing,
                req.body.user_donations,
                req.body.needs_training,
                req.body.training_count
            ])
        .then(data => {
            res.json("added");
        })
        .catch(error => {
            res.json(error);
        });
}

function removeUser(req, res, next) {
    return db
        .none(
            "DELETE FROM users WHERE userId=$1 ", [req.params.userId])
        .then(data => {
            res.json("removed");
        })
        .catch(error => {
            res.json(error);
        });
}

function editEvent(req, res, next) {
    return db
        .none(
            `UPDATE events
             SET event_id=$1, event_date=$2, event_time=$3, event_borough=$4, event_location=$5, event_zipcode=$6, event_name=$7, email=$8, event_type=$9, rescuers=$10, is_veg=$11, attending_foodies=$12, standby_foodies=$13, donations=$14, event_closed=$15, number_of_foodies=$16, number_of_helping_hands=$17, number_of_portions=$18, portions_rescued=$19, attending_helping_hands=$20, standby_helping_hands=$21
             WHERE event_id=${req.params.eventID};`, [
                req.body.eventId,
                req.body.eventDate,
                req.body.eventTime,
                req.body.eventBorough,
                req.body.eventLocation,
                req.body.eventZipcode,
                req.body.eventName,
                req.body.email,
                req.body.eventType,
                req.body.rescuers,
                req.body.isVeg,
                req.body.attendingFoodies,
                req.body.standbyFoodies,
                req.body.donations,
                req.body.eventClosed,
                req.body.numberOfFoodies,
                req.body.numberOfHelpingHands,
                req.body.numberOfPortions,
                req.body.portionsRescued,
                req.body.attendingHelpingHands,
                req.body.standbyHelpingHands
            ]
        )
        .then(data => {
            res.json("success");
        })
        .catch(error => {
            res.json(error);
        });

}

function editDonations(req, res, next) {
    const donations = req.body.donations;
    return db
        .task(t => {
            const donationsWithId = donations.filter(
                donation => donation.donation_id
            );
            const update = donations.map(donation => {
                return t.any(
                    `UPDATE donations
                           SET donation_name=$1, allergens=$2, is_veg=$3, pass_check=$4
                           WHERE donation_id=${donation.donation_id};`, [donation.name, donation.allergens, donation.isVeg, donation.pass_check]
                );
            });

            const donationsWithoutId = donations.filter(
                donation => !donation.donation_id
            );
            const insert = donationsWithoutId.map(donation => {
                return t.none(
                    "INSERT INTO donations (donation_id,donation_name, user_id, donor_name, allergens, is_veg, rescuers, pass_check, events_servedat) " +
                    " VALUES (${donation_id}, ${donation_name}, ${user_id}, ${donor_name}, ${allergens}, ${is_veg}, ${rescuers}, ${pass_check}, ${events_servedat})", {
                        donation_id: req.params.donationID,
                        donation_name: donation.name,
                        user_id: donation.userId,
                        donor_name: donation.donorName,
                        allergens: donation.allergens,
                        is_veg: donation.isVeg,
                        rescuers: donation.rescuers,
                        pass_check: donation.passCheck,
                        events_servedat: donation.eventsServedat

                    }
                );
            });
            return t.batch(donationsWithId.concat(donationsWithoutId));
        })
        .then(data => {
            res.json("success");
        })
        .catch(error => {
            res.json(error);
        });
}

function addAttendingFoodieToEvent(req, res, next) {
    const idforevent = req.body.eventId
    return db
        .none(
            "UPDATE events  SET user_id=$1,user_name=$2, attending_foodies=$3 WHERE event_id=${idforevent.eventId}", [
                req.body.userId,
                req.body.userName,
                req.body.attendingFoodies
            ]
        )
        .then(data => {
            res.json("success");
        })
        .catch(error => {
            res.json(error);
        });
}

function addStandbyFoodieToEvent(req, res, next) {
    const idforevent = req.body.eventId
    return db
        .none(
            "UPDATE events  SET user_id=$1,user_name=$2, standby_foodies=$3 WHERE event_id=${idforevent.eventId}", [
                req.body.userId,
                req.body.userName,
                req.body.standbyFoodies
            ]
        )
        .then(data => {
            res.json("success");
        })
        .catch(error => {
            res.json(error);
        });
}

function addAttendingHelpingHandToEvent(req, res, next) {
    const idforevent = req.body.eventId
    return db
        .none(
            "UPDATE events  SET user_id=$1,user_name=$2, attending_helping_hands=$3 WHERE event_id=${idforevent.eventId}", [
                req.body.userId,
                req.body.userName,
                req.body.attendinghelpingHands
            ]
        )
        .then(data => {
            res.json("success");
        })
        .catch(error => {
            res.json(error);
        });
}

function addStandbyHelpingHandToEvent(req, res, next) {
    const idforevent = req.body.eventId
    return db
        .none(
            "UPDATE events  SET user_id=$1,user_name=$2, standby_helping_hands=$3 WHERE event_id=${idforevent.eventId}", [
                req.body.userId,
                req.body.userName,
                req.body.standbyhelpingHands
            ]
        )
        .then(data => {
            res.json("success");
        })
        .catch(error => {
            res.json(error);
        });
}

function addRescuerToEvent(req, res, next) {
    const idforevent = req.body.eventId
    return db
        .none(
            "UPDATE events  SET user_id=$1,user_name=$2, rescuers=$3 WHERE event_id=${idforevent.eventId}", [
                req.body.userId,
                req.body.userName,
                req.body.rescuers
            ]
        )
        .then(data => {
            res.json("success");
        })
        .catch(error => {
            res.json(error);
        });
}

function addDonationToEvent(req, res, next) {
    const idforevent = req.body.eventId
    return db
        .none(
            "UPDATE events  SET user_id=$1,user_name=$2, donation_id=$3, donation_name=$4, donations=$5 WHERE event_id=${idforevent.eventId}", [
                req.body.userId,
                req.body.userName,
                req.body.donationId,
                req.body.donationName,
                req.body.donations
            ]
        )
        .then(data => {
            res.json("success");
        })
        .catch(error => {
            res.json(error);
        });
}

function addDonorToEvent(req, res, next) {
    const idforevent = req.body.eventId
    return db
        .none(
            "UPDATE events  SET user_id=$1,user_name=$2, donors=$3 WHERE event_id=${idforevent.eventId}", [
                req.body.userId,
                req.body.userName,
                req.body.donors
            ]
        )
        .then(data => {
            res.json("success");
        })
        .catch(error => {
            res.json(error);
        });
}

module.exports = {
    /*GET REQUEST*/
    logoutuser,
    getSingleUser,
    getSingleUserLevel,
    getSingleUserEventList,
    getSingleUserSingleEvent,
    getSingleUserEventType,
    getSingleUserIsVeg,
    getSingleUserGoodStanding,
    getSingleUserNeedsTraining,
    getSingleUserTrainingCount,
    getSingleUserDonations,
    getSingleDonationById,
    getAllDonations,
    getSingleUserDonationById,
    getSingleDonationAllergensById,
    getAllEvents,
    getSingleEventById,
    getAllattendingFoodiesByEventId,
    getAllStandbyFoodiesByEventId,
    getAllAttendingHelpingHandsByEventId,
    getAllStandbyHelpingHandsByEventId,
    getAllEventsInSingleBorough,
    getAllEventsInLocation,
    getAllEventsByZipcode,
    getAllEventsByTypeInBorough,
    getAllAtLeastVegetarianEventsByBorough,
    getAllNonAtLeastVegetarianEventsByBorough,
    getAllOpenOrClosedEventsByBorough,
    getEventsByDate,
    /*POST REQUEST*/
    registerUser,
    loginUser,
    addEvent,
    removeEvent,
    addDonation,
    removeDonation,
    addDonationAllergen,
    removeDonationAllergen,
    /*PATCH REQUEST*/
    editUser,
    removeUser,
    editEvent,
    removeEvent,
    editDonation,
    addAttendingFoodieToEvent,
    addStandbyFoodieToEvent,
    addAttendingHelpingHandToEvent,
    addStandbyHelpingHandToEvent,
    addRescuerToEvent,
    addDonationToEvent,
    addDonorToEvent,
};