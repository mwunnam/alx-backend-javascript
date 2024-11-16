import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);

  return Promise.allSettled([promise1, promise2])
    .then((result) => {
      result.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value
          : result.reason.toString(),
      }));
    });
    .catch (error). new Error(error);
}

export default handleProfileSignup;
