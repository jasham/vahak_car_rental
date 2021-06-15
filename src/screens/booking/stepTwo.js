import * as React from "react";
import { Box, Button, Container, Divider, makeStyles, LinearProgress, InputAdornment } from "@material-ui/core";
import * as Yup from "yup";
import Header from "../../components/layout/header";
import StageComponent from "../../components/stageComponent";
import TextComponent from "../../components/textComponent";
import { useHistory } from "react-router-dom";
import CustomButton from "../../components/custombutton";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import { Formik, Form, } from "formik";
import NoBorderInput from "../../components/noBorderInput";
import Checkbox from '../../components/checkbox'

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
      width: "400px",
    },
  },
  priceStyle : {
    width : 186,
    fontSize : 40,
  },
  checkBoxStyle : {
    display : "flex",
    flexDirection : "row",
    justifyContent : "center"
  },
  mainWrapper : {
    [theme.breakpoints.down('sm')] : {
      width : 300,
    },
    [theme.breakpoints.up('sm')] : {
      width : 400,
    }
  }
}));

const StepTwo = () => {
  const classes = useStyles();

  const validationSchema = Yup.object({
    negrate: Yup.string().required("Required"),
    rent_negotiate : Yup.bool()
  });

  const onClickEdit = () => {
    history.push({
      pathname: "/",
      state: { journeydetails: { ...history.location.state.journeydetails } },
    });
  };

  const history = useHistory();

  let nerate, rent_negot

  if(Object.keys(history.location.state.journeydetails).length > 0){
    nerate = history.location.state.journeydetails.negrate
    rent_negot = history.location.state.journeydetails.rent_negotiate
  }

  return (
    <Box>
      <Header />
      <StageComponent>
        <TextComponent variant="h5" color="#FFFFFF" fWeight={"600"}>
          Place your Bid(2/5 step)
        </TextComponent>
      </StageComponent>
      <Container>
        <Box display="flex" justifyContent="center" paddingTop={5} paddingBottom={10}>
          <Formik
            initialValues={{
              negrate: nerate || "",
              rent_negotiate : rent_negot || false
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                history.push({
                  pathname: "/stepthree",
                  state: { journeydetails: { ...history.location.state.journeydetails, ...values } },
                });
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => <Form>
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
                      {history.location.state && history.location.state.journeydetails.source_location} -{" "}
                      {history.location.state && history.location.state.journeydetails.destination}
                    </TextComponent>
                  </Box>
                  <Box>
                    <TextComponent variant="body2">
                      {history.location.state && history.location.state.journeydetails.noOfTraveller}{" "}
                      Persons, {history.location.state && history.location.state.journeydetails.car_type}
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
                    <NoBorderInput 
                      name="negrate"
                      type="text"
                      required={true} 
                      startAdornment={<InputAdornment position="start"><TextComponent variant="h3">₹</TextComponent></InputAdornment>}
                      placeholder="000000"
                      className={classes.priceStyle}
                    />
                  </Box>
                  <Box paddingBottom={5} display="flex" justifyContent="center">
                    <Checkbox label="Rate Negotiable" name="rent_negotiate" />
                    
                  </Box>
                  {isSubmitting && <LinearProgress />}
                  <Button
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={submitForm}
                    className={classes.button}
                  >
                    Next
                  </Button>
                </Box>
              </Form>
            }
          </Formik>
        </Box>
      </Container>
    </Box>
  );
};

export default StepTwo;
