import { errorMessages } from '../constants/messages';
import { FirebaseRef } from '../lib/firebase';

/**
  * Update Profile
  */
export function updateData(formData) {
  const {
    nama, noTlp, email, areaDomisili
  } = formData;
  
  return dispatch => new Promise(async (resolve, reject) => {
    // Validation rules
    if (!nama) return reject({ message: errorMessages.missingName });
    if (!noTlp) return reject({ message: errorMessages.missingNoTlp });
    if (!email) return reject({ message: errorMessages.missingEmail });
    if (!areaDomisili) return reject({ message: errorMessages.missingAreaDomisili });

    // Go to Firebase
    return FirebaseRef.child(`data`).push({ nama, noTlp, email, areaDomisili })
      .then(async () => {
        // Update Redux
        return resolve(dispatch);
      }).catch(reject);
  }).catch((err) => { throw err.message; });
}
