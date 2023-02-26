import { Paper, Box, Typography, Grid } from "@mui/material";
import { format, differenceInYears } from "date-fns";
import React from "react";
import {
  optionAvailability,
  optionCarLicense,
  optionMarital,
} from "../data/data";
import { matchOption } from "../services/global-function";

const RowText = ({ label, content, prefix = ":" }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Typography variant="caption">{label}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="caption" whiteSpace="nowrap">
          {prefix} {content}
        </Typography>
      </Grid>
    </Grid>
  );
};

const ResumePaper = ({ hookForm }) => {
  const { watch } = hookForm;
  const watchValue = watch();

  const styles = {
    banner: {
      padding: "10px",
      marginBottom: "10px",
      backgroundColor: "rgb(0,63,95)",
      color: "white",
    },
  };

  const displayHeader = (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <img src="/assets/images/logo2.png" alt="logo" height={40} />
      <Typography variant="h5">
        {watchValue?.contact?.firstName} ID1234
      </Typography>
    </Box>
  );

  const displayContact = (
    <Box>
      <Typography sx={styles.banner}>PERSONAL PROFILE</Typography>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <RowText
                label="Date of birth"
                content={
                  !!watchValue?.contact?.dob &&
                  format(watchValue?.contact?.dob, "dd MMM yyyy")
                }
              />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <RowText
                label="Age"
                content={
                  !!watchValue?.contact?.dob &&
                  differenceInYears(new Date(), watchValue?.contact?.dob)
                }
              />
            </Grid>
            <Grid item xs={6}>
              <RowText
                label="Nationality"
                content={watchValue?.contact?.nationality}
              />
            </Grid>
            <Grid item xs={6}>
              <RowText
                label="Maturity"
                content={matchOption(
                  optionMarital,
                  watchValue?.contact?.marital
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <RowText
                label="Car Licensed"
                content={matchOption(
                  optionCarLicense,
                  watchValue?.contact?.carLicense
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <RowText
                label="Language"
                prefix=""
                content={watchValue?.language?.map((el) => {
                  return <Box>: {el.languageName}</Box>;
                })}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <img
            src={
              watchValue?.contact?.profileImg ??
              "/assets/images/blank-profile.png"
            }
            alt="profile"
            style={{
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );

  const displayCareerHighlight = (
    <Box>
      <Typography sx={styles.banner}>CAREER HIGHLIGHT</Typography>
      <Typography variant="body2">
        {watchValue?.career?.careerHighlight}
      </Typography>
      <RowText label="WORK LOCATION	" content={watchValue?.career?.location} />
      <RowText
        label="AVAILABILITY"
        content={matchOption(
          optionAvailability,
          watchValue?.career?.availability
        )}
      />
      <RowText
        label="AREA OF INTEREST"
        content={watchValue?.career?.areaOfInterest}
      />
    </Box>
  );

  const displayEducation = (
    <Box>
      <Typography sx={styles.banner}>EDUCATION</Typography>
      {!!watchValue?.education?.length &&
        watchValue?.education?.map((el, index) => {
          return (
            <Box key={index} style={{ marginBottom: 5 }}>
              <Box display="flex">
                <Typography variant="body2" style={{ width: "50%" }}>
                  {el.graduatedDate
                    ? format(new Date(el.graduatedDate), "MMM yyyy")
                    : "-"}{" "}
                </Typography>
                <Typography variant="body2">Degree : {el.degree}</Typography>
              </Box>
              <Box display="flex">
                <Typography variant="body2" style={{ width: "50%" }}>
                  School: {el.schoolName}
                </Typography>
                <Typography variant="body2">
                  Location : {el.location}
                </Typography>
              </Box>
              <Typography variant="body2">Description</Typography>
              <Typography variant="body2">{el.remark}</Typography>
            </Box>
          );
        })}
    </Box>
  );
  const displayExperience = (
    <Box>
      <Typography sx={styles.banner}>EXPERIENCE</Typography>
      {!!watchValue?.experiences?.length &&
        watchValue?.experiences?.map((el, index) => {
          return (
            <Box key={index} style={{ marginBottom: 5 }}>
              <Box display="flex">
                <Typography variant="body2" style={{ width: "50%" }}>
                  {el.startDate
                    ? format(new Date(el.startDate), "MMM yyyy")
                    : "-"}{" "}
                  -{" "}
                  {el.endDate ? format(new Date(el.endDate), "MMM yyyy") : "-"}
                </Typography>
                <Typography variant="body2">
                  Position : {el.position}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="body2" style={{ width: "50%" }}>
                  Company: {el.hirerName}
                </Typography>
                <Typography variant="body2">
                  Location : {el.location}
                </Typography>
              </Box>
              <Typography variant="body2">Description</Typography>
              <Typography variant="body2">{el.remark}</Typography>
            </Box>
          );
        })}
    </Box>
  );

  return (
    <Paper className="a4">
      {displayHeader}
      {displayContact}
      {!!watchValue?.career && displayCareerHighlight}
      {!!watchValue?.education && displayEducation}
      {!!watchValue?.experiences && displayExperience}
    </Paper>
  );
};

export default ResumePaper;
