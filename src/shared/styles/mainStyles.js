export const mainStyles = { 
  marcoTabla: {
    backgroundColor: 'white',
    boxShadow: '0px 0px 5px 5px rgb(0 0 0 / 10%)',
    borderRadius: '4px',
    padding: '15px',
    marginTop: '5px',
  },
  root: {
    width: '100%%',
    padding: '20px',
  },
  head: {
    borderTop: '2px solid #dee2e6',
    borderBottom: '2px solid #dee2e6',
  },
  headCell: {
    padding: '0px 0px 0px 15px',
  },
  row: {
    padding: 'none',
  },
  cell: {
    padding: '0px 0px 0px 15px',
    whiteSpace: 'nowrap',
  },
  acciones:{
    padding: '0px 0px 0px 15px',
    minWidth: '100px',
  },
  paper: {
    width: '100%',
    marginBottom: 20,
    boxShadow: 'none',
    backgroundColor: 'transparent',
  },
  table: {
    minWidth: '100%',
  },
  generalIcons: {
    '&:hover': {
      color: 'green',
      cursor: 'pointer',
    },
  },
  editIcon: {
    color: '#0C4F7F',
  },
  visivilityIcon: {
    color: 'gray',
  },
  deleteIcon: {
    color: 'red',
  },
  paginacion: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10px',
    paddingBottom: '5px',
  },
  rows_per_page_options: {
    marginRight: '10px',
  },
  toolbarRoot: {
    padding: '15px',
    backgroundColor: 'white',
    boxShadow: '0px 0px 5px 5px rgb(0 0 0 / 10%)',
    borderRadius: '4px',
    display: 'grid',
  },
  title: {
    flex: '1 1 100%',
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#0C4F7F',
    color: 'white',
    boxShadow:
      '0px 3px 5px -1px rgb(0 0 0 / 30%), 0px 6px 10px 0px rgb(0 0 0 / 20%), 0px 1px 18px 0px rgb(0 0 0 / 16%)',
    '&:hover': {
      backgroundColor: 'green',
      cursor: 'pointer',
    },
  },
  clearButton: {
    backgroundColor: 'gray',
    color: 'white',
    boxShadow:
      '0px 3px 5px -1px rgb(0 0 0 / 30%), 0px 6px 10px 0px rgb(0 0 0 / 20%), 0px 1px 18px 0px rgb(0 0 0 / 16%)',
    '& :hover': {
      backgroundColor: 'green',
      cursor: 'pointer',
    },
  },
  horizontalBottoms: {
    width: 'min-content',
    display: 'flex',
    gap: '5px',
  },
  titleTop: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  contenedorFiltros: {
    width: '90%',
    display: 'grid',
    gridTemplateColumns: '3fr 3fr 1fr',
    gap: '20px',
  },
  contenedorFiltros2: {
    width: '90%',
    display: 'grid',
    gridTemplateColumns: '3fr 3fr 3fr 1fr',
    gap: '20px',
  },
  bottomsGroup: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '20px',
    gap: '10px',
    backgroundColor: 'white',
    paddingRight: '20px',
    marginTop: 5
  },
  myTextField: {
    width: '100%',
    marginBottom: 1,
    height: '60px',
  },
  MySelectField: {
    width: 'auto',
    marginBottom: 16,
    color: 'black',
    '&:target': {
      color: 'black',
    },
  },
  btnRoot: {
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: 'bold',
    color: 'white',
    '&:hover': {
      backgroundColor: 'green',
      cursor: 'pointer',
    },
  },
  btnPrymary: {
    backgroundColor: '#0C4F7F',
  },
  btnSecundary: {
    backgroundColor: '#AF1F00',
  },
  widthFull: {
    width: '100%',
  },
  pointer: {
    cursor: 'pointer',
  },
  labelLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  marginRight: {
    marginRight: 5
  }
}