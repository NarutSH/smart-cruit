import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { format } from "date-fns";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    width: "100%",
    fontSize: "18px",
    fontFamily: "THSarabunNew",
    padding: 10,
  },
  title: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "rgb(0,63,95)",
    color: "white",
  },
  section: {
    padding: 10,
  },
  header: {
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    margin: 2,
  },
  rowText: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 2,
  },
  headText: {
    minWidth: "150px",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  textTitle: {
    fontWeight: "bold",
  },
});

const RowText = ({ label, value }) => {
  return (
    <View style={styles.rowText}>
      <Text style={styles.headText}>{label}</Text>
      <Text style={styles.headText}>: {value}</Text>
    </View>
  );
};

const MyDocument = ({ data }) => {
  console.log(data);

  const displayContact = (
    <View>
      <View style={styles.title}>
        <Text>PERSONAL PROFILE</Text>
      </View>
      <View style={styles.rowText}>
        <View>
          <RowText
            label="Fullname"
            value={`${data?.contact?.firstName} ${data?.contact?.lastName}`}
          />
          <RowText
            label="Date of birth"
            value={
              data?.contact?.dob
                ? format(data?.contact?.dob, "dd MMMM yyyy")
                : ""
            }
          />
          <RowText label="Email" value={data?.contact?.email} />
          <RowText label="Tel" value={data?.contact?.tel} />
        </View>

        <View>
          <Image
            src={data?.contact?.profileImg}
            style={{
              width: "200px",
            }}
          />
        </View>
      </View>
    </View>
  );

  const displayExperience = (
    <View>
      <View style={styles.title}>
        <Text>EXPERIENCE</Text>
      </View>
      {!!data?.experiences?.length &&
        data?.experiences?.map((el, index) => {
          return (
            <View key={index} style={{ marginBottom: 5 }}>
              <View style={styles.flexRow}>
                <Text style={{ width: "50%" }}>
                  {el.startDate
                    ? format(new Date(el.startDate), "MMM yyyy")
                    : "-"}{" "}
                  -{" "}
                  {el.endDate ? format(new Date(el.endDate), "MMM yyyy") : "-"}
                </Text>
                <Text>Position : {el.position} </Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={{ width: "50%" }}>
                  <Text style={styles.textTitle}>Company</Text> : {el.hirerName}{" "}
                </Text>
                <Text>Location : {el.location} </Text>
              </View>
              <Text>Description</Text>
              <Text>{el.remark}</Text>
            </View>
          );
        })}
    </View>
  );
  const displayEducation = (
    <View>
      <View style={styles.title}>
        <Text>EDUCATION</Text>
      </View>
      {!!data?.education?.length &&
        data?.education?.map((el, index) => {
          return (
            <View key={index} style={{ marginBottom: 5 }}>
              <View style={styles.flexRow}>
                <Text style={{ width: "50%" }}>
                  {el.graduatedDate
                    ? format(new Date(el.graduatedDate), "MMM yyyy")
                    : "-"}{" "}
                </Text>
                <Text>Degree : {el.degree}</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={{ width: "50%" }}>School: {el.schoolName}</Text>
                <Text>Location : {el.location}</Text>
              </View>
              <Text>Description</Text>
              <Text>{el.remark}</Text>
            </View>
          );
        })}
    </View>
  );

  const displayLanguage = (
    <View>
      <View style={styles.title}>
        <Text>LANGUAGE</Text>
      </View>
      {!!data?.language?.length &&
        data?.language?.map((el, index) => {
          return (
            <View key={index} style={{ ...styles.flexRow, marginBottom: 5 }}>
              <Text style={{ width: "50%" }}>Language: {el.languageName}</Text>
              <Text>Level : {el.languageLevel} / 5</Text>
            </View>
          );
        })}
    </View>
  );

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>SMART CRUIT</Text>
          <Text>{data?.contact?.firstName}</Text>
        </View>
        {displayContact}
        {!!data?.experiences?.length && displayExperience}
        {!!data?.education?.length && displayEducation}
        {!!data?.language?.length && displayLanguage}
      </Page>
    </Document>
  );
};

const ResumeDoc = ({ hookForm }) => {
  const { watch } = hookForm;
  const watchValue = watch();

  return (
    <PDFViewer width="100%" height="1000px">
      <MyDocument data={watchValue} />
    </PDFViewer>
  );
};

export default ResumeDoc;
