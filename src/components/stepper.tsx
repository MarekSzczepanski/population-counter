import { Grid, Stepper, Step, StepLabel } from '@mui/material';

const steps = ['Countries', 'Regions', 'Decades', 'Results'];

const StepperComponent = ({
  activeStep,
}: {
  activeStep: number;
}): JSX.Element => {
  return (
    <Grid
      pt={3}
      pb={3}
      sx={{
        backgroundColor: 'white',
        border: '2px solid #ddd',
        borderRadius: '20px',
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label: string) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Grid>
  );
};

export default StepperComponent;
