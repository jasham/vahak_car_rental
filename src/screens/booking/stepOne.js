import * as React from "react";
import { Formik, Form } from "formik";
import {
  Box,
  Button,
  Container,
  LinearProgress,
  makeStyles,
} from "@material-ui/core";
import * as Yup from "yup";
import Header from "../../components/layout/header";
import StageComponent from "../../components/stageComponent";
import TextComponent from "../../components/textComponent";
import CustomSelect from "../../components/select";
import '../../index.css'
import { useHistory } from 'react-router-dom'
import TextfieldWrapper from "../../components/customTextField";

const useStyles = makeStyles((theme) => ({
  locationInput: {
    marginBottom : 15,
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
      marginBottom : 15,
    },
    [theme.breakpoints.up("sm")]: {
      width: "250px",
      marginBottom : 0
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
    marginBottom : 15,
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
    marginBottom : 15,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
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
      width: "520px",
    },
  },
}));

const CAR_TYPE = [ "HatchBack","Sedan","SUV"]

const StepOne = () => {
  const classes = useStyles();
  const history = useHistory();
  
  let sLocation, desti, cType, noOfTrav, allVal

  if(history.location.state){
    if(Object.keys(history.location.state).length > 0){
        if(Object.keys(history.location.state.journeydetails).length > 0 ){
          sLocation = history.location.state.journeydetails.source_location
          desti = history.location.state.journeydetails.destination
          cType = history.location.state.journeydetails.car_type
          noOfTrav = history.location.state.journeydetails.noOfTraveller
          allVal = {...history.location.state.journeydetails}
      }
    }
  }

  const validationSchema = Yup.object({
    source_location: Yup.string().required("Required"),
    destination: Yup.string().required("Required"),
    car_type : Yup.string().required("Required"),
    noOfTraveller : Yup.string()
  });

  return (
    <Box>
      <Header />
      <StageComponent>
        <TextComponent variant="h5" color="#FFFFFF" fweight="600">
          Place your Bid(1/5 step)
        </TextComponent>
      </StageComponent>
      <Container>
        <Box display="flex" justifyContent="center" marginBottom={5}>
          <Formik
            initialValues={{
              source_location: sLocation || "" ,
              destination: desti || "",
              noOfTraveller : noOfTrav || "",
              car_type : cType || ""
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                history.push({
                  pathname: '/steptwo',
                  state: { journeydetails: {...values, ...allVal} }
                })
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form>
                <Box className={classes.topWrapper}>
                  <Box className={classes.locationInput}>
                    <TextfieldWrapper 
                      name="source_location"
                      type="text"
                      label="Source Location"
                      required={true} 
                      className={classes.sourceStyle}
                    />
                    <TextfieldWrapper 
                      type="text"
                      label="Destination"
                      name="destination"
                      required={true}
                      className={classes.destinationStyle}
                    />
                  </Box>
                  <CustomSelect
                    name="car_type"
                    options={CAR_TYPE}
                    label="Enter Car type"
                    required={true}
                    className={classes.carSelect}
                  />
                  <TextfieldWrapper 
                    type="text"
                    label="No of Travellers"
                    name="noOfTraveller"
                    className={classes.noOfTraveller}
                  />
                  {isSubmitting && <LinearProgress />}
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    className={classes.button}
                  >
                    Enter Bid Details
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

export default StepOne
