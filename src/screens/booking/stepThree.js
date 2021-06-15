import * as React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  makeStyles,
  LinearProgress,
  InputAdornment,
} from "@material-ui/core";
import * as Yup from "yup";
import Header from "../../components/layout/header";
import StageComponent from "../../components/stageComponent";
import TextComponent from "../../components/textComponent";
import { useHistory } from "react-router-dom";
import CustomButton from "../../components/custombutton";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { Formik, Form } from "formik";
import TextfieldWrapper from "../../components/customTextField";
import Checkbox from "../../components/checkbox";
import WappImg from './whatsapp-symbol.svg'

const useStyles = makeStyles((theme) => ({
  locationInput: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  sourceStyle: {
    marginRight: "20px",

    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
  },
  destinationStyle: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "250px",
    },
  },
  carSelect: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "520px",
    },
  },
  topWrapper: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: 80,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  noOfTraveller: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      width: "520px",
    },
  },
  button: {
    backgroundColor: "#0F53FB",
    fontWeight: 400,
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
  },
  priceStyle: {
    width: 186,
    fontSize: 40,
  },
  checkBoxStyle: {
      fontSize : "12px"
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
  },
  mainWrapper: {
    [theme.breakpoints.down("sm")]: {
      width: 300,
    },
    [theme.breakpoints.up("sm")]: {
      width: 400,
    },
  },

  nameStyle: {
    marginBottom: 15,
  },
  remarkStyle: {
    marginBottom: 15,
  },
  mobileNumber: {
    "& .MuiOutlinedInput-root": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  whatsupStyle: {
    height: 46,
    backgroundColor: "#0000000D",
    marginBottom: 15,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    paddingLeft : 16,
    paddingRight : 16,
    display : "flex",
    alignItems : "center"
  },
  updatesStyle : {
      '& .MuiTypography-body1' : {
        fontSize : "12px !important",
      }
  }
}));

const StepThree = () => {
  const classes = useStyles();
  const history = useHistory();

  const validationSchema = Yup.object({
    mob_number: Yup.string().required("Required"),
    name : Yup.string().required("Required"),
    remark : Yup.string()
  });

  const onClickEdit = () => {
    history.push({
      pathname: "/",
      state: { journeydetails: { ...history.location.state.journeydetails } },
    });
  };
  let mnumber, nam, remar_k;

  if(Object.keys(history.location.state.journeydetails).length > 0){
    mnumber = history.location.state.journeydetails.mob_number
    nam = history.location.state.journeydetails.name
    remar_k = history.location.state.journeydetails.remark
  }


  return (
    <Box>
      <Header />
      <StageComponent>
        <TextComponent variant="h5" color="#FFFFFF" fWeight={"600"}>
          Place your Bid(3/5 step)
        </TextComponent>
      </StageComponent>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          paddingTop={5}
          paddingBottom={10}
        >
          <Formik
            initialValues={{
                mob_number: mnumber || "",
                name : nam || "",
                remark : remar_k || ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                history.push({
                  pathname: "/stepfour",
                  state: {
                    journeydetails: {
                      ...history.location.state.journeydetails,
                      ...values,
                    },
                  },
                });
                // alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Box
                  className={classes.mainWrapper}
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Box
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <TextComponent variant="caption" color="#979797">
                        JOURNEY DETAILS
                      </TextComponent>
                    </Box>
                    <CustomButton
                      startIcon={<CreateOutlinedIcon fontSize="small" />}
                      onClick={onClickEdit}
                    >
                      <TextComponent
                        variant="body2"
                        color="#0D3FE5"
                        fweight="500"
                      >
                        Edit
                      </TextComponent>
                    </CustomButton>
                  </Box>
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <TextComponent variant="body2">
                      {history.location.state.journeydetails.source_location} -{" "}
                      {history.location.state.journeydetails.destination}
                    </TextComponent>
                  </Box>
                  <Box>
                    <TextComponent variant="body2">
                      {history.location.state.journeydetails.noOfTraveller}{" "}
                      Persons, {history.location.state.journeydetails.car_type}
                    </TextComponent>
                  </Box>
                  <Box paddingTop={3}>
                    <Divider />
                  </Box>
                  <Box
                    paddingTop={5}
                    paddingBottom={7}
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <TextComponent variant="h4">
                      ₹{history.location.state.journeydetails.negrate}
                    </TextComponent>
                  </Box>
                  <Box paddingBottom={5} display="flex" justifyContent="center">
                    <Checkbox label="Rate Negotiable" name="rent_negotiate" />
                  </Box>
                  <Box marginBottom={5}>
                    <Divider />
                  </Box>
                  <TextfieldWrapper
                    type="text"
                    label="Enter your 10 digits Mobile Number"
                    name="mob_number"
                    required={true}
                    className={classes.mobileNumber}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+91 - </InputAdornment>
                      ),
                    }}
                  />
                  <Box className={classes.whatsupStyle} display="flex" flexDirection="row" alignItems="center">
                    <Checkbox size="small" label="Get updates on" name="rent_negotiate" checkboxstyle={classes.checkBoxStyle} />
                    <img src="/static/media/whatsapp-symbol.svg" alt="whatsapp-symbol.svg" style={{ marginRight : "5px"}} /> <TextComponent variant="caption" color="#40C351">WhatsApp</TextComponent>
                  </Box>

                  <TextfieldWrapper
                    type="text"
                    label="Enter your Name"
                    name="name"
                    className={classes.nameStyle}
                  />

                  <TextfieldWrapper
                    type="text"
                    label="Enter Remarks (optional)"
                    name="remark"
                    className={classes.remarkStyle}
                  />

                  {isSubmitting && <LinearProgress />}
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    className={classes.button}
                  >
                    Verify via OTP
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default StepThree;
