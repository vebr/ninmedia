import { errorMessages } from '../constants/messages';
import {Firebase, FirebaseRef } from '../lib/firebase';

import statusMessage from './status';


/**
  * Update Profile
  */
export function updateData(formData) {
  const {
    nama, noTlp, email, areaDomisili,tanggal
  } = formData;
  console.log(formData);
  return dispatch => new Promise(async (resolve, reject) => {
    // Validation rules
    if (nama === "") return reject({ message: errorMessages.missingName });
    if (noTlp === "") return reject({ message: errorMessages.missingNoTlp });
    if (email === "") return reject({ message: errorMessages.missingEmail });
    if (areaDomisili === "") return reject({ message: errorMessages.missingAreaDomisili });

    // Go to Firebase
    return FirebaseRef.child(`data`).push({ nama, noTlp, email, areaDomisili,tanggal })
      .then(async () => {
        // Update Redux
        return resolve(dispatch);
      }).catch(reject);
  }).catch((err) => { throw err.message; });
}

/**
  * Get this User's Details
  */
 function getUserData(dispatch) {
  const UID = (
    FirebaseRef
    && Firebase
    && Firebase.auth()
    && Firebase.auth().currentUser
    && Firebase.auth().currentUser.uid
  ) ? Firebase.auth().currentUser.uid : null;

  if (!UID) return false;

  const ref = FirebaseRef.child(`users/${UID}`);
  return ref.on('value', (snapshot) => {
    const userData = snapshot.val() || [];
    return dispatch({
      type: 'USER_DETAILS_UPDATE',
      data: userData,
    });
  });
}

export function getMemberData() {
  if (Firebase === null) return () => new Promise(resolve => resolve());

  // Ensure token is up to date
  return dispatch => new Promise((resolve) => {
    Firebase.auth().onAuthStateChanged((loggedIn) => {
      if (loggedIn) {
        return resolve(getUserData(dispatch));
      }

      return () => new Promise(() => resolve());
    });
  });
}



/**
  * Login to Firebase with Email/Password
  */
 export function login(formData) {
  const {
    email,
    password,
  } = formData;

  return dispatch => new Promise(async (resolve, reject) => {
    await statusMessage(dispatch, 'loading', true);

    // Validation checks
    if (!email) return reject({ message: "Email null" });
    if (!password) return reject({ message: "Password null" });

    // Go to Firebase
    return Firebase.auth()
      .setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
      .then(() => Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(async (res) => {
          const userDetails = res && res.user ? res.user : null;

          if (userDetails.uid) {
            // Update last logged in data
            FirebaseRef.child(`users/${userDetails.uid}`).update({
              lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
            });

            // Send verification Email when email hasn't been verified
            if (userDetails.emailVerified === false) {
              Firebase.auth().currentUser
                .sendEmailVerification()
                .catch(() => console.log('Verification email failed to send'));
            }

            // Get User Data
            getUserData(dispatch);
          }

          await statusMessage(dispatch, 'loading', false);

          // Send Login data to Redux
          return resolve(dispatch({
            type: 'USER_LOGIN',
            data: userDetails,
          }));
        }).catch(reject));
  }).catch(async (err) => {
    await statusMessage(dispatch, 'loading', false);
    throw err.message;
  });
}


/**
  * Logout
  */
 export function logout() {
  return dispatch => new Promise((resolve, reject) => {
    Firebase.auth().signOut()
      .then(() => {
        dispatch({ type: 'USER_RESET' });
        setTimeout(resolve, 1000); // Resolve after 1s so that user sees a message
      }).catch(reject);
  }).catch(async (err) => { await statusMessage(dispatch, 'error', err.message); throw err.message; });
}


export function getData() {
  if (Firebase === null) return () => new Promise(async (resolve) => resolve());
  
  return dispatch => new Promise(async (resolve) => FirebaseRef.child('data')
    .on('value',async (snapshot) => {
      const data = snapshot.val() || [];
      const stores = await data;
      console.log(data)
      return resolve(dispatch({
        type: 'DATA_REPLACE',
        data: stores,
      }));
    })).catch(e => console.log(e));
}
