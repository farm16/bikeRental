import React, { useState } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SelectForm from '../SelectForm';
import Switch from '@material-ui/core/Switch';
import CheckoutBox from '../CheckoutBox.js';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%'
  },
  margin: {
    margin: theme.spacing(1)
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    fontSize: '1.5em',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));
function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3'];
}
function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select your Bike.';
    case 1:
      return 'Select your Accessories';
    case 2:
      return 'Select Add-On';
    default:
      return 'Uknown stepIndex';
  }
}

function Form({ products }) {
  //pass props
  const [state, setState] = React.useState({
    checkedA: false,
    checkedB: false
  });
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }
  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }
  function getContent() {
    switch (activeStep) {
      case 0:
        return (
          <div className="row ">
            <div className="col-md-12">
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </div>
            {products.map((product, index) =>
              product.product_type === 'bike' ? (
                <SelectForm
                  product={product}
                  key={index + product}></SelectForm>
              ) : null
            )}
            <div className="col-md-12  py-md-5 py-2">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Check Out' : 'Next'}
              </Button>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="row h-100">
            <div className="col-md-12">
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </div>
            {products.map((product, index) =>
              product.product_type === 'accessory' ? (
                <SelectForm
                  product={product}
                  key={index + product}></SelectForm>
              ) : null
            )}
            <div className="col-md-12  py-md-5 py-2">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Check Out' : 'Next'}
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="row ">
            <div className="col-md-12">
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
            </div>
            <div className="col-md-12">
              <h3>Activate Bike Insurance</h3>
              <Switch
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </div>
            <div className="col-md-12  py-md-5 py-2">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}>
                Back
              </Button>
              <Button
                variant="contained"
                color={
                  activeStep === steps.length - 1 ? 'primary' : 'secondary'
                }
                onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Check Out' : 'Next'}
              </Button>
            </div>
          </div>
        );
      case steps.length:
        return <CheckoutBox />;
      default:
        return <div>Error</div>;
    }
  }
  return (
    <React.Fragment>
      {' '}
      <div className="d-flex">
        <div className="row justify-content-center align-self-center mx-auto w-100">
          {/* ========================CENTER======================== */}
          <div className="container">
            {' '}
            <div className="row ">
              <div className="col-md-12 m-auto bg-light text-center py-md-5 py-2">
                <h1>Rent A Bike</h1>
                <p>(Follow the Steps to reserve your bike)</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 m-auto text-center ">
                {getContent()}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 m-auto  py-md-5 py-2">
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            </div>
          </div>
          {/* ========================CENTER======================== */}
        </div>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = state => ({
  products: state.productsData.products,
  checkout: state.checkoutData
});

export default connect(mapStateToProps)(Form);
