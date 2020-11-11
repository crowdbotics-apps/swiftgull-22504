import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList171111Navigator from '../features/NotificationList171111/navigator';
import Settings171110Navigator from '../features/Settings171110/navigator';
import Settings171102Navigator from '../features/Settings171102/navigator';
import UserProfile171100Navigator from '../features/UserProfile171100/navigator';
import UserProfile171069Navigator from '../features/UserProfile171069/navigator';
import Tutorial171068Navigator from '../features/Tutorial171068/navigator';
import NotificationList171040Navigator from '../features/NotificationList171040/navigator';
import Settings171039Navigator from '../features/Settings171039/navigator';
import Settings171031Navigator from '../features/Settings171031/navigator';
import UserProfile171029Navigator from '../features/UserProfile171029/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList171111: { screen: NotificationList171111Navigator },
Settings171110: { screen: Settings171110Navigator },
Settings171102: { screen: Settings171102Navigator },
UserProfile171100: { screen: UserProfile171100Navigator },
UserProfile171069: { screen: UserProfile171069Navigator },
Tutorial171068: { screen: Tutorial171068Navigator },
NotificationList171040: { screen: NotificationList171040Navigator },
Settings171039: { screen: Settings171039Navigator },
Settings171031: { screen: Settings171031Navigator },
UserProfile171029: { screen: UserProfile171029Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
