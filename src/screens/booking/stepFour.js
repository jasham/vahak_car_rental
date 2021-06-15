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
import OtpInput from 'react-otp-input';


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
    fontSize: "12px",
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
    paddingLeft: 16,
    paddingRight: 16,
    display: "flex",
    alignItems: "center",
  },
  updatesStyle: {
    "& .MuiTypography-body1": {
      fontSize: "12px !important",
    },
  },
  otpCSS : {
      borderLeft : 0,
      borderRight : 0,
      borderTop : 0,
      fontSize : 43,
      marginRight : 15,
      borderColor : "#E9E9E9",
      marginBottom : 20
  }
}));

const StepFour = () => {
  const classes = useStyles();
    const [otpVal, setOtp] = React.useState()
  const validationSchema = Yup.object({
    otpValue :  Yup.string(),
  });

  const onClickEdit = () => {
    history.push({
      pathname: "/",
      state: { journeydetails: { ...history.location.state.journeydetails } },
    });
  };

  const history = useHistory();

  const handleOTP = (value) => {
    setOtp(value)
  }

  const onClickNoEdit = () => {
    history.push({
      pathname: "/stepthree",
      state: { journeydetails: { ...history.location.state.journeydetails } },
    });
  }

  return (
    <Box>
      <Header />
      <StageComponent>
        <TextComponent variant="h5" color="#FFFFFF" fWeight={"600"}>
          Place your Bid(4/5 step)
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
              otpValue : ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                if(otpVal === "1234"){                    
                    history.push({
                        pathname: "/stepfive",
                        state: {
                            journeydetails: {
                            ...history.location.state.journeydetails,
                            ...values,
                            },
                        },
                        });
                    }
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
                  <Box paddingTop={3} paddingBottom={3}>
                    <Divider />
                  </Box>

                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingBottom={3}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                      <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <TextComponent variant="caption" color="#979797">
                          BID DETAILS
                        </TextComponent>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                      >
                        <TextComponent variant="body2">
                          +91-{history.location.state.journeydetails.mob_number}
                        </TextComponent>
                      </Box>
                      <Box>
                        <TextComponent variant="body2">
                          {history.location.state.journeydetails.name}
                        </TextComponent>
                      </Box>
                      <Box>
                        <TextComponent variant="body2">
                          {history.location.state.journeydetails.remark}
                        </TextComponent>
                      </Box>
                    </Box>
                    <Box display="flex" flexDirection="column">
                      <TextComponent variant="h5" fweight={600}>
                        ₹{history.location.state.journeydetails.negrate}
                      </TextComponent>
                      <TextComponent variant="caption" color="#979797">
                        Fixed Price
                      </TextComponent>
                    </Box>
                  </Box>
                  <Box paddingBottom={3}>
                    <Divider />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    paddingBottom={3}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                    >
                        <Box marginBottom={3}>
                        <TextComponent variant="body2">
                            We’ve sent an OTP to your mobile number, Please enter it
                            below to submit your bid{" "}
                            <TextComponent
                            component="span"
                            variant="body2"
                            fweight={600}
                            >
                            {history.location.state.journeydetails.mob_number}
                            </TextComponent>
                            <CustomButton
                            startIcon={<CreateOutlinedIcon fontSize="small" />}
                            onClick={onClickNoEdit}
                            >
                            <TextComponent
                                variant="body2"
                                color="#0D3FE5"
                                fweight="500"
                            >
                                Edit
                            </TextComponent>
                            </CustomButton>
                        </TextComponent>
                      </Box>
                    <OtpInput
                        value={otpVal}
                        onChange={handleOTP}
                        numInputs={4}
                        separator={<span> </span>}
                        inputStyle={classes.otpCSS}
                        name="otpValue"
                    />  
                    <CustomButton color="primary" stylecls={{ fontSize : '10px', textDecoration : "underline", padding : "5px"}}>
                        Resend OTP Again
                    </CustomButton>   
                    </Box>
                  </Box>


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

export default StepFour;
