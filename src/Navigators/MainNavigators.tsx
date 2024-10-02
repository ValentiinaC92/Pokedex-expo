import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "../Pages/HomePage/Homepage";
import Detail from "../Pages/Detail/Detail.page";
import Search from "../Pages/Search/Search.page";
import { Text, TouchableOpacity } from "react-native";
import { MainStackParamList } from "../Modules/domain/Navigators";

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Homepage"
                component={Homepage}
                options={() => ({
                    headerTitle: "Pokedex",
                    headerLargeTitle: true,
                })}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
            />
            <Stack.Group screenOptions={{ presentation: "modal" }}>
                <Stack.Screen name="Search" component={Search} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default MainNavigator