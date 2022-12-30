import React from 'react'
import { ACTIONS, CREATE, DELETE, UPDATE } from '../../shared/constants/Constantes';
import { mainStyles } from '../../shared/styles/mainStyles';
import MessageView from '../../shared/components/MessageView';
import { Box, Button, Paper } from '@mui/material';
import CardCreator from './CardCreator';
import { CommonContext } from '../../contexts/commonContext/commonContext';
import { CardContext } from '../../contexts/cardContext/CardContext';
import Swal from 'sweetalert2';

const title = 'Card List';

const CardView = (props) => {
  const {
    id,
    title,
    description,
    content,
    price,
    handleOnDelete,
    handleOnUpdate
  } = props;

  return (
    <Box sx={styles.cardContainer}>
      <Box sx={styles.cardTitle}>{title}</Box>
      <Box sx={styles.cardDescription}>{description}</Box>
      <Box sx={styles.cardContent}>{content}</Box>
      <Box sx={styles.cardPrice}>USD${price}</Box>
      <Box sx={styles.cardButtonsContainer}>
        <Button
          style={{...mainStyles.btnRoot, ...mainStyles.btnSecundary}}
          onClick={() => handleOnDelete(id)}>
          Delete
        </Button>
        <Button
          style={{...mainStyles.btnRoot, ...mainStyles.btnPrymary}}
          variant='contained'
          onClick={() => handleOnUpdate(id)}
        >
          Edit
        </Button>
      </Box>
    </Box>
  );
}

const Card = () => {
  const [showDialog, setShowDialog] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const [action, setAction] = React.useState(ACTIONS.create);
  const {message, error, messageType} = React.useContext(CommonContext);
  const {rows, getList, onDelete} = React.useContext(CardContext);

  React.useEffect(() => {
    getList();
  },[]) // eslint-disable-line

  React.useEffect(() => {
    if (message && messageType === DELETE) {
      Swal.fire('Deleted', message, 'success');
      updateColeccion();
    }
  }, [message, messageType]); // eslint-disable-line
  
  const handleOnClose = () => {
    setShowDialog(false)
  }
  
  const handleOnCreate = () => {
    setAction(ACTIONS.create)
    setSelected(0);
    setShowDialog(true);
  }

  const updateColeccion = () => {
    getList();
  }

  const handleOnDelete = (id) => {
    Swal.fire({
      title: 'Confirm',
      text: '¿Are you sure you want to delete this card?',
      allowEscapeKey: false,
      allowEnterKey: false,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'NO',
      confirmButtonText: 'YES',
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(id);
      }
    });
  }
  
  const handleOnUpdate = (id) => {
    setAction(ACTIONS.edit);
    setSelected(id)
    setShowDialog(true)
  }

  return (
    <Box sx={mainStyles.root}>
      <Paper sx={mainStyles.paper}>
        <Box sx={styles.containerC}>
          <Box
            component='h2'
            fontSize={25}
          >
            {title}
          </Box>
        </Box>
        <Box sx={mainStyles.marcoTabla}>
          <Box style={styles.containerC}>
            <Button
              style={{
                ...mainStyles.btnRoot, 
                backgroundColor: 'gray', 
                color: 'white',
                fontWeight: 'bold',
                marginBottom: '20px'
              }}
              variant='contained'
              onClick={handleOnCreate}
            >
              Create Card
            </Button>
          </Box>
          <Box sx={styles.cardsCointainer}>
            {rows.map((row) => (
              <CardView
                key={row._id}
                id={row._id}
                title={row.title}
                description={row.description}
                content={row.content}
                price={row.price}
                handleOnDelete={handleOnDelete}
                handleOnUpdate={handleOnUpdate}
              />
            ))}
          </Box>
          {rows.length === 0 && (
            <Box
              component='h2'
              padding={4}
              fontSize={24}>
              Sin Resultados
            </Box>
          )}
        </Box>
      </Paper>

      {showDialog && (
        <CardCreator
          showDialog={showDialog}
          selected={selected}
          action={action}
          handleOnClose={handleOnClose}
          updateColeccion={updateColeccion}
          title={'Card Creator'}
        />
      )}

      <MessageView
        variant={messageType === UPDATE || messageType === CREATE ? 'success' : 'error'}
        message={message||error}
      />
    </Box>
  );
}

const styles = {
  containerC: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 3,
    border: '1px solid black',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 13,
    marginBottom: 2
  },
  cardContent: {
    fontSize: 13,
    marginBottom: 1
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },
  cardButtonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 3
  },
  cardsCointainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 4,
    overflowY: 'scroll',
    maxHeight: 400
  }
}

export default Card;