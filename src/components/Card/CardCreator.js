import React from 'react'
import { Dialog, Slide } from '@mui/material';
import { ACTIONS } from '../../shared/constants/Constantes';
import CardForm from './CardForm';
import * as yup from 'yup';
import { Formik } from 'formik';
import { CardContext } from '../../contexts/cardContext/CardContext';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const validationSchema = yup.object({
  title: yup
    .string()
    .required('Required'),
  description: yup
    .string()
    .required('Required'),
  content: yup
    .string()
    .required('Required'),
  price: yup
    .number()
    .required('Required')
    .min(1, 'Must be greater than 0')
    .typeError('Must be a number')
});

const CardCreator = (props) => {
  const {
    showDialog,
    handleOnClose,
    selected,
    updateColeccion,
    title,
    action
  } = props;

  const {onCreate, onUpdate, selected: selectedRow, onShow, onCleanSelection} = React.useContext(CardContext);

  React.useEffect(() => {
    if(selected){
      onShow(selected)
    }
    return () => onCleanSelection();
  },[selected]); // eslint-disable-line

  return (
    <Dialog
      open={showDialog}
      onClose={handleOnClose}
      aria-labelledby='simple-modal-title'
      TransitionComponent={Transition}
      aria-describedby='simple-modal-description'
      maxWidth={'md'}
      fullWidth
    >
      <Formik
        initialStatus={true}
        enableReinitialize={true}
        validateOnBlur={false}
        initialValues={{
          _id: selectedRow?._id??'',
          title: selectedRow?.title??'',
          description: selectedRow?.description??'',
          content: selectedRow?.content??'',
          price: selectedRow?.price??'',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting}) => {
          setSubmitting(true);
          if (action === ACTIONS.create) {
            onCreate(data, handleOnClose, updateColeccion);
          } else if (action === ACTIONS.edit) {
            if (selected) {
              onUpdate(data, handleOnClose, updateColeccion);
            }
          }
          setSubmitting(false);
        }}>
        {({initialValues, setFieldValue}) => (
          <CardForm
            setFieldValue={setFieldValue}
            handleOnClose={handleOnClose}
            title={title}
            action={action}
            initialValues={initialValues}
          />
        )}
      </Formik>
    </Dialog>
  );
} 

export default CardCreator;