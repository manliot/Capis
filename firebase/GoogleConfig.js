import { GoogleSignin } from '@react-native-community/google-signin';

const GoogleConfig = () => {
    GoogleSignin.configure({
        webClientId: '33058736268-brr7ika8q24bt487j48r99h2hua0mq79.apps.googleusercontent.com',
    });
    return null
}


export default GoogleConfig;