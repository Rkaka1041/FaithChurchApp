import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../screens/SplashScreen';
import AdminDashboard from '../screens/AdminDashboard';
import ApproveMembers from '../screens/ApproveMembers';
import CreateEvent from '../screens/CreateEvent';
import ViewPrayerRequests from '../screens/ViewPrayerRequests';
import VisitorForms from '../screens/VisitorForms';
import DonationDetails from '../screens/DonationDetails';
import CommunityFeed from '../screens/CommunityFeed';
import VisitorInfoScreen from '../screens/VisitorInfoScreen';
import VisitorFormScreen from '../screens/VisitorFormScreen';
import MemberDashboard from '../screens/MemberDashboard';
import AdminLogin from '../screens/AdminLogin';
import HomeScreen from '../screens/HomeScreen';
import PrayerRequestForm from '../screens/PrayerRequestForm';
import VerifyEmailOtp from '../screens/VerifyEmailOtp';
import VerifyPhoneOtp from '../screens/VerifyPhoneOtp';
import ProfilePhotoUpload from '../screens/ProfilePhotoUpload';
import CreateAdminAccount from '../screens/CreateAdminAccount';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '', headerBackTitle: 'Back' }} />
        <Stack.Screen name="AdminLogin" component={AdminLogin} options={{ title: 'Admin Login', headerBackTitle: 'Back' }} />
        <Stack.Screen name="CreateAdminAccount" component={CreateAdminAccount} options={{ title: 'New Admin Signup', headerBackTitle: 'Back' }} />
        <Stack.Screen name="VerifyEmailOtp" component={VerifyEmailOtp} options={{ title: 'Email OTP', headerBackTitle: 'Back' }} />
        <Stack.Screen name="VerifyPhoneOtp" component={VerifyPhoneOtp} options={{ title: 'Phone OTP', headerBackTitle: 'Back' }} />
        <Stack.Screen name="ProfilePhotoUpload" component={ProfilePhotoUpload} options={{ title: 'Upload Photo', headerBackTitle: 'Back' }} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ title: 'Admin Dashboard', headerBackTitle: 'Back' }} />
        <Stack.Screen name="ApproveMembers" component={ApproveMembers} options={{ title: 'Approve Members', headerBackTitle: 'Back' }} />
        <Stack.Screen name="CreateEvent" component={CreateEvent} options={{ title: 'Create Event', headerBackTitle: 'Back' }} />
        <Stack.Screen name="ViewPrayerRequests" component={ViewPrayerRequests} options={{ title: 'Prayer Requests', headerBackTitle: 'Back' }} />
        <Stack.Screen name="VisitorForms" component={VisitorForms} options={{ title: 'Visitor Submissions', headerBackTitle: 'Back' }} />
        <Stack.Screen name="DonationDetails" component={DonationDetails} options={{ title: 'Donation Info', headerBackTitle: 'Back' }} />
        <Stack.Screen name="CommunityFeed" component={CommunityFeed} options={{ title: 'Community Feed', headerBackTitle: 'Back' }} />
        <Stack.Screen name="VisitorInfo" component={VisitorInfoScreen} options={{ title: 'Visitor Info', headerBackTitle: 'Back' }} />
        <Stack.Screen name="VisitorForm" component={VisitorFormScreen} options={{ title: 'Join as Visitor', headerBackTitle: 'Back' }} />
        <Stack.Screen name="MemberDashboard" component={MemberDashboard} options={{ title: 'Member Dashboard', headerBackTitle: 'Back' }} />
        <Stack.Screen name="PrayerRequestForm" component={PrayerRequestForm} options={{ title: 'Prayer Request', headerBackTitle: 'Back' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;