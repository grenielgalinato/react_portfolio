export const style = {
  heading: {
    heading1: {
      fontSize: '56px',
      fontWeight: '700',
    },
    heading2: {
      fontSize: '22px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      letterSpacing: '3px',
    },
    heading3: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      marginBottom: '10px',
      letterSpacing: '3px',
    },
    subHeading1: {
      fontSize: '32px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
    },
  },
  box: {
    boxText: {
      padding: '20px',
    },
    boxHeading: {
      // border: '1px solid rgba(255, 255, 255, 0.1)',
      marginBottom: '20px',
      p: '5px 10px',
    },
    boxContentLeftHead: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
    },
    boxContentLeft: {
      position: 'sticky',
      width: '600px',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      height: '75vh',
      overflowY: 'auto',
      top: '100px',
    },
    boxContentLeftBottom: {
      display: 'flex',
      gap: '20px',
      width: '100%',
      alignSelf: 'flex-end',
    },
    boxContentRight: {
      position: 'relative',
      width: '600px',
      flexGrow: 1,
      top: '25px',
    },
    boxContentRightContainer: {
      marginBottom: '60px',
    },
    boxAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: 'none',
      ObjectFit: 'none',
    },
  },
  text: {
    normal: {
      marginBottom: '20px',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.7',
    },
    simple: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.7',
    },
  },
  pill: {
    container: {
      padding: '20px',
    },
    box: {
      marginBottom: '20px',
      _hover: { filter: 'brightness(130%)' },
      transition: 'all 0.1s ease',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      marginBottom: '10px',
      letterSpacing: '3px',
    },
    titleBox: {
      marginRight: '10px',
      width: '10px',
      height: '10px',
    },
    textBox: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    text: {
      fontSize: '16px',
      fontWeight: '400',
      display: 'inline',
      p: '5px 10px',
    },
  },
  exp: {
    container: {
      display: 'flex',
      gap: '10px',
      p: '20px',
      marginBottom: '20px',
      transition: 'all 0.1s ease',
      _hover: {
        bg: 'rgba(255, 255, 255, 0.07)',
        transition: 'all 0.1s ease',
      },
    },
    expLeft: {
      width: '25%',
    },
    expRight: {
      width: '75%',
    },
    expTenure: {
      fontSize: '14px',
      fontWeight: '300',
      margin: '0',
    },
    expBoxHeading: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '20px',
    },
    expHeading: {
      fontSize: '20px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      margin: '0',
      lineHeight: '1',
    },
    expSubHeading: {
      fontSize: '14px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      margin: '0',
      lineHeight: '1',
    },
    expDesc: {
      fontSize: '16px',
      fontWeight: '400',
    },
    expIcon: {
      width: '12px',
      height: '12px',
      fontWeight: 'bold',
      marginRight: '5px',
    },
  },
};
