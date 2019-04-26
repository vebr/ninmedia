export const generalMessages = {};

export const successMessages = {};

export const errorMessages = {
  // Defaults
  default: 'Hmm, an unknown error occured',
  timeout: 'Server Timed Out. Check your internet connection',
  invalidJson: 'Response returned is not valid JSON',

  // Firebase Related
  invalidFirebase: 'Firebase is not connected correctly',

  // Member
  memberExists: 'Member already exists',
  missingNama: 'Tolong masukkan nama anda',
  missingNoTlp: 'Tolong masukkan nomor telepon anda',
  missingEmail: 'Tolong masukkan email anda',
  missingAreaDomisili: 'Tolong masukkan area domisili anda',
  passwordsDontMatch: 'Passwords do not match',

  // Recipes
  recipe404: 'Recipe not found',
  missingMealId: 'Missing meal definition',
};
