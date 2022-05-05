import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SingUpForm from '../../components/sign-up-form/sign-up-form.component';

const SingIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <>
      <h1>Sing In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>

      <SingUpForm />
    </>
  );
};

export default SingIn;
