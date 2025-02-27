import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date, type) => {
    console.log(date, type);
    if (type === "START_DATE") {
      setStartDate(moment(date));
    } else {
      setEndDate(moment(date));
    }
  };

  const onDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show(
        "Please select the Start and End Date",
        ToastAndroid.LONG
      );
      return;
    }
    const totalNumberOfDays = endDate.diff(startDate, "days");
    console.log(totalNumberOfDays + 1);
    setTripData((prevData) => ({
      ...prevData,
      startDate: startDate,
      endDate: endDate,
      totalNumberOfDays: totalNumberOfDays + 1,
    }));
    router.push("/create-trip/select-budget");
  };

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 25,
          marginTop: 20,
        }}
      >
        Travel Dates
      </Text>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={7}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY,
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE,
          }}
        />
      </View>

      <TouchableOpacity
        onPress={onDateSelectionContinue}
        style={{
          padding: 15,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 40,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontFamily: "outfit-medium",
            fontSize: 15,
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
