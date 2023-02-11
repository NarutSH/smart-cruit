import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Controller } from "react-hook-form";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { toBase64 } from "../../services/global-function";

const ContactEl = ({ hookForm }) => {
  const [image64, setImage64] = useState("");
  const { control, setValue } = hookForm;
  const {
    register,
    formState: { errors },
  } = hookForm;

  const styles = {
    input: {
      backgroundColor: "white",
    },
    imageInputContainer: {
      position: "relative",
      width: "100px",
      margin: "auto",
    },
    uploadInput: {
      position: "absolute",
      bottom: "0",
      right: "0",
      cursor: "pointer",
    },
  };

  const onUploadImage = async (ev) => {
    const file = ev.target.files[0];

    const base64 = await toBase64(file);

    setImage64(base64);
    setValue("contact.profileImg", base64);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        ข้อมูลการติดต่อ
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box sx={styles.imageInputContainer}>
            <Avatar
              alt="Profile"
              src={image64}
              sx={{ width: "100px", height: "100px" }}
            />

            <label style={styles.uploadInput}>
              <CameraAltIcon />
              <input type="file" onChange={onUploadImage} accept="image/*" />
            </label>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={!!errors?.contact?.firstName}
            required
            id="firstName"
            label="ชื่อจริง"
            fullWidth
            style={styles.input}
            {...register("contact.firstName")}
          />
          <span className="error-message">
            {errors?.contact?.firstName?.message}
          </span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="นามสกุล"
            fullWidth
            style={styles.input}
            error={!!errors?.contact?.lastName}
            {...register("contact.lastName")}
          />
          <span className="error-message">
            {errors?.contact?.lastName?.message}
          </span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={!!errors?.contact?.email}
            label="อีเมล"
            fullWidth
            style={styles.input}
            {...register("contact.email")}
          />
          <span className="error-message">
            {errors?.contact?.email?.message}
          </span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={!!errors?.contact?.tel}
            label="เบอร์โทรศัพท์"
            fullWidth
            autoComplete="tel"
            style={styles.input}
            {...register("contact.tel")}
          />
          <span className="error-message">{errors?.contact?.tel?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="contact.dob"
            render={({ field }) => {
              return (
                <DatePicker
                  required
                  label="Date of birth"
                  {...field}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              );
            }}
          />

          <span className="error-message">{errors?.contact?.dob?.message}</span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={!!errors?.contact?.nationality}
            label="Nationality"
            fullWidth
            style={styles.input}
            {...register("contact.nationality")}
          />
          <span className="error-message">
            {errors?.contact?.nationality?.message}
          </span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="contact.marital"
            render={({ field }) => {
              return (
                <FormControl fullWidth>
                  <InputLabel id="marital-select">Marital Status</InputLabel>
                  <Select
                    labelId="marital-select"
                    label="Marital Status"
                    {...field}
                  >
                    <MenuItem value={1}>ผ่านแล้ว</MenuItem>
                    <MenuItem value={2}>ยังไม่ผ่าน</MenuItem>
                  </Select>
                </FormControl>
              );
            }}
          />

          <span className="error-message">
            {errors?.contact?.marital?.message}
          </span>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            control={control}
            name="contact.carLicense"
            render={({ field }) => {
              return (
                <FormControl fullWidth>
                  <InputLabel id="car-license-select">Car License</InputLabel>
                  <Select
                    labelId="car-license-select"
                    label="Car License"
                    {...field}
                  >
                    <MenuItem value={1}>มี</MenuItem>
                    <MenuItem value={2}>มี, มีรถยนต์ส่วนตัว</MenuItem>
                    <MenuItem value={3}>ไม่มี</MenuItem>
                  </Select>
                </FormControl>
              );
            }}
          />

          <span className="error-message">
            {errors?.contact?.carLicense?.message}
          </span>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactEl;
