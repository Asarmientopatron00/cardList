import React from 'react'
import { Box, Button } from '@mui/material';
import { Form } from 'formik';
import { ACTIONS } from '../../shared/constants/Constantes';
import { mainStyles } from '../../shared/styles/mainStyles';
import MyTextField from '../../shared/components/MyTextField';

const CardForm = (props) => {
  const {
    action,
    title,
    handleOnClose
  } = props;

  return (
    <Form noValidate autoComplete='off'>
      <Box sx={{padding: 5}}>
        <Box
          fontSize={20}
          marginBottom={2}
          fontWeight={'bold'}>
          {title}
        </Box>
        <Box style={styles.container}>
          <MyTextField
            label='Title'
            name='title'
            required
          />
          <MyTextField
            label='Description'
            name='description'
            required
          />
          <MyTextField
            label='Price'
            name='price'
            required
          />
          <MyTextField
            label='Content'
            name='content'
            multiline
            variant='outlined'
            rows={4}
            required
          />
        </Box>
      </Box>
      <Box sx={mainStyles.bottomsGroup}>
        <Button
          style={{...mainStyles.btnRoot, ...mainStyles.btnSecundary}}
          onClick={handleOnClose}>
          Cancell
        </Button>
        {action !== ACTIONS.ver && (
          <Button
            style={{...mainStyles.btnRoot, ...mainStyles.btnPrymary}}
            variant='contained'
            type='submit'>
            Save
          </Button>
        )}
      </Box>
    </Form>
  );
} 

const styles = {
  container: {
    display: 'grid',
    gap: 10
  }
}
export default CardForm;