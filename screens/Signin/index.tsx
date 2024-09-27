import React, { ReactElement } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Button, Input, Layout, StyleService, Text, useStyleSheet, Icon } from '@ui-kitten/components';
import { PersonIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { login } from '@/store/slices/user';

// export default ({ navigation }): React.ReactElement => {
export default (): React.ReactElement => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);

  const onSignUpButtonPress = (): void => {
    // navigation && navigation.navigate('SignUp2');
    router && router.navigate('/sign-up');
  };

  const onForgotPasswordButtonPress = (): void => {
    // navigation && navigation.navigate('ForgotPassword');
    router && router.navigate('/forgot-password');
  };

  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const onSignIn = (): void => {
    dispatch(login({name: 'John', surname: 'Doe', birth: new Date(1989, 3, 5).getTime(), sex: 'male', picture: ''}));
    router.replace('/')
  }

  const renderPasswordIcon = (props): ReactElement => (
    <TouchableWithoutFeedback onPress={onPasswordIconPress}>
      <Icon {...props} name={passwordVisible ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          category='h1'
          status='control'>
          Hello
        </Text>
        <Text
          style={styles.signInLabel}
          category='s1'
          status='control'>
          Sign in to your account
        </Text>
      </View>
      <Layout
        style={styles.formContainer}
        level='1'>
        <Input
          placeholder='Email'
          accessoryRight={PersonIcon}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.passwordInput}
          placeholder='Password'
          accessoryRight={renderPasswordIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
        />
        <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            appearance='ghost'
            status='basic'
            onPress={onForgotPasswordButtonPress}>
            Forgot your password?
          </Button>
        </View>
      </Layout>
      <Button
      onPress={onSignIn}
        style={styles.signInButton}
        size='giant'>
        SIGN IN
      </Button>
      <Button
        style={styles.signUpButton}
        appearance='ghost'
        status='basic'
        onPress={onSignUpButtonPress}>
        Don't have an account? Create
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 216,
    backgroundColor: 'color-primary-default',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginHorizontal: 16,
  },
  signUpButton: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});
